export const QueryKeys = {
  CurrentUser: 'CURRENT_USER',
  RecentConversions: 'RECENT_CONVERSATIONS',
  Conversations: 'CONVERSATIONS',
} as const

export type QueryKeys = (typeof QueryKeys)[keyof typeof QueryKeys]
