
"use client"

import * as React from "react"
import { AppLayout } from "@/components/layout/AppLayout"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Gamepad2, Trophy, Star, CheckCircle2, Lock, ArrowRight } from "lucide-react"

const quests = [
  { id: 1, title: "The First Echo", description: "Listen to 'Faded Out' 10 times to unlock the raw vocal stems.", reward: "50 Echoes", progress: 70, status: "Active" },
  { id: 2, title: "Archive Explorer", description: "View 5 different Memory Lane entries and unlock the hidden sketches.", reward: "100 Echoes", progress: 40, status: "Active" },
  { id: 3, title: "Community Elder", description: "Sign the guestbook and welcome 3 new fans.", reward: "25 Echoes", progress: 100, status: "Completed" },
  { id: 4, title: "Master Mixer", description: "Create and save a custom mix in the Soundscape Mixer.", reward: "75 Echoes", progress: 0, status: "Locked", requirement: "Reach Level 5" },
]

export default function FanQuests() {
  return (
    <AppLayout>
      <div className="max-w-5xl mx-auto space-y-10 fade-in">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-headline flex items-center gap-3">
              <Gamepad2 className="text-secondary w-10 h-10" />
              Fan Quests
            </h1>
            <p className="text-muted-foreground italic text-lg">Gamified engagement. Earn Echoes to unlock the Vault.</p>
          </div>
          <Card className="bg-primary/10 border-primary/20 px-6 py-4 flex items-center gap-6">
            <div className="text-center">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Current Level</p>
              <p className="text-2xl font-headline text-primary">LVL 4</p>
            </div>
            <div className="w-px h-8 bg-primary/20" />
            <div className="text-center">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Total Echoes</p>
              <p className="text-2xl font-headline text-secondary">1,240</p>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quests.map((quest) => (
            <Card key={quest.id} className={`bg-card/40 border-white/5 group transition-all duration-300 ${quest.status === 'Locked' ? 'opacity-60 grayscale' : 'hover:border-primary/30'}`}>
              <CardHeader className="flex flex-row items-start justify-between pb-2">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <CardTitle className="text-xl font-headline">{quest.title}</CardTitle>
                    {quest.status === 'Completed' && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                    {quest.status === 'Locked' && <Lock className="w-4 h-4 text-muted-foreground" />}
                  </div>
                  <CardDescription className="text-sm italic">{quest.description}</CardDescription>
                </div>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">{quest.reward}</Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span>Progress</span>
                    <span>{quest.progress}%</span>
                  </div>
                  <Progress value={quest.progress} className="h-2 bg-muted/20" />
                </div>
                {quest.status === 'Locked' ? (
                  <div className="text-xs text-muted-foreground flex items-center gap-2 italic">
                    <Star className="w-3 h-3" /> {quest.requirement}
                  </div>
                ) : (
                  <Button variant="ghost" size="sm" className="w-full justify-between hover:bg-primary/10 text-primary group-hover:px-4 transition-all">
                    {quest.status === 'Completed' ? 'Claim Rewards' : 'Continue Quest'}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center pt-8">
           <Button variant="outline" className="rounded-full px-12 border-primary/20 text-muted-foreground hover:text-primary">
            View Legacy Achievements
           </Button>
        </div>
      </div>
    </AppLayout>
  )
}
