import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import {PrismaService} from '../../core/prisma/prisma.service';
import {OAuthCreateUserParams, PasswordCreateUserParams} from './types/create-user-params.interface';
import { Prisma, UserLinkProvider } from 'prisma/generated';

@Injectable()
export class UserService {
	constructor(private readonly prismaService: PrismaService) {}

	async create(params: PasswordCreateUserParams | OAuthCreateUserParams){
		try {
			return await this.prismaService.user.create({
				data: {
					username: params.username,
					displayName: params.displayName,
					avatarUrl: params.type === 'oauth' ? params.avatarUrl : undefined,
					credentials: params.type === 'password' ? {
						create: {
							passwordHash: params.password
						}
					} : undefined,
					links: params.type === 'oauth' ? {
						create: {
							provider: params.provider,
							providerUserId: params.providerUserId,
							accessKey: params.accessToken,
							refreshKey: params.refreshToken
						}
					} : undefined,
				},
				include: {
					links: true,
					credentials: true
				}
			});
		}catch(err){
			console.log(err);
			if (
				err instanceof Prisma.PrismaClientKnownRequestError &&
				err.code === 'P2002' // unique constraint violation
			) {
				const target = Array.isArray(err.meta?.target) ? err.meta.target : [];
				if (target.includes('username')) {
					throw new ConflictException(`User with this username already exists`);
				}
			}

			throw new InternalServerErrorException('Could not create user');
		}
	}
  async getByUsername(username: string, withCredentials = false){
    const user = await this.prismaService.user.findUnique({
      where: {
        username,
      }
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }
  async dangerGetByUsernameWithCredentials(username: string){
    const user = await this.prismaService.user.findUnique({
      where: {
        username,
      },
      include: {
        credentials: {
          where: {
            isActive: true
          },
          select: {
            passwordHash: true
          }
        }
      }
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }
  async getByProvider(provider: UserLinkProvider, providerUserId: string) {
    const userLink = await this.prismaService.userLink.findUnique({
      where: {
        providerUserId_provider: {
          provider,
          providerUserId,
        }
      },
      include: {
        user: true
      }
    });

    if (!userLink) {
      throw new NotFoundException('User not found');
    }

    return userLink.user;
  }
  async getById(id: string){
    const user = await this.prismaService.user.findUnique({
      where: {
        id
      },
    })
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }
}
