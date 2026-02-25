
"use client"

import * as React from "react"
import { AppLayout } from "@/components/layout/AppLayout"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Settings, History, Heart, Star, LogOut, Camera, Shield } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

export default function Profile() {
  return (
    <AppLayout>
      <div className="max-w-5xl mx-auto space-y-10 fade-in pb-20">
        {/* Profile Header */}
        <div className="relative h-48 w-full rounded-3xl overflow-hidden group border border-white/5">
          <Image src="https://picsum.photos/seed/profile_bg/1200/400" alt="Profile Banner" fill className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <div className="absolute -bottom-12 left-10 flex items-end gap-6">
            <div className="relative group/avatar">
              <Avatar className="w-32 h-32 border-4 border-background shadow-2xl">
                <AvatarImage src="https://picsum.photos/seed/user_me/200/200" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <Button size="icon" className="absolute bottom-0 right-0 rounded-full w-8 h-8 opacity-0 group-hover/avatar:opacity-100 transition-opacity">
                <Camera className="w-4 h-4" />
              </Button>
            </div>
            <div className="pb-12 space-y-1">
              <h1 className="text-4xl font-headline">EchoFinder_99</h1>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/20">Archivist LVL 4</Badge>
                <span className="text-xs text-muted-foreground flex items-center gap-1 italic">
                  <History className="w-3 h-3" /> Member since 2022
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 pt-8">
          <aside className="space-y-6">
            <Card className="bg-card/40 border-white/5 p-6 space-y-6">
              <div className="space-y-4 text-center">
                <div className="space-y-1">
                  <p className="text-3xl font-headline text-secondary">1,240</p>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Total Echoes</p>
                </div>
                <Progress value={49} className="h-1.5" />
                <p className="text-xs text-muted-foreground italic">1,260 more for Level 5</p>
              </div>
              <div className="space-y-2 pt-4 border-t border-white/5">
                <Button variant="ghost" className="w-full justify-start gap-3 hover:bg-primary/10">
                  <Settings className="w-4 h-4" /> Account Settings
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-3 hover:bg-primary/10">
                  <Shield className="w-4 h-4" /> Privacy & Security
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-3 text-rose-500 hover:bg-rose-500/10">
                  <LogOut className="w-4 h-4" /> Sign Out
                </Button>
              </div>
            </Card>

            <div className="p-4 bg-primary/5 rounded-2xl border border-primary/20 flex flex-col items-center gap-3">
              <Star className="w-8 h-8 text-primary fill-current" />
              <p className="text-xs text-center font-headline">You're in the top 1% of listeners this month!</p>
            </div>
          </aside>

          <div className="lg:col-span-3">
            <Tabs defaultValue="activity" className="space-y-6">
              <TabsList className="bg-card/50 border border-primary/10 p-1 rounded-xl">
                <TabsTrigger value="activity" className="px-8">Activity</TabsTrigger>
                <TabsTrigger value="vault" className="px-8">Unlocked</TabsTrigger>
                <TabsTrigger value="favorites" className="px-8">Favorites</TabsTrigger>
              </TabsList>

              <TabsContent value="activity" className="space-y-4">
                {[
                  { action: "Completed Quest", item: "The First Echo", date: "2 hours ago", color: "text-emerald-500" },
                  { action: "Shared Memory", item: "Berlin Sessions", date: "1 day ago", color: "text-primary" },
                  { action: "Unlocked Artifact", item: "Resonance Demo #4", date: "3 days ago", color: "text-secondary" },
                ].map((act, i) => (
                  <div key={i} className="p-4 bg-card/40 border border-white/5 rounded-2xl flex items-center justify-between group hover:border-primary/20 transition-all">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full bg-muted/20 flex items-center justify-center ${act.color}`}>
                        <History className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{act.action}: <span className="text-primary">{act.item}</span></p>
                        <p className="text-xs text-muted-foreground uppercase">{act.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="vault" className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square bg-muted/20 rounded-2xl border border-white/5 flex items-center justify-center group overflow-hidden relative">
                    <Image src={`https://picsum.photos/seed/unlocked_${i}/400/400`} alt="Unlocked" fill className="object-cover opacity-60 group-hover:scale-110 transition-transform" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button variant="ghost" size="sm" className="text-primary font-headline">View Artifact</Button>
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="favorites" className="space-y-4">
                 <div className="text-center py-20 bg-muted/10 rounded-3xl border border-dashed border-white/10">
                    <Heart className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-20" />
                    <p className="text-muted-foreground italic">You haven't favorited any tracks yet.</p>
                    <Button variant="link" className="text-primary">Explore Discography</Button>
                 </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

import Image from "next/image"
