"use client"

import * as React from "react"
import { AppLayout } from "@/components/layout/AppLayout"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, History, Filter, Maximize2, Sparkles, BookOpen } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { echoesNarratorFacts } from "@/ai/flows/echoes-narrator-facts"

const milestones = [
  { id: 1, title: "The Basement Tapes", year: "2018", type: "Visual", description: "First recording sessions using a stolen Tascam 4-track.", image: "https://picsum.photos/seed/basement/800/600" },
  { id: 2, title: "Faded Out Launch", year: "2021", type: "Release", description: "The breakthrough single that defined the Resonance era.", image: "https://picsum.photos/seed/launch/800/600" },
  { id: 3, title: "The Silent Tour", year: "2022", type: "Event", description: "A multi-city tour featuring headphone-only performances.", image: "https://picsum.photos/seed/tour/800/600" },
  { id: 4, title: "Analog Awakening", year: "2019", type: "Milestone", description: "Transitioning fully to vintage hardware synthesis.", image: "https://picsum.photos/seed/analog/800/600" },
  { id: 5, title: "Resonance Album Art", year: "2021", type: "Visual", description: "Original painting used for the album cover.", image: "https://picsum.photos/seed/art/800/600" },
  { id: 6, title: "Berlin Rooftop Session", year: "2023", type: "Live", description: "Recorded live during a rainstorm.", image: "https://picsum.photos/seed/berlin2/800/600" },
]

export default function MemoryLane() {
  const [selectedItem, setSelectedItem] = React.useState<typeof milestones[0] | null>(null)
  const [aiLore, setAiLore] = React.useState<string | null>(null)
  const [loadingAi, setLoadingAi] = React.useState(false)

  const handleFetchLore = async (item: typeof milestones[0]) => {
    setLoadingAi(true)
    try {
      const result = await echoesNarratorFacts({
        context: item.title + ": " + item.description,
        artistLore: "DoubleU is an electronic artist obsessed with memory, nostalgia, and analog textures. Their music often uses tape loops and vintage gear.",
        type: 'narrative'
      })
      setAiLore(result)
    } catch (error) {
      console.error(error)
    } finally {
      setLoadingAi(false)
    }
  }

  return (
    <AppLayout>
      <div className="space-y-8 fade-in pb-24">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h1 className="text-4xl font-headline flex items-center gap-3">
              <History className="text-secondary w-8 h-8" />
              Memory Lane
            </h1>
            <p className="text-muted-foreground italic">The definitive archive of DoubleU's creative journey.</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search eras..." className="pl-10 w-full md:w-64 bg-card/50 border-primary/20" />
            </div>
            <Button variant="outline" size="icon" className="border-primary/20 text-primary">
              <Filter className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {milestones.map((item) => (
            <Card 
              key={item.id} 
              className="group cursor-pointer overflow-hidden border-primary/10 hover:border-primary/40 bg-card/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl shadow-primary/5"
              onClick={() => {
                setSelectedItem(item)
                setAiLore(null)
              }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-3 left-3">
                   <Badge variant="secondary" className="bg-background/80 backdrop-blur text-primary border-primary/20">{item.year}</Badge>
                </div>
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                  <Maximize2 className="w-5 h-5 text-primary" />
                </div>
              </div>
              <CardContent className="p-5 space-y-2">
                <div className="flex items-center justify-between">
                   <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{item.type}</span>
                </div>
                <h3 className="text-xl font-headline group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detail Modal Overlay (Simplified) */}
        {selectedItem && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-background/95 backdrop-blur-sm transition-all duration-300">
            <div className="max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-card border border-primary/30 rounded-3xl shadow-2xl relative">
              <Button 
                variant="ghost" 
                className="absolute top-4 right-4 text-muted-foreground hover:text-white z-10"
                onClick={() => setSelectedItem(null)}
              >
                Close
              </Button>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-[300px] md:h-full min-h-[400px]">
                  <Image src={selectedItem.image} alt={selectedItem.title} fill className="object-cover" />
                </div>
                <div className="p-8 space-y-6">
                  <div className="space-y-2">
                    <Badge variant="secondary">{selectedItem.year} • {selectedItem.type}</Badge>
                    <h2 className="text-4xl font-headline">{selectedItem.title}</h2>
                    <p className="text-lg text-cream/80 leading-relaxed italic border-l-2 border-primary/30 pl-4">
                      {selectedItem.description}
                    </p>
                  </div>

                  <div className="p-6 bg-primary/5 rounded-2xl border border-primary/20 space-y-4">
                    <div className="flex items-center justify-between">
                       <h4 className="font-headline text-lg flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-primary" />
                        Echoes Narrator Insights
                      </h4>
                      {!aiLore && !loadingAi && (
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          className="text-xs text-primary h-8"
                          onClick={() => handleFetchLore(selectedItem)}
                        >
                          Generate Lore
                        </Button>
                      )}
                    </div>
                    {loadingAi ? (
                      <div className="space-y-2">
                        <div className="h-4 bg-muted animate-pulse rounded w-full" />
                        <div className="h-4 bg-muted animate-pulse rounded w-3/4" />
                      </div>
                    ) : aiLore ? (
                      <p className="text-sm italic text-cream/70 leading-relaxed animate-in fade-in slide-in-from-bottom-2">
                        "{aiLore}"
                      </p>
                    ) : (
                      <p className="text-xs text-muted-foreground italic">
                        Click "Generate Lore" to let the AI expand on this memory's hidden details.
                      </p>
                    )}
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-headline text-lg flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-primary" />
                      Behind the Scenes
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      This entry was unearthed from the 2021 backup drives. It represents a pivotal moment when the project shifted from industrial techno to the warmer, ambient sounds of Resonance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AppLayout>
  )
}