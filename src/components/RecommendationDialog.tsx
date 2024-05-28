import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'

import { Button } from '@/components/ui/button'
import Input from './Input'
import { supabase } from '@/supabaseClient'
import { useState } from 'react'
import { useToast } from './ui/use-toast'

export function RecommendationDialog({
  name,
  receiverId
}: {
  name: string
  receiverId: string
}) {
  const [formData, setFormData] = useState({ title: '', description: '' })
  const { toast } = useToast()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleClick = async () => {
    const { data } = await supabase.auth.getSession()
    const userId = data?.session?.user.id || ''
    const title = formData.title || ''
    const description = formData.description || ''
    if (!userId || !title || !description) return
    const { data: userData } = await supabase
      .from('Recommendation')
      .select('id')
      .eq('userId', userId)
      .eq('receiverId', receiverId)
      .single()
    if (userData) {
      toast({
        title: 'Error',
        description: 'Ya has enviado una propuesta a este usuario'
      })
      return
    }
    const { data: proposalData, error } = await supabase
      .from('Proposal')
      .insert({
        title,
        description,
        receiverId,
        userId
      })
      .select('id')
    if (!proposalData) return
    const { error: errorChat } = await supabase.from('Message').insert({
      senderId: userId,
      receiverId,
      content: description,
      ProposalId: proposalData[0].id
    })
    if (error || errorChat) {
      toast({
        title: 'Error',
        description: 'No se pudo enviar el mensaje'
      })
    } else {
      toast({
        title: 'Mensaje enviado',
        description: `La propuesta a ${name} ha sido enviada`
      })
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>Recomendar</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Entabla una conversación con {name}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {name} recibirá una notificación de tu interés en contactarle.
          </AlertDialogDescription>
          <Input label='Título' htmlName='title' onChange={handleChange} />
          <Input
            label='Mensaje'
            htmlName='description'
            textarea
            onChange={handleChange}
          />
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={handleClick}>Enviar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
