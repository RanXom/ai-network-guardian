import type { Metadata } from "next"
import DashboardShell from "@/components/dashboard-shell"
import { PossibleFixes } from "@/components/possible-fixes"

export const metadata: Metadata = {
  title: "Possible Fixes - AI Powered Network Guardian",
  description: "Recommendations for potential fixes based on analysis",
}

export default function PossibleFixesPage() {
  return (
    <DashboardShell>
      <PossibleFixes />
    </DashboardShell>
  )
}

