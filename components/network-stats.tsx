"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Download } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

// Function to generate realistic network data
function generateRealisticNetworkData(numSamples = 100) {
  const data = []
  const startDate = new Date("2025-02-10")

  for (let i = 0; i < numSamples; i++) {
    const date = new Date(startDate)
    date.setMinutes(startDate.getMinutes() + i)

    data.push({
      time: date.toLocaleTimeString(),
      latency: Math.random() * 10 + 15, // Normal distribution around 20ms
      throughput: Math.random() * 40 + 80, // Normal distribution around 100 Mbps
    })
  }

  return data
}

export function NetworkStats() {
  const [numSamples, setNumSamples] = useState(100)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(() => generateRealisticNetworkData(numSamples))

  const avgLatency = data.reduce((sum, item) => sum + item.latency, 0) / data.length
  const avgThroughput = data.reduce((sum, item) => sum + item.throughput, 0) / data.length

  const handleRefresh = () => {
    setLoading(true)
    setTimeout(() => {
      setData(generateRealisticNetworkData(numSamples))
      setLoading(false)
    }, 1000)
  }

  const handleExport = () => {
    // In a real app, this would export to Excel
    alert("Downloaded network_data.xlsx")
  }

  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Network Statistics</h2>
        <Button onClick={handleRefresh} disabled={loading}>
          {loading ? "Loading..." : "Refresh Data"}
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Average Latency</CardTitle>
            <CardDescription>Measured in milliseconds (ms)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{avgLatency.toFixed(2)} ms</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Average Throughput</CardTitle>
            <CardDescription>Measured in megabits per second (Mbps)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{avgThroughput.toFixed(2)} Mbps</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Network Performance Over Time</CardTitle>
          <CardDescription>
            Latency (ms) and Throughput (Mbps) over time. Monitoring these metrics is crucial for maintaining optimal
            network performance.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="latency" stroke="#8884d8" name="Latency (ms)" />
                <Line yAxisId="right" type="monotone" dataKey="throughput" stroke="#82ca9d" name="Throughput (Mbps)" />
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

