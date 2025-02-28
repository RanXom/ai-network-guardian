"use client"

import type React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Activity, BarChart3, Cpu, Home, Lightbulb, Package2, Settings, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

interface DashboardShellProps {
  children: React.ReactNode
}

export default function DashboardShell({ children }: DashboardShellProps) {
  const pathname = usePathname()

  const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "Network Stats", href: "/network-stats", icon: Activity },
    { name: "Cost Optimization", href: "/cost-optimization", icon: BarChart3 },
    { name: "Energy Efficiency", href: "/energy-efficiency", icon: Lightbulb },
    { name: "Possible Fixes", href: "/possible-fixes", icon: Wrench },
    { name: "Fault Prediction", href: "/fault-prediction", icon: Cpu },
  ]

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar>
          <SidebarHeader className="border-b">
            <div className="flex items-center gap-2 px-2">
              <Package2 className="h-6 w-6" />
              <div className="font-semibold">Network Guardian</div>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {navigation.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.name}>
                    <Link href={item.href}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="border-t">
            <div className="p-2">
              <div className="text-xs text-muted-foreground">
                <div className="font-semibold">Team: Dynamic Duo</div>
                <div>Suryansh Srivastava 👑</div>
                <div>Saiyed Shizain</div>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>
        <div className="flex-1">
          <header className="flex h-14 items-center gap-4 border-b bg-background px-4 lg:px-6">
            <SidebarTrigger />
            <div className="flex-1">
              <h1 className="text-lg font-semibold">AI Powered Network Guardian</h1>
            </div>
            <Button variant="outline" size="icon">
              <Settings className="h-4 w-4" />
              <span className="sr-only">Settings</span>
            </Button>
          </header>
          <main className="flex-1 p-4 md:p-6 lg:p-8">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}

