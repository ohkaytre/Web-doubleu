
"use client"

import * as React from "react"
import { AppLayout } from "@/components/layout/AppLayout"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { PenTool, Clock, BookOpen, Quote } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"

const entries = [
  {
    id: 1,
    date: "Feb 14, 2024",
    title: "The Sound of Dust",
    content: "There's a specific frequency that old synthesizers emit when they haven't been cleaned in years. It's a grit that digital plugins can't emulate. It's the sound of time passing through circuits.",
    image: "https://picsum.photos/seed/dust/800/400"
  },
  {
    id: 2,
    date: "Jan 28, 2024",
    title: "Late Night Sketches",
    content: "Midnight sessions in the studio always feel different. The world is quiet, and the tape hiss starts to sound like conversation. Working on something new that feels like winter light.",
    image: "https://picsum.photos/seed/night/800/400"
  },
  {
    id: 3,
    date: "Dec 12, 2023",
    title: "Resonance Revisited",
    content: "Looking back at the Resonance sessions, I realize how much of that record was influenced by the rain in Berlin. Every track has a damp, metallic edge to it.",
    image: null
  }
]

export default function DigitalAttic() {
  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto space-y-12 fade-in">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-headline flex items-center justify-center gap-4">
            <PenTool className="text-secondary w-10 h-10" />
            The Digital Attic
          </h1>
          <p className="text-muted-foreground italic text-lg max-w-2xl mx-auto">
            A collection of fragments, thoughts, and artifacts from the creative process.
          </p>
        </div>

        <div className="space-y-16">
          {entries.map((entry) => (
            <article key={entry.id} className="relative space-y-6 group">
              <div className="flex items-center gap-4 text-xs text-muted-foreground uppercase tracking-[0.2em]">
                <Clock className="w-3 h-3" />
                {entry.date}
              </div>
              
              <div className="space-y-4">
                <h2 className="text-3xl font-headline group-hover:text-primary transition-colors cursor-pointer">{entry.title}</h2>
                {entry.image && (
                  <div className="relative aspect-video rounded-3xl overflow-hidden border border-primary/10 shadow-2xl">
                    <Image src={entry.image} alt={entry.title} fill className="object-cover" />
                  </div>
                )}
                <div className="relative">
                  <Quote className="absolute -left-8 -top-4 w-12 h-12 text-primary/5" />
                  <p className="text-xl text-cream/90 font-body leading-relaxed italic">
                    {entry.content}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <Avatar className="w-8 h-8 border border-primary/20">
                  <AvatarImage src="https://picsum.photos/seed/artist/100/100" />
                  <AvatarFallback>W</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium text-primary">DoubleU Log Entry</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </AppLayout>
  )
}
