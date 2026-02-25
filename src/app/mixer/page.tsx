"use client"

import * as React from "react"
import { AppLayout } from "@/components/layout/AppLayout"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Radio, Music2, Mic2, Waves, Zap, Play, Pause, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const stems = [
  { id: "vocals", name: "Vocals", icon: Mic2, color: "text-rose-400" },
  { id: "synths", name: "Vintage Synths", icon: Zap, color: "text-amber-400" },
  { id: "drums", name: "Rhythm Layer", icon: Music2, color: "text-blue-400" },
  { id: "ambient", name: "Ambient Pads", icon: Waves, color: "text-emerald-400" },
]

export default function SoundscapeMixer() {
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [activeStems, setActiveStems] = React.useState<string[]>(stems.map(s => s.id))

  const toggleStem = (id: string) => {
    setActiveStems(prev => 
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    )
  }

  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto space-y-8 fade-in">
        <div className="space-y-2 text-center">
          <Badge variant="secondary" className="mb-2">Experimental Feature</Badge>
          <h1 className="text-4xl font-headline flex items-center justify-center gap-3">
            <Radio className="text-secondary w-10 h-10" />
            The Soundscape Mixer
          </h1>
          <p className="text-muted-foreground italic text-lg">Deconstruct 'Faded Out' to hear the raw layers of the storytelling.</p>
        </div>

        <div className="bg-card border border-primary/20 rounded-3xl p-8 shadow-2xl space-y-12">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Button 
                size="icon" 
                className="w-16 h-16 rounded-full bg-primary hover:bg-primary/90 shadow-xl"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? <Pause className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 fill-current ml-1" />}
              </Button>
              <div className="space-y-1">
                <h3 className="text-xl font-headline leading-none">Faded Out (Stem Edit)</h3>
                <p className="text-sm text-muted-foreground">Original Studio Mix • 2021</p>
              </div>
            </div>
            <Button variant="outline" className="rounded-full gap-2 border-primary/30" onClick={() => setActiveStems(stems.map(s => s.id))}>
              <RotateCcw className="w-4 h-4" /> Reset Mix
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {stems.map((stem) => {
              const isActive = activeStems.includes(stem.id)
              return (
                <div key={stem.id} className={`space-y-6 p-6 rounded-2xl transition-all duration-300 border ${isActive ? 'bg-primary/5 border-primary/30' : 'bg-muted/10 border-transparent opacity-50'}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-xl bg-background border ${isActive ? 'border-primary/40' : 'border-transparent'}`}>
                        <stem.icon className={`w-6 h-6 ${isActive ? stem.color : 'text-muted-foreground'}`} />
                      </div>
                      <Label className="text-lg font-headline">{stem.name}</Label>
                    </div>
                    <Switch 
                      checked={isActive}
                      onCheckedChange={() => toggleStem(stem.id)}
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between text-xs font-mono opacity-60">
                      <span>Mute</span>
                      <span>Full Gain</span>
                    </div>
                    <Slider defaultValue={[80]} max={100} step={1} disabled={!isActive} className="cursor-pointer" />
                  </div>
                </div>
              )
            })}
          </div>

          <div className="p-6 bg-secondary/5 rounded-2xl border border-secondary/20">
             <div className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full bg-secondary/20 flex items-center justify-center text-secondary border border-secondary/30">
                  <Mic2 className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Producer's Note</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    The 'Vintage Synths' layer was recorded using a Moog Matriarch through a 1970s tape delay unit. Try muting everything except 'Ambient Pads' and 'Vocals' to hear the haunting core of the arrangement.
                  </p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}