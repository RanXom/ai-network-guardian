import type { Metadata } from "next"
import DashboardShell from "@/components/dashboard-shell"
import { CostOptimization } from "@/components/cost-optimization"

export const metadata: Metadata = {
  title: "Cost Optimization - AI Powered Network Guardian",
  description: "Identify inefficient components and suggest TCO reductions",
}

export default function CostOptimizationPage() {
  return (
    <DashboardShell>
      <CostOptimization />
    </DashboardShell>
  )
}

