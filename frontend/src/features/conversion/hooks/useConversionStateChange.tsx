import { useEffect } from 'react'

import { WebsocketEvents } from '@/shared/constants/websocket-events'
import { Conversion } from '@/shared/entity/Conversion'
import { useSocket } from '@/shared/hooks/useSocket'

import { useQueryClient } from '@tanstack/react-query'
import { QueryKeys } from '@/shared/constants/query-keys'

export function useConversionStateChange() {
  const socket = useSocket()
  const queryClient = useQueryClient()

  useEffect(() => {
    if (!socket) {
      return
    }

    const conversionStateChangedHandler = (body: string) => {
      const parsedBody: {conversion: Conversion} = JSON.parse(body);

      if (!parsedBody.conversion) {
        console.error('Invalid conversion state update received:', body);
        return;
      }

      function updateCache(oldConversions: Conversion[]) {
        const newConversions = [];

        for (const conversion of oldConversions || []) {
          if (conversion.id === parsedBody.conversion.id) {
            newConversions.push(parsedBody.conversion)
          } else {
            newConversions.push(conversion)
          }
        }

        return newConversions;
      }

      queryClient.setQueryData(
        [QueryKeys.RecentConversions],
        updateCache,
      )

      queryClient.setQueryData(
        [QueryKeys.Conversations],
        updateCache,
      )
    }

    socket.on(
      WebsocketEvents.ConversionStateUpdate,
      conversionStateChangedHandler,
    )

    return () => {
      socket.off(
        WebsocketEvents.ConversionStateUpdate,
        conversionStateChangedHandler,
      )
    }
  }, [socket])
}
