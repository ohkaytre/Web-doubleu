
"use client"

import * as React from "react"
import { AppLayout } from "@/components/layout/AppLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Trophy, Medal, Star, Flame, Crown } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const leaderboardData = [
  { rank: 1, name: "EchoFinder_99", echoes: "12,420", title: "Original Echo", streak: "142 days", avatar: "https://picsum.photos/seed/1/100/100" },
  { rank: 2, name: "VinylVibes", echoes: "11,840", title: "The Archivist", streak: "89 days", avatar: "https://picsum.photos/seed/2/100/100" },
  { rank: 3, name: "NostalgiaHunter", echoes: "9,120", title: "Resonance Elder", streak: "45 days", avatar: "https://picsum.photos/seed/3/100/100" },
  { rank: 4, name: "DoubleU_Fan_1", echoes: "8,200", title: "Active Listener", streak: "21 days", avatar: "https://picsum.photos/seed/4/100/100" },
  { rank: 5, name: "Resonant_Soul", echoes: "7,540", title: "Fan", streak: "12 days", avatar: "https://picsum.photos/seed/5/100/100" },
]

export default function Leaderboard() {
  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto space-y-10 fade-in pb-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-headline flex items-center justify-center gap-4">
            <Trophy className="text-secondary w-10 h-10" />
            Legacy Leaderboard
          </h1>
          <p className="text-muted-foreground italic text-lg">Celebrating the most dedicated archivists in the world of DoubleU.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {leaderboardData.slice(0, 3).map((fan, i) => (
            <Card key={fan.name} className={`bg-card/40 border-primary/20 relative overflow-hidden ${i === 0 ? 'scale-105 shadow-2xl z-10' : 'scale-95'}`}>
              <div className="absolute top-0 right-0 p-4 opacity-10">
                {i === 0 ? <Crown className="w-16 h-16" /> : <Medal className="w-12 h-12" />}
              </div>
              <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <Avatar className={`w-20 h-20 border-4 ${i === 0 ? 'border-primary' : i === 1 ? 'border-secondary' : 'border-amber-700'}`}>
                    <AvatarImage src={fan.avatar} />
                    <AvatarFallback>{fan.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs border-2 bg-background ${i === 0 ? 'text-primary border-primary' : i === 1 ? 'text-secondary border-secondary' : 'text-amber-700 border-amber-700'}`}>
                    {fan.rank}
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className="font-headline text-2xl">{fan.name}</h3>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">{fan.title}</p>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-headline text-primary">{fan.echoes}</span>
                  <span className="text-[10px] text-muted-foreground uppercase tracking-tighter">Total Echoes</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-card/40 border-white/5">
          <Table>
            <TableHeader>
              <TableRow className="border-white/5 hover:bg-transparent">
                <TableHead className="w-20">Rank</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Echoes</TableHead>
                <TableHead>Streak</TableHead>
                <TableHead className="text-right">Badge</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leaderboardData.map((fan) => (
                <TableRow key={fan.name} className="border-white/5 hover:bg-white/5">
                  <TableCell className="font-headline text-lg">{fan.rank}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="w-8 h-8 border border-white/10">
                        <AvatarImage src={fan.avatar} />
                        <AvatarFallback>{fan.name[0]}</AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{fan.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="font-mono text-primary">{fan.echoes}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-secondary">
                      <Flame className="w-3 h-3" />
                      <span className="text-xs">{fan.streak}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge variant="outline" className="text-[9px] border-primary/20 text-primary uppercase">
                      {fan.title}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </AppLayout>
  )
}
