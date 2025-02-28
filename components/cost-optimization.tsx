"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Download } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

// Function to simulate cost estimation
function simulateCostEstimation(numSamples = 100) {
  const data = []
  const startDate = new Date("2025-02-10")

  for (let i = 0; i < numSamples; i++) {
    const date = new Date(startDate)
    date.setMinutes(startDate.getMinutes() + i)

    data.push({
      time: date.toLocaleTimeString(),
      cost: Math.random() * 1000, // Random costs between 0 and 1000
    })
  }

  return data
}

export function CostOptimization() {
  const [numSamples, setNumSamples] = useState(100)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(() => simulateCostEstimation(numSamples))

  const avgCost = data.reduce((sum, item) => sum + item.cost, 0) / data.length
  const totalCost = data.reduce((sum, item) => sum + item.cost, 0)

  const handleRefresh = () => {
    setLoading(true)
    setTimeout(() => {
      setData(simulateCostEstimation(numSamples))
      setLoading(false)
    }, 1000)
  }

  const handleExport = () => {
    // In a real app, this would export to Excel
    alert("Downloaded cost_data.xlsx")
  }

  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Cost Optimization</h2>
        <Button onClick={handleRefresh} disabled={loading}>
          {loading ? "Loading..." : "Refresh Data"}
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Average Cost</CardTitle>
            <CardDescription>Per time interval</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">${avgCost.toFixed(2)}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Total Cost</CardTitle>
            <CardDescription>For the entire period</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">${totalCost.toFixed(2)}</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Cost Trends</CardTitle>
          <CardDescription>
            Estimated costs based on network usage and inefficiencies. This data can help identify areas for cost
            reduction and efficiency improvements.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip formatter={(value) => [`$${value.toFixed(2)}`, "Cost"]} />
                <Legend />
                <Line type="monotone" dataKey="cost" stroke="#8884d8" name="Cost (USD)" />
              </LineChart>
            </ResponsiveContainer>
          </div>
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
              max={1000}
              step={10}
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

