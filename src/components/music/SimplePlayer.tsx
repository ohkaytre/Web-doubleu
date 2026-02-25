"use client"

import * as React from "react"
import { Play, Pause, SkipBack, SkipForward, Volume2, Repeat, Shuffle } from "lucide-react"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function SimplePlayer() {
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [progress, setProgress] = React.useState([33])

  return (
    <div className="w-full bg-card border rounded-xl p-4 flex flex-col md:flex-row items-center gap-4 shadow-xl">
      <div className="flex items-center gap-4 w-full md:w-auto">
        <div className="relative w-16 h-16 rounded-md overflow-hidden border border-primary/20">
          <Image 
            src="https://picsum.photos/seed/fadedout/200/200" 
            alt="Faded Out cover" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="font-headline text-lg text-primary leading-tight">Faded Out</h3>
          <p className="text-xs text-muted-foreground uppercase tracking-widest">DoubleU • Resonance Era</p>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center gap-2 w-full">
        <div className="flex items-center gap-6">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
            <Shuffle className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
            <SkipBack className="w-5 h-5 fill-current" />
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            className="w-12 h-12 rounded-full border-primary/50 text-primary hover:bg-primary/10"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-1" />}
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
            <SkipForward className="w-5 h-5 fill-current" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
            <Repeat className="w-4 h-4" />
          </Button>
        </div>
        <div className="flex items-center gap-2 w-full max-w-xl">
          <span className="text-[10px] text-muted-foreground font-mono">1:24</span>
          <Slider 
            value={progress} 
            onValueChange={setProgress} 
            max={100} 
            step={1} 
            className="flex-1 cursor-pointer" 
          />
          <span className="text-[10px] text-muted-foreground font-mono">4:12</span>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-3 w-48 justify-end">
        <Volume2 className="w-4 h-4 text-muted-foreground" />
        <Slider defaultValue={[70]} max={100} step={1} className="w-24" />
      </div>
    </div>
  )
}