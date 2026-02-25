"use client"

import * as React from "react"
import { AppLayout } from "@/components/layout/AppLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Users, Send, MessageSquare, Quote } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const initialMessages = [
  { id: 1, user: "Archivist_99", role: "Original Echo", message: "Listening to 'Faded Out' on vinyl today. The warmth of the analog synths is unmatched. Thank you for this world, DoubleU.", date: "2 hours ago" },
  { id: 2, user: "NostalgiaHunter", role: "Archivist", message: "That Berlin rooftop session literally changed my life. Can't wait for more updates in Memory Lane.", date: "1 day ago" },
  { id: 3, user: "VinylVibes", role: "Community Elder", message: "Found an old Polaroid from the 2019 sessions in my attic. Might upload it to the fan gallery soon!", date: "3 days ago" },
]

export default function Guestbook() {
  const [messages, setMessages] = React.useState(initialMessages)
  const [newMessage, setNewMessage] = React.useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newMessage.trim()) return
    const post = {
      id: Date.now(),
      user: "Current_User",
      role: "Fan",
      message: newMessage,
      date: "Just now"
    }
    setMessages([post, ...messages])
    setNewMessage("")
  }

  return (
    <AppLayout>
      <div className="max-w-3xl mx-auto space-y-10 fade-in">
        <div className="text-center space-y-3">
          <h1 className="text-4xl font-headline flex items-center justify-center gap-3">
            <Users className="text-secondary w-10 h-10" />
            Fan Guestbook
          </h1>
          <p className="text-muted-foreground italic text-lg">Leave a note, share a memory, and connect with the community.</p>
        </div>

        <Card className="border-primary/30 bg-card/60 shadow-2xl">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-primary" />
              Sign the Book
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Textarea 
                placeholder="What does DoubleU's music mean to you today?" 
                className="bg-background/50 border-primary/20 min-h-[120px] focus:ring-primary/40 text-lg italic font-body"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <div className="flex justify-between items-center">
                <p className="text-xs text-muted-foreground italic">Messages are moderated before appearing publicly.</p>
                <Button className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 rounded-full">
                  <Send className="w-4 h-4" /> Post Entry
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          {messages.map((msg) => (
            <div key={msg.id} className="relative group animate-in fade-in slide-in-from-bottom-4 duration-500">
               <Quote className="absolute -left-4 -top-4 w-12 h-12 text-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
               <Card className="border-white/5 bg-card/40 hover:border-primary/20 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <Avatar className="w-12 h-12 border border-primary/20">
                      <AvatarImage src={`https://picsum.photos/seed/${msg.user}/100/100`} />
                      <AvatarFallback>{msg.user[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-primary font-headline">{msg.user}</span>
                          <Badge variant="secondary" className="text-[9px] py-0 h-4 uppercase tracking-tighter bg-primary/10 text-primary border-primary/20">
                            {msg.role}
                          </Badge>
                        </div>
                        <span className="text-[10px] text-muted-foreground uppercase tracking-widest">{msg.date}</span>
                      </div>
                      <p className="text-cream/90 leading-relaxed font-body text-lg italic">
                        "{msg.message}"
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  )
}