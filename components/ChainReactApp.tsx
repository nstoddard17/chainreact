"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function ChainReactApp() {
  const [message, setMessage] = useState("");

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">ChainReact Automation Hub</h1>
      <Tabs defaultValue="dashboard">
        <TabsList>
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="workflows">Workflows</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="assistant">AI Assistant</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard">
          <Card>
            <CardContent className="p-4 space-y-2">
              <h2 className="text-xl font-semibold">Overview</h2>
              <p>Tasks automated this week: <strong>124</strong></p>
              <p>Top active workflow: <strong>Client Intake + Invoicing</strong></p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="workflows">
          <Card>
            <CardContent className="p-4 space-y-4">
              <h2 className="text-xl font-semibold">Workflows</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Form Submission → Generate PDF → Email</li>
                <li>Stripe Payment → Update Inventory + Notify Team</li>
                <li>Lead Capture → CRM Update + Slack Alert</li>
              </ul>
              <Button>Create New Workflow</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations">
          <Card>
            <CardContent className="p-4 space-y-4">
              <h2 className="text-xl font-semibold">Integrations</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>🔌 Connect Google Sheets</li>
                <li>📆 Sync Google Calendar</li>
                <li>💳 Stripe Payment Gateway</li>
                <li>💬 Slack Notifications</li>
                <li>🎮 Discord Bot Alerts</li>
              </ul>
              <Button variant="secondary">Manage API Keys</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="assistant">
          <Card>
            <CardContent className="p-4 space-y-2">
              <h2 className="text-xl font-semibold">AI Assistant</h2>
              <div className="bg-gray-100 rounded p-3 mb-2">
                <p><strong>User:</strong> Can you send today’s agreements?</p>
                <p><strong>Assistant:</strong> Sent! Three agreements emailed to logistics@yourbiz.com.</p>
              </div>
              <Input
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button onClick={() => alert(`Sending: ${message}`)}>Send</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}