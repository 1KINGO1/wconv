import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { TokenService } from '../auth/token/token.service';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
@WebSocketGateway({
  cors: {
    origin: '*',
  }
})
export class WebsocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  private readonly logger = new Logger(WebsocketGateway.name);

  constructor(private readonly tokenService: TokenService) {
  }

  async handleConnection(client: Socket) {
    try {
      const token = this.extractToken(client);
      const payload = await this.tokenService.verifyAccessToken(token);

      const roomName = this.generateRoomName(payload.id);
      client.join(roomName);
      this.logger.log(`Client connected: ${client.id} [${roomName}]`);
    } catch (e) {
      client.disconnect();
    }
  }
  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  emitToUser(userId: string, name: string, body: Record<string, any>) {
    return this.server.to(this.generateRoomName(userId)).emit(name, JSON.stringify(body));
  }

  private generateRoomName(userId: string) {
    return 'room-' + userId;
  }
  private extractToken(client: Socket): string {
    const token =
      client.handshake?.auth?.accessToken ||
      client.handshake?.query?.accessToken ||
      client.handshake?.headers?.authorization?.replace('Bearer ', '');

    if (!token) {
      throw new Error('Token not found');
    }

    return token;
  }
}