import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useEffect, useState } from 'react'

import Layout from '@/components/Layout/Layout'
import { Tables } from 'database.types'
import { User } from '@supabase/supabase-js'
import { supabase } from '@/supabaseClient'

export default function Messages() {
  type Chat = Tables<'Proposal'> & {
    receiverId: { id: string; name: string; imageUrl: string }
    userId: { id: string; name: string; imageUrl: string }
  }
  const [message, setMessage] = useState<string>('')
  const [user, setUser] = useState<User | null>()
  const [chats, setChats] = useState<Chat[]>()
  const [selectedChat, setSelectedChat] = useState<number>(0)
  const [chatMessages, setChatMessages] = useState<Tables<'Message'>[]>()
  useEffect(() => {
    const getChats = async () => {
      const { data: userData } = await supabase.auth.getUser()
      setUser(userData.user)
      if (!userData.user) return
      const { data, error } = await supabase
        .from('Proposal')
        .select(
          '*, receiverId (id, name, imageUrl), userId (id, name, imageUrl)'
        )
        .or(`userId.eq.${userData.user.id},receiverId.eq.${userData.user.id}`)
      if (error) return console.error(error)
      setChats(data as unknown as never)
      console.log(data)
    }
    getChats()
  }, [])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleInserts = (payload: { new: any }) => {
    const newChat = payload.new
    console.log(payload)
    console.log({ newChat })
    if (newChat.ProposalId !== chats![selectedChat].id) return
    setChatMessages((prev) => {
      if (!prev) return
      return [...prev, newChat]
    })
  }
  useEffect(() => {
    supabase
      .channel('Message')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'Message' },
        handleInserts
      )
      .subscribe()
  }, [])
  useEffect(() => {
    const getChatMessages = async () => {
      const { data: userData } = await supabase.auth.getUser()
      if (!userData.user || !chats) return
      const chat = chats[selectedChat] || chats[0]
      const { data: dataChat, error: errorChat } = await supabase
        .from('Message')
        .select('*')
        .eq('ProposalId', chat.id)
      if (errorChat) return console.error(errorChat)
      setChatMessages(dataChat)
    }
    console.log({ selectedChat })
    console.log(chatMessages)
    getChatMessages()
  }, [selectedChat, chats])
  const sendMessage = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const { data: userData } = await supabase.auth.getUser()
    if (!userData.user || !chats) return
    const chat = chats[selectedChat] || chats[0]
    const { data, error } = await supabase.from('Message').insert({
      senderId: userData.user.id,
      receiverId: chat.receiverId.id,
      content: message,
      ProposalId: chat.id
    })
    setMessage('')
    if (error) return console.error(error)
    console.log(data)
  }
  return (
    <Layout>
      <div className='flex flex-1'>
        <div className='flex flex-col  flex-1 bg-white border max-w-[25%]'>
          {chats?.map((n, i) => (
            <div
              key={n.id}
              className={
                'flex items-center gap-4 px-6 py-3 text-lg hover:bg-gray-50 ' +
                (selectedChat === i ? ' bg-gray-100' : '')
              }
              onClick={() => setSelectedChat(i)}
            >
              {n.userId.id === user?.id ? (
                <>
                  <Avatar className=' size-14'>
                    <AvatarImage
                      src={n.receiverId.imageUrl || '/img/foto-perfil.png'}
                      alt='foto-perfil'
                    />
                    <AvatarFallback>{n.receiverId.name?.[0]}</AvatarFallback>
                  </Avatar>

                  <p>{n.receiverId.name}</p>
                </>
              ) : (
                <>
                  <Avatar className='size-14'>
                    <AvatarImage
                      src={n.userId.imageUrl || '/img/foto-perfil.png'}
                      alt='foto-perfil'
                    />
                    <AvatarFallback>{n.userId.name?.[0]}</AvatarFallback>
                  </Avatar>
                  <p>{n.userId.name}</p>
                </>
              )}
            </div>
          ))}
        </div>
        <div className='flex flex-col items-start justify-between flex-1 w-full overflow-scroll border bg-gray-50'>
          <div className='flex flex-col w-full'>
            {chatMessages?.map((n) =>
              n.senderId === user?.id ? (
                <div
                  key={n.id}
                  className='flex items-center justify-end w-full gap-4 px-6 py-3 text-lg'
                >
                  <span className='px-4 py-2 ml-auto bg-yellow-200 rounded-full '>
                    {n.content}
                  </span>
                </div>
              ) : (
                <div
                  key={n.id}
                  className='flex items-center gap-4 px-6 py-3 text-lg'
                >
                  <span className='px-4 py-2 mr-auto bg-gray-200 rounded-full '>
                    {n.content}
                  </span>
                </div>
              )
            )}
          </div>
          <form onSubmit={sendMessage} className='flex w-full p-5'>
            <input
              type='text'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className='flex w-full px-4 py-2 border border-gray-100 rounded-l-full'
              placeholder='Escribe tu mensaje'
            />
            <button className='px-4 py-2 text-black bg-yellow-200 rounded-r-full'>
              Enviar
            </button>
          </form>
        </div>
      </div>
    </Layout>
  )
}
