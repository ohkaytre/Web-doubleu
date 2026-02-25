
"use client"

import * as React from "react"
import { AppLayout } from "@/components/layout/AppLayout"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Music, Play, ExternalLink, Disc, Calendar } from "lucide-react"
import Image from "next/image"

const releases = [
  { id: 1, title: "Resonance", type: "Album", year: "2021", tracks: 12, img: "https://picsum.photos/seed/res/600/600", color: "from-blue-500/20" },
  { id: 2, title: "Faded Out", type: "Single", year: "2021", tracks: 1, img: "https://picsum.photos/seed/faded/600/600", color: "from-orange-500/20" },
  { id: 3, title: "Echoes EP", type: "EP", year: "2019", tracks: 5, img: "https://picsum.photos/seed/echo/600/600", color: "from-purple-500/20" },
  { id: 4, title: "The Basement Tapes", type: "Demo", year: "2018", tracks: 8, img: "https://picsum.photos/seed/base/600/600", color: "from-stone-500/20" },
]

export default function Discography() {
  return (
    <AppLayout>
      <div className="space-y-10 fade-in">
        <div className="space-y-2">
          <h1 className="text-4xl font-headline flex items-center gap-3">
            <Music className="text-secondary w-8 h-8" />
            Discography Map
          </h1>
          <p className="text-muted-foreground italic">Navigating the sonic landscape of DoubleU.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {releases.map((release) => (
            <Card key={release.id} className="overflow-hidden border-primary/10 bg-card/40 group hover:border-primary/40 transition-all duration-500 shadow-xl hover:shadow-primary/5">
              <div className="flex flex-col sm:flex-row">
                <div className="relative aspect-square w-full sm:w-48 shrink-0 overflow-hidden">
                  <Image src={release.img} alt={release.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${release.color} to-transparent opacity-60`} />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm">
                    <Button size="icon" variant="ghost" className="rounded-full w-12 h-12 text-primary border border-primary/40">
                      <Play className="w-6 h-6 fill-current" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="border-primary/20 text-primary uppercase text-[10px] tracking-widest">{release.type}</Badge>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {release.year}
                      </span>
                    </div>
                    <CardTitle className="text-2xl font-headline group-hover:text-primary transition-colors">{release.title}</CardTitle>
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <Disc className="w-4 h-4" /> {release.tracks} Tracks
                    </p>
                  </div>
                  <div className="flex gap-2 pt-4">
                    <Button variant="outline" size="sm" className="flex-1 rounded-full gap-2 text-xs border-primary/20 hover:bg-primary/10">
                      Details
                    </Button>
                    <Button size="sm" className="flex-1 rounded-full gap-2 text-xs bg-primary text-primary-foreground">
                      <ExternalLink className="w-3 h-3" /> Listen
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </AppLayout>
  )
}
