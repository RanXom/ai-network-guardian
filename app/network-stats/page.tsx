import type { Metadata } from "next"
import DashboardShell from "@/components/dashboard-shell"
import { NetworkStats } from "@/components/network-stats"

export const metadata: Metadata = {
  title: "Network Statistics - AI Powered Network Guardian",
  description: "View detailed network statistics including latency and throughput",
}

export default function NetworkStatsPage() {
  return (
    <DashboardShell>
      <NetworkStats />
    </DashboardShell>
  )
}

