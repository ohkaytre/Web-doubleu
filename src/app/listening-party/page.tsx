
"use client"

import * as React from "react"
import { AppLayout } from "@/components/layout/AppLayout"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mic2, Users, Send, Music, Sparkles, Heart } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const chatMessages = [
  { id: 1, user: "VinylVibes", text: "That transition at 2:45 is incredible!", time: "2:45 PM" },
  { id: 2, user: "Echo_Expert", text: "The synth layering here is so deep.", time: "2:46 PM" },
  { id: 3, user: "Admin", text: "Welcome to the 'Resonance' listening party! Glad to have you all here.", time: "2:46 PM", isAdmin: true },
]

export default function ListeningParty() {
  const [messages, setMessages] = React.useState(chatMessages)
  const [input, setInput] = React.useState("")

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return
    setMessages([...messages, { id: Date.now(), user: "You", text: input, time: "Just now" }])
    setInput("")
  }

  return (
    <AppLayout>
      <div className="h-[calc(100vh-12rem)] grid grid-cols-1 lg:grid-cols-3 gap-8 fade-in">
        {/* Main Stage */}
        <div className="lg:col-span-2 space-y-6 flex flex-col">
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-primary/20 shadow-2xl bg-muted group">
            <Image 
              src="https://picsum.photos/seed/studio_live/1200/800" 
              alt="Live Stream" 
              fill 
              className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-[10s]" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute top-6 left-6 flex gap-2">
              <Badge variant="destructive" className="animate-pulse px-3 py-1 flex gap-2 items-center">
                <span className="w-2 h-2 rounded-full bg-white" /> LIVE
              </Badge>
              <Badge variant="secondary" className="bg-background/60 backdrop-blur border-primary/20 flex gap-2 items-center">
                <Users className="w-3 h-3" /> 1,242 Watching
              </Badge>
            </div>
            <div className="absolute bottom-8 left-8 space-y-2">
              <h2 className="text-4xl font-headline text-white drop-shadow-lg">Resonance: Full Album Playthrough</h2>
              <p className="text-cream/80 italic text-lg drop-shadow-md flex items-center gap-2">
                <Music className="w-5 h-5 text-primary" /> Now Playing: "Faded Out" (Track 4/12)
              </p>
            </div>
          </div>

          <Card className="bg-primary/5 border-primary/10 p-6 rounded-3xl">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <Avatar className="w-12 h-12 border-2 border-primary/40">
                  <AvatarImage src="https://picsum.photos/seed/artist/100/100" />
                  <AvatarFallback>W</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-headline text-xl">DoubleU</h3>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">Artist • Host</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="rounded-full border-primary/20">
                  <Heart className="w-4 h-4" />
                </Button>
                <Button className="rounded-full gap-2 px-6 bg-primary text-primary-foreground">
                  <Sparkles className="w-4 h-4" /> Tip Artist
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Live Chat */}
        <Card className="flex flex-col bg-card/40 border-white/5 rounded-3xl overflow-hidden">
          <div className="p-4 border-b border-white/5 flex items-center gap-3">
            <Mic2 className="w-5 h-5 text-secondary" />
            <span className="font-headline text-lg">Live Community Chat</span>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`space-y-1 ${msg.isAdmin ? 'bg-primary/5 p-3 rounded-2xl border border-primary/10' : ''}`}>
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-bold ${msg.isAdmin ? 'text-primary' : 'text-secondary'}`}>{msg.user}</span>
                  <span className="text-[10px] text-muted-foreground">{msg.time}</span>
                </div>
                <p className="text-sm text-cream/90">{msg.text}</p>
              </div>
            ))}
          </div>

          <form onSubmit={handleSend} className="p-4 border-t border-white/5 bg-background/40 backdrop-blur">
            <div className="flex gap-2">
              <Input 
                placeholder="Say something..." 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="bg-card/50 border-white/10 rounded-full h-10 px-6 focus:ring-primary/40"
              />
              <Button type="submit" size="icon" className="rounded-full bg-primary text-primary-foreground h-10 w-10 shrink-0">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </AppLayout>
  )
}

import Image from "next/image"
