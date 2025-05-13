"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ChainReactApp() {
  const [message, setMessage] = useState("");

  return (
    <section className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 tracking-tight">
          ChainReact Automation Hub
        </h1>

        <Tabs defaultValue="dashboard">
          <TabsList className="flex flex-wrap gap-2 mb-6 bg-gray-200 p-2 rounded-lg">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="workflows">Workflows</TabsTrigger>
            <TabsTrigger value="integrations">Integrations</TabsTrigger>
            <TabsTrigger value="assistant">AI Assistant</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard">
            <Card className="hover:shadow-md transition">
              <CardContent className="p-6 space-y-3">
                <h2 className="text-2xl font-semibold text-gray-800">Overview</h2>
                <p className="text-gray-700">Tasks automated this week: <strong>124</strong></p>
                <p className="text-gray-700">Top active workflow: <strong>Client Intake + Invoicing</strong></p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="workflows">
            <Card className="hover:shadow-md transition">
              <CardContent className="p-6 space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">Workflows</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Form Submission → Generate PDF → Email</li>
                  <li>Stripe Payment → Update Inventory + Notify Team</li>
                  <li>Lead Capture → CRM Update + Slack Alert</li>
                </ul>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Create New Workflow
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="integrations">
            <Card className="hover:shadow-md transition">
              <CardContent className="p-6 space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">Integrations</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>🔌 Google Sheets</li>
                  <li>📆 Google Calendar</li>
                  <li>💳 Stripe</li>
                  <li>💬 Slack</li>
                  <li>🎮 Discord</li>
                </ul>
                <Button variant="secondary">Manage API Keys</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="assistant">
            <Card className="hover:shadow-md transition">
              <CardContent className="p-6 space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">AI Assistant</h2>
                <div className="bg-gray-100 rounded p-3 text-gray-700">
                  <p><strong>User:</strong> Can you send today’s agreements?</p>
                  <p><strong>Assistant:</strong> Sent! Three agreements emailed to logistics@yourbiz.com.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Input
                    className="flex-1"
                    placeholder="Type a message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <Button onClick={() => alert(`Sending: ${message}`)}>Send</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
