import { Module } from '@nestjs/common';
import { RedisGatewayService } from './redis-gateway.service';
import { WebsocketModule } from '../websocket/websocket.module';

@Module({
  providers: [RedisGatewayService],
  imports: [WebsocketModule]
})
export class RedisGatewayModule {}
