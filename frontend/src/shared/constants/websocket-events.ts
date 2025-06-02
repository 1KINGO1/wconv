export const WebsocketEvents = {
  ConversionStateUpdate: 'conversion-state-update',
} as const

export type WebsocketEvents =
  (typeof WebsocketEvents)[keyof typeof WebsocketEvents]
