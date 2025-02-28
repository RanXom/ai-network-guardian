import type { Metadata } from "next"
import DashboardShell from "@/components/dashboard-shell"
import { FaultPrediction } from "@/components/fault-prediction"

export const metadata: Metadata = {
  title: "Fault Prediction - AI Powered Network Guardian",
  description: "Use AI to monitor and predict equipment failures",
}

export default function FaultPredictionPage() {
  return (
    <DashboardShell>
      <FaultPrediction />
    </DashboardShell>
  )
}

