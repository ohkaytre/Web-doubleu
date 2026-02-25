
"use client"

import * as React from "react"
import { AppLayout } from "@/components/layout/AppLayout"
import { WifiOff, RefreshCcw } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function OfflinePage() {
  return (
    <AppLayout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6 text-center fade-in">
        <div className="w-24 h-24 bg-muted/20 rounded-full flex items-center justify-center border border-dashed border-white/10">
          <WifiOff className="w-12 h-12 text-muted-foreground opacity-50" />
        </div>
        <div className="space-y-2">
          <h1 className="text-4xl font-headline">The signal has faded.</h1>
          <p className="text-muted-foreground italic max-w-sm mx-auto">
            You are currently offline. Please check your connection to reconnect with the world of DoubleU.
          </p>
        </div>
        <Button 
          variant="outline" 
          className="rounded-full gap-2 border-primary/20"
          onClick={() => window.location.reload()}
        >
          <RefreshCcw className="w-4 h-4" />
          Retry Connection
        </Button>
      </div>
    </AppLayout>
  )
}
