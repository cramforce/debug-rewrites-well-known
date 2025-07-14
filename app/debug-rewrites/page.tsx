"use client"

import { useState } from "react"

export default function DebugRewrites() {
  const [results, setResults] = useState<Record<string, any>>({})

  const testEndpoints = [
    { name: "Test Ping", url: "/test" },
    { name: "Register", url: "/register" },
    { name: "OAuth Token", url: "/oauth/token" },
    { name: "OAuth Authorize", url: "/oauth/authorize" },
    { name: "Well-known Server", url: "/.well-known/oauth-authorization-server" },
    { name: "Well-known Resource", url: "/.well-known/oauth-protected-resource" },
  ]

  const testEndpoint = async (url: string, name: string) => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      setResults((prev) => ({
        ...prev,
        [name]: {
          status: response.status,
          data,
          success: response.ok,
        },
      }))
    } catch (error) {
      setResults((prev) => ({
        ...prev,
        [name]: {
          status: "Error",
          error: error instanceof Error ? error.message : "Unknown error",
          success: false,
        },
      }))
    }
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Debug Rewrites</h1>

      <div className="grid gap-4 mb-8">
        {testEndpoints.map(({ name, url }) => (
          <div key={name} className="flex items-center gap-4">
            <button
              onClick={() => testEndpoint(url, name)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Test {name}
            </button>
            <span className="text-sm text-gray-600">{url}</span>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        {Object.entries(results).map(([name, result]) => (
          <div key={name} className="border rounded p-4">
            <h3 className="font-semibold mb-2">{name}</h3>
            <div className={`text-sm ${result.success ? "text-green-600" : "text-red-600"}`}>
              Status: {result.status}
            </div>
            <pre className="mt-2 text-xs bg-gray-100 p-2 rounded overflow-auto">{JSON.stringify(result, null, 2)}</pre>
          </div>
        ))}
      </div>
    </div>
  )
}
