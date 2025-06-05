import { WebsocketModule } from '../websocket/websocket.module'
import { Module } from '@nestjs/common'

import { RedisGatewayService } from './redis-gateway.service'

@Module({
  providers: [RedisGatewayService],
  imports: [WebsocketModule],
})
export class RedisGatewayModule {}
