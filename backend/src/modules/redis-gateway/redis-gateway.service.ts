import { RedisService } from '../../core/redis/redis.service'
import { RedisGatewayWebhookMessageBody } from '../../shared/constants/redis-gateway-event-bodies'
import { RedisGatewayEvents } from '../../shared/constants/redis-gateway-events.enum'
import { WebsocketGateway } from '../websocket/websocket.gateway'
import { Injectable, OnModuleInit } from '@nestjs/common'

@Injectable()
export class RedisGatewayService implements OnModuleInit {
  constructor(
    private readonly redisService: RedisService,
    private readonly websocketService: WebsocketGateway,
  ) {}

  async onModuleInit() {
    await this.redisService.subscriber.subscribe(RedisGatewayEvents.WEBSOCKET_MESSAGE)

    this.redisService.subscriber.on('message', (channel, message) => {
      switch (channel) {
        case RedisGatewayEvents.WEBSOCKET_MESSAGE:
          this.handleWebsocketMessageEvent(message)
          break
        default:
          console.log('Unknown event', channel)
      }
    })
  }

  private async handleWebsocketMessageEvent(message: string) {
    const body: RedisGatewayWebhookMessageBody = JSON.parse(message)
    this.websocketService.emitToUser(body.userId, body.eventName, body.body)
  }
}
