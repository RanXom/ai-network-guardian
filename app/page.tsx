import type { Metadata } from "next"
import DashboardShell from "@/components/dashboard-shell"
import { Overview } from "@/components/overview"

export const metadata: Metadata = {
  title: "AI Powered Network Guardian",
  description: "Monitor network health, reduce costs, and improve energy efficiency through AI-driven solutions",
}

export default function DashboardPage() {
  return (
    <DashboardShell>
      <Overview />
    </DashboardShell>
  )
}

