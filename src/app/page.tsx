"use client"

import * as React from "react"
import { AppLayout } from "@/components/layout/AppLayout"
import { SimplePlayer } from "@/components/music/SimplePlayer"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Heart, MessageSquare, Sparkles, BookOpen, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <AppLayout>
      <div className="space-y-8 fade-in">
        {/* Hero Section */}
        <section className="relative h-[400px] w-full rounded-3xl overflow-hidden group shadow-2xl">
          <Image 
            src="https://picsum.photos/seed/doubleu-hero/1200/600" 
            alt="DoubleU Studio" 
            fill 
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 md:p-12 space-y-4 max-w-2xl">
            <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30 uppercase tracking-[0.2em] text-[10px] font-bold py-1 px-3">
              Artist Spotlight
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
              The resonance of <span className="italic text-primary">faded memories.</span>
            </h1>
            <p className="text-lg text-cream/80 max-w-lg leading-relaxed">
              Explore the raw stems of 'Faded Out' or dive deep into the vault of unreleased lyric fragments from the 2021 Winter sessions.
            </p>
            <div className="flex gap-4 pt-4">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-12 shadow-lg shadow-primary/20">
                Explore The Vault
              </Button>
              <Button variant="outline" className="rounded-full px-8 h-12 border-primary/50 text-white hover:bg-white/10">
                View Timeline
              </Button>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Echoes */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-headline flex items-center gap-2">
                <Clock className="w-5 h-5 text-secondary" />
                Recent Echoes
              </h2>
              <Link href="/memory-lane" className="text-sm text-primary hover:underline">View all milestones</Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "The 2024 Winter Session", date: "Jan 12, 2024", img: "https://picsum.photos/seed/studio/400/300" },
                { title: "Acoustic in Berlin", date: "Dec 04, 2023", img: "https://picsum.photos/seed/berlin/400/300" }
              ].map((item, i) => (
                <Card key={i} className="group border-primary/10 hover:border-primary/30 transition-all duration-300 bg-card/50">
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <Image src={item.img} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <CardHeader className="p-4">
                    <div className="flex items-center gap-2 text-[10px] text-muted-foreground uppercase tracking-widest mb-1">
                      <Calendar className="w-3 h-3" />
                      {item.date}
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">{item.title}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>

            {/* AI Narrator Integration Preview */}
            <Card className="bg-primary/5 border-primary/20 p-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Sparkles className="w-16 h-16 text-primary" />
              </div>
              <div className="flex gap-6 items-start">
                <div className="hidden sm:flex w-16 h-16 shrink-0 rounded-2xl bg-primary/20 items-center justify-center border border-primary/30 group-hover:rotate-3 transition-transform">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-headline">The Echoes Narrator says...</h3>
                  <p className="italic text-cream/70 leading-relaxed font-body text-lg">
                    "The vintage tape hiss in 'Faded Out' isn't a defect—it's a deliberate choice by DoubleU to mimic the degradation of long-term memory. Each track was recorded onto 30-year-old reels to capture the authentic warmth of nostalgia."
                  </p>
                  <Button variant="link" className="p-0 text-secondary h-auto hover:text-secondary/80">
                    Ask for more lore →
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar Area */}
          <div className="space-y-6">
            <h2 className="text-2xl font-headline flex items-center gap-2">
              <Heart className="w-5 h-5 text-secondary" />
              Community Pulse
            </h2>
            <Card className="bg-card/50 border-primary/10">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Fan Quests</CardTitle>
                <CardDescription>Earn points for exclusivity</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { label: "Listen to 'Faded Out' 10 times", reward: "+50 pts", progress: 70 },
                  { label: "Sign the guestbook", reward: "+20 pts", progress: 100 },
                  { label: "Unlock 3 Memory Lane entries", reward: "+100 pts", progress: 30 }
                ].map((quest, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-xs font-medium">
                      <span>{quest.label}</span>
                      <span className="text-primary">{quest.reward}</span>
                    </div>
                    <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: `${quest.progress}%` }} />
                    </div>
                  </div>
                ))}
                <Button className="w-full mt-4" variant="outline">Explore All Quests</Button>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-primary/10">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Top Archivists</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { name: "EchoFinder_99", points: "4,210", rank: "Original Echo" },
                  { name: "VinylVibes", points: "3,840", rank: "The Archivist" },
                  { name: "DoubleU_Fan_1", points: "3,120", rank: "Active Listener" }
                ].map((fan, i) => (
                  <div key={i} className="flex items-center gap-3 py-2 border-b border-white/5 last:border-0">
                    <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center font-bold text-xs text-secondary border border-secondary/30">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{fan.name}</p>
                      <p className="text-[10px] text-muted-foreground uppercase">{fan.rank}</p>
                    </div>
                    <span className="text-xs font-mono text-primary">{fan.points}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Floating Music Player */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4 z-50">
        <SimplePlayer />
      </div>
    </AppLayout>
  )
}