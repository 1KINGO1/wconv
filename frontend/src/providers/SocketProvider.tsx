'use client'

import { PropsWithChildren, useEffect, useRef, useState } from 'react'
import { io, Socket } from 'socket.io-client'

import { SocketContext } from '@/context/SocketContext'
import { accessTokenService } from '@/shared/services/access-token.service'
import { useCurrentUser } from '@/shared/hooks/useCurrentUser'

export const SocketProvider = ({ children }: PropsWithChildren) => {
  const {isSuccess: isCurrentUserSuccess} = useCurrentUser()
  const [socket, setSocket] = useState<Socket | null>(null)
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    if (!isCurrentUserSuccess) return;

    setSocket(io( process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000', {
      autoConnect: true,
      extraHeaders: {
        Authorization: `Bearer ${accessTokenService.getAccessToken()}`,
      },
    }))

    return () => {
      socket?.disconnect()
    }
  }, [isCurrentUserSuccess])

  useEffect(() => {
    if (socket === null) return

    const onConnect = () => {
      console.log('Socket connected:', socket?.id)
      setIsConnected(true)
    }
    const onDisconnect = () => {
      console.log('Socket disconnected:', socket?.id)
      setIsConnected(false)
    }

    socket.on('connect', onConnect)
    socket.on('disconnect', onDisconnect)

    return () => {
      socket?.off('connect', onConnect)
      socket?.off('disconnect', onDisconnect)
    }
  }, [socket])

  return (
    <SocketContext.Provider value={isConnected ? socket : null}>
      {children}
    </SocketContext.Provider>
  )
}
