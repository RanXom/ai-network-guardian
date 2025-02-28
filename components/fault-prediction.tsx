"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Download } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

// Function to simulate fault prediction
function simulateFaultPrediction(numSamples = 100) {
  const data = []
  const faults = ["No Fault", "Minor Fault", "Major Fault"]
  const models = ["Random Forest", "Neural Network"]
  const causes = ["Overheating", "Wear and Tear", "Electrical Failure"]

  for (let i = 0; i < numSamples; i++) {
    const faultIndex = Math.random() < 0.7 ? 0 : Math.random() < 0.67 ? 1 : 2
    const fault = faults[faultIndex]

    data.push({
      id: i + 1,
      equipment: `Equipment ${(i % 10) + 1}`,
      fault,
      model: models[Math.floor(Math.random() * models.length)],
      cause: fault === "No Fault" ? "" : causes[Math.floor(Math.random() * causes.length)],
    })
  }

  return data
}

export function FaultPrediction() {
  const [numSamples, setNumSamples] = useState(20)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(() => simulateFaultPrediction(numSamples))

  const noFaults = data.filter((item) => item.fault === "No Fault").length
  const minorFaults = data.filter((item) => item.fault === "Minor Fault").length
  const majorFaults = data.filter((item) => item.fault === "Major Fault").length

  const handleRefresh = () => {
    setLoading(true)
    setTimeout(() => {
      setData(simulateFaultPrediction(numSamples))
      setLoading(false)
    }, 1000)
  }

  const handleExport = () => {
    // In a real app, this would export to Excel
    alert("Downloaded fault_data.xlsx")
  }

  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Fault Prediction</h2>
        <Button onClick={handleRefresh} disabled={loading}>
          {loading ? "Loading..." : "Refresh Data"}
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>No Faults</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-500">{noFaults}</div>
            <p className="text-sm text-muted-foreground">{((noFaults / data.length) * 100).toFixed(1)}% of equipment</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Minor Faults</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-amber-500">{minorFaults}</div>
            <p className="text-sm text-muted-foreground">
              {((minorFaults / data.length) * 100).toFixed(1)}% of equipment
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Major Faults</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-red-500">{majorFaults}</div>
            <p className="text-sm text-muted-foreground">
              {((majorFaults / data.length) * 100).toFixed(1)}% of equipment
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Fault Prediction Details</CardTitle>
          <CardDescription>
            Fault prediction metrics. This data can help identify potential equipment failures and enable proactive
            repairs.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Equipment</TableHead>
                <TableHead>Fault Status</TableHead>
                <TableHead>Model Used</TableHead>
                <TableHead>Probable Cause</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.equipment}</TableCell>
                  <TableCell>
                    {item.fault === "No Fault" && (
                      <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50">
                        No Fault
                      </Badge>
                    )}
                    {item.fault === "Minor Fault" && (
                      <Badge variant="outline" className="bg-amber-50 text-amber-700 hover:bg-amber-50">
                        Minor Fault
                      </Badge>
                    )}
                    {item.fault === "Major Fault" && (
                      <Badge variant="outline" className="bg-red-50 text-red-700 hover:bg-red-50">
                        Major Fault
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell>{item.model}</TableCell>
                  <TableCell>{item.cause}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-4">
          <div className="w-full">
            <div className="mb-2 flex items-center justify-between">
              <label htmlFor="samples" className="text-sm font-medium">
                Number of samples: {numSamples}
              </label>
            </div>
            <Slider
              id="samples"
              min={10}
              max={100}
              step={5}
              value={[numSamples]}
              onValueChange={(value) => setNumSamples(value[0])}
              className="w-full"
            />
          </div>
          <Button variant="outline" onClick={handleExport}>
            <Download className="mr-2 h-4 w-4" />
            Export to Excel
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

