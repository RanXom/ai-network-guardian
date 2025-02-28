import type { Metadata } from "next"
import DashboardShell from "@/components/dashboard-shell"
import { EnergyEfficiency } from "@/components/energy-efficiency"

export const metadata: Metadata = {
  title: "Energy Efficiency - AI Powered Network Guardian",
  description: "Implement dynamic load balancing and power management to reduce energy consumption",
}

export default function EnergyEfficiencyPage() {
  return (
    <DashboardShell>
      <EnergyEfficiency />
    </DashboardShell>
  )
}

