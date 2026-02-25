"use client"

import * as React from "react"
import { AppLayout } from "@/components/layout/AppLayout"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ShieldCheck, MessageSquare, Plus, Trash2, CircleCheck, CircleX, LayoutGrid } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function AdminPanel() {
  return (
    <AppLayout>
      <div className="space-y-8 fade-in pb-12">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1">
            <h1 className="text-4xl font-headline flex items-center gap-3 text-secondary">
              <ShieldCheck className="w-8 h-8" />
              Administrative Hub
            </h1>
            <p className="text-muted-foreground italic">Manage the archive and moderate the community.</p>
          </div>
          <Badge variant="outline" className="text-secondary border-secondary/30">Admin Session Active</Badge>
        </div>

        <Tabs defaultValue="moderation" className="space-y-6">
          <TabsList className="bg-card/50 border border-primary/20 p-1 rounded-xl">
            <TabsTrigger value="moderation" className="gap-2 px-6">
              <MessageSquare className="w-4 h-4" /> Guestbook
            </TabsTrigger>
            <TabsTrigger value="content" className="gap-2 px-6">
              <LayoutGrid className="w-4 h-4" /> Archive Items
            </TabsTrigger>
          </TabsList>

          <TabsContent value="moderation" className="space-y-6">
            <Card className="border-primary/10 bg-card/40">
              <CardHeader>
                <CardTitle>Pending Guestbook Entries</CardTitle>
                <CardDescription>Review and approve fan messages before they go live.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-white/5 hover:bg-transparent">
                      <TableHead>User</TableHead>
                      <TableHead>Message Preview</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { user: "NewFan_2024", msg: "I love the new Soundscape mixer feature!", date: "10m ago" },
                      { user: "Echo_Expert", msg: "When is the next listening party? I'm ready!", date: "2h ago" },
                      { user: "SpamBot_4", msg: "Buy cheap crypto here...", date: "4h ago" }
                    ].map((entry, i) => (
                      <TableRow key={i} className="border-white/5 hover:bg-white/5">
                        <TableCell className="font-medium text-primary">{entry.user}</TableCell>
                        <TableCell className="text-muted-foreground italic truncate max-w-xs">"{entry.msg}"</TableCell>
                        <TableCell className="text-xs uppercase font-mono">{entry.date}</TableCell>
                        <TableCell className="text-right space-x-2">
                          <Button size="icon" variant="ghost" className="text-emerald-500 hover:bg-emerald-500/10">
                            <CircleCheck className="w-4 h-4" />
                          </Button>
                          <Button size="icon" variant="ghost" className="text-rose-500 hover:bg-rose-500/10">
                            <CircleX className="w-4 h-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="content" className="space-y-6">
             <div className="flex justify-end">
                <Button className="bg-primary text-primary-foreground gap-2 rounded-full px-6">
                  <Plus className="w-4 h-4" /> New Archive Entry
                </Button>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="border-white/5 bg-card/40 group overflow-hidden">
                    <div className="aspect-video bg-muted relative">
                       <div className="absolute inset-0 flex items-center justify-center opacity-20">
                          <LayoutGrid className="w-12 h-12" />
                       </div>
                    </div>
                    <CardHeader className="p-4">
                      <CardTitle className="text-lg">Archive Item #{i}</CardTitle>
                      <CardDescription>Last edited: 3 days ago</CardDescription>
                    </CardHeader>
                    <CardContent className="px-4 pb-4 pt-0 flex justify-end gap-2">
                       <Button variant="ghost" size="sm">Edit</Button>
                       <Button variant="ghost" size="sm" className="text-rose-500">
                         <Trash2 className="w-4 h-4" />
                       </Button>
                    </CardContent>
                  </Card>
                ))}
             </div>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  )
}