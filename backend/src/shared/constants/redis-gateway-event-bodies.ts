export interface RedisGatewayWebhookMessageBody {
  userId: string
  eventName: string
  body: Record<string, any>
}
