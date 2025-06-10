'use client'

import { PropsWithChildren, useEffect, useRef, useState } from 'react'
import { io, Socket } from 'socket.io-client'

import { SocketContext } from '@/context/SocketContext'
import { accessTokenService } from '@/shared/services/access-token.service'

export const SocketProvider = ({ children }: PropsWithChildren) => {
  const socketRef = useRef<Socket | null>(null)
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    socketRef.current = io( process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000', {
      autoConnect: true,
      extraHeaders: {
        Authorization: `Bearer ${accessTokenService.getAccessToken()}`,
      },
    })

    return () => {
      socketRef.current?.disconnect()
    }
  }, [])

  useEffect(() => {
    if (socketRef.current === null) return

    const onConnect = () => {
      console.log('Socket connected:', socketRef.current?.id)
      setIsConnected(true)
    }
    const onDisconnect = () => {
      console.log('Socket disconnected:', socketRef.current?.id)
      setIsConnected(false)
    }

    socketRef.current.on('connect', onConnect)
    socketRef.current.on('disconnect', onDisconnect)

    return () => {
      socketRef?.current?.off('connect', onConnect)
      socketRef?.current?.off('disconnect', onDisconnect)
    }
  }, [])

  return (
    <SocketContext.Provider value={isConnected ? socketRef.current : null}>
      {children}
    </SocketContext.Provider>
  )
}
