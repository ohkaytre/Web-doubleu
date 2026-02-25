"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  Music, 
  History, 
  Users, 
  ShieldCheck, 
  User, 
  Trophy, 
  Mic2, 
  LayoutGrid, 
  PenTool,
  Radio,
  Gamepad2,
  FolderLock
} from "lucide-react"
import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"

const navigation = [
  { name: "The Echoes Hub", href: "/", icon: LayoutGrid },
  { name: "Discography Map", href: "/discography", icon: Music },
  { name: "Memory Lane", href: "/memory-lane", icon: History },
  { name: "The Digital Attic", href: "/artist-log", icon: PenTool },
  { name: "The Soundscape Mixer", href: "/mixer", icon: Radio },
  { name: "Listening Party", href: "/listening-party", icon: Mic2 },
  { name: "The Vault", href: "/vault", icon: FolderLock, badge: "Exclusive" },
  { name: "Fan Quests", href: "/quests", icon: Gamepad2 },
  { name: "Guestbook", href: "/guestbook", icon: Users },
  { name: "Legacy Leaderboard", href: "/leaderboard", icon: Trophy },
]

export function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  React.useEffect(() => {
    if ('serviceWorker' in navigator && window.location.hostname !== 'localhost') {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(
          (registration) => {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
          },
          (err) => {
            console.log('ServiceWorker registration failed: ', err);
          }
        );
      });
    }
  }, []);

  return (
    <SidebarProvider>
      <Sidebar variant="sidebar" collapsible="icon">
        <SidebarHeader className="p-6">
          <Link href="/" className="flex items-center gap-2 font-headline text-2xl font-bold text-primary group-data-[collapsible=icon]:hidden">
            <Music className="w-8 h-8" />
            <span>DoubleU</span>
          </Link>
          <div className="hidden group-data-[collapsible=icon]:flex items-center justify-center py-2">
             <Music className="w-6 h-6 text-primary" />
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu className="px-2">
            {navigation.map((item) => (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton 
                  asChild 
                  isActive={pathname === item.href}
                  tooltip={item.name}
                  className="hover:bg-primary/10 data-[active=true]:bg-primary/20"
                >
                  <Link href={item.href}>
                    <item.icon className="w-5 h-5" />
                    <span className="flex-1">{item.name}</span>
                    {item.badge && <Badge variant="secondary" className="scale-75 origin-right">{item.badge}</Badge>}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
          
          <div className="mt-auto px-4 pb-8">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="My Profile">
                  <Link href="/profile">
                    <User className="w-5 h-5" />
                    <span>Fan Account</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Admin Panel">
                  <Link href="/admin">
                    <ShieldCheck className="w-5 h-5" />
                    <span>Admin Panel</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </div>
        </SidebarContent>
      </Sidebar>
      <SidebarInset className="bg-background relative overflow-hidden">
        <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center px-4">
            <SidebarTrigger />
            <div className="ml-auto flex items-center gap-4">
              <div className="flex flex-col items-end group-data-[collapsible=icon]:hidden">
                <span className="text-sm font-medium">Archivist LVL 4</span>
                <span className="text-xs text-muted-foreground">1,240 Echoes</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                <User className="w-4 h-4 text-primary" />
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
