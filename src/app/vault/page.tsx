"use client"

import * as React from "react"
import { AppLayout } from "@/components/layout/AppLayout"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Lock, FolderLock, Download, Headphones, FileText, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function TheVault() {
  const [isUnlocked, setIsUnlocked] = React.useState(false)

  if (!isUnlocked) {
    return (
      <AppLayout>
        <div className="h-[70vh] flex flex-col items-center justify-center space-y-8 fade-in text-center px-4">
          <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20 animate-pulse">
            <Lock className="w-16 h-16 text-primary" />
          </div>
          <div className="space-y-4 max-w-xl">
            <h1 className="text-5xl font-headline">The Vault is Sealed.</h1>
            <p className="text-xl text-muted-foreground italic">
              Exclusive unreleased demos, voice notes, and high-res digital scans are reserved for high-tier Echoes.
            </p>
          </div>
          <div className="p-6 bg-card border border-primary/20 rounded-3xl space-y-6 shadow-2xl max-w-sm w-full">
            <div className="flex justify-between items-center border-b border-white/5 pb-4">
               <span className="text-sm font-medium">Your Current Balance</span>
               <span className="font-mono text-primary text-xl">1,240 pts</span>
            </div>
            <div className="space-y-2">
               <div className="flex justify-between text-xs">
                 <span>Vault Access Level</span>
                 <span className="text-primary font-bold">Requires 2,500 pts</span>
               </div>
               <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                 <div className="h-full bg-primary" style={{ width: '49%' }} />
               </div>
            </div>
            <Button 
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 rounded-full"
              onClick={() => setIsUnlocked(true)} // Dev bypass
            >
              Unlock Early (Admin Demo)
            </Button>
            <p className="text-[10px] text-center text-muted-foreground uppercase tracking-widest">
              Complete more quests to earn echoes
            </p>
          </div>
        </div>
      </AppLayout>
    )
  }

  return (
    <AppLayout>
      <div className="space-y-10 fade-in pb-24">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1">
            <h1 className="text-4xl font-headline flex items-center gap-3">
              <FolderLock className="text-secondary w-8 h-8" />
              The Vault
            </h1>
            <p className="text-muted-foreground italic">Unreleased echoes from the creative process.</p>
          </div>
          <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30 py-2 px-4 gap-2">
            <Star className="w-4 h-4 fill-current" />
            Level: Archivist Prime
          </Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-headline border-b border-primary/20 pb-2">Unreleased Audio</h2>
            <div className="space-y-4">
              {[
                { title: "Resonance (2019 Demo)", dur: "3:42", type: "Demo" },
                { title: "Midnight Voice Note #4", dur: "1:15", type: "Sketch" },
                { title: "Ambient Experiment B", dur: "12:00", type: "Texture" }
              ].map((item, i) => (
                <Card key={i} className="bg-card/40 border-white/5 hover:border-primary/30 transition-all cursor-pointer group">
                  <CardContent className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                          <Headphones className="w-5 h-5" />
                       </div>
                       <div>
                          <p className="font-medium">{item.title}</p>
                          <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{item.type} • {item.dur}</p>
                       </div>
                    </div>
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                      <Download className="w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-headline border-b border-primary/20 pb-2">Artifact Scans</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Lyric Scrap #1", img: "https://picsum.photos/seed/scan1/400/500" },
                { title: "Original Synth Patch", img: "https://picsum.photos/seed/scan2/400/500" },
                { title: "Tour Poster Draft", img: "https://picsum.photos/seed/scan3/400/500" },
                { title: "Studio Schematic", img: "https://picsum.photos/seed/scan4/400/500" }
              ].map((item, i) => (
                <div key={i} className="group relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/5">
                  <Image src={item.img} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                     <p className="text-xs font-bold text-primary">{item.title}</p>
                     <p className="text-[10px] text-muted-foreground">High-Res Scan</p>
                  </div>
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="icon" variant="secondary" className="w-8 h-8 rounded-full">
                      <Download className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}