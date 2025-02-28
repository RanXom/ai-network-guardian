import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Overview() {
  return (
    <div className="grid gap-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Welcome to the AI Powered Network Guardian!</h2>
        <p className="text-muted-foreground">
          Our goal is to help organizations monitor their network health, reduce costs, and improve energy efficiency
          through AI-driven solutions.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Predictive Maintenance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Detect and prevent network failures before they happen.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Cost Optimization</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Identify inefficient components and suggest Total Cost of Ownership (TCO) reductions.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Energy Efficiency</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Implement dynamic load balancing and power management to reduce energy consumption.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Automated Response System</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Real-time issue detection and self-healing capabilities using open-source automation tools.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Fault Prediction System</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Use AI to monitor and predict equipment failures, enabling proactive repairs and reducing downtime.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Maintenance Scheduling</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Design tools to automate maintenance schedules, improving efficiency and minimizing service interruptions.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

