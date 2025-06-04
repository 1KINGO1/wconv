import { useContext } from 'react'
import { Socket } from 'socket.io-client'

import { SocketContext } from '@/context/SocketContext'

export const useSocket = (): Socket | null => {
  const socket = useContext(SocketContext)
  return socket ?? null
}
