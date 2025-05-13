"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function ChainReactApp() {
  const [message, setMessage] = useState("");

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold gradient-text mb-4">
            ChainReact Automation Hub
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Streamline your workflow with intelligent automation and AI-powered assistance
          </p>
        </div>

        <Tabs defaultValue="dashboard" className="space-y-8">
          <TabsList className="flex flex-wrap gap-2 mb-6 bg-white p-2 rounded-xl shadow-sm border">
            <TabsTrigger value="dashboard" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="workflows" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              Workflows
            </TabsTrigger>
            <TabsTrigger value="integrations" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              Integrations
            </TabsTrigger>
            <TabsTrigger value="assistant" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              AI Assistant
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="text-xl">Weekly Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Tasks Automated</span>
                      <span className="font-semibold">124</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                  <div className="pt-4">
                    <Badge className="bg-green-100 text-green-800">+12% from last week</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="text-xl">Active Workflows</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Client Intake</span>
                      <Badge variant="secondary">Active</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Invoice Processing</span>
                      <Badge variant="secondary">Active</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="text-xl">System Health</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">API Status</span>
                      <Badge className="bg-green-100 text-green-800">Healthy</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Response Time</span>
                      <span className="text-sm font-medium">245ms</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="workflows" className="space-y-6">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-xl">Active Workflows</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4">
                  {[
                    { name: "Form Submission → Generate PDF → Email", status: "Active" },
                    { name: "Stripe Payment → Update Inventory + Notify Team", status: "Active" },
                    { name: "Lead Capture → CRM Update + Slack Alert", status: "Active" }
                  ].map((workflow, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">{workflow.name}</span>
                      <Badge variant="secondary">{workflow.status}</Badge>
                    </div>
                  ))}
                </div>
                <Button className="button-gradient w-full sm:w-auto">
                  Create New Workflow
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="integrations" className="space-y-6">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-xl">Connected Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4">
                  {[
                    { name: "Google Sheets", icon: "🔌", status: "Connected" },
                    { name: "Google Calendar", icon: "📆", status: "Connected" },
                    { name: "Stripe", icon: "💳", status: "Connected" },
                    { name: "Slack", icon: "💬", status: "Connected" },
                    { name: "Discord", icon: "🎮", status: "Connected" }
                  ].map((integration, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{integration.icon}</span>
                        <span className="text-gray-700">{integration.name}</span>
                      </div>
                      <Badge variant="secondary">{integration.status}</Badge>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full sm:w-auto">
                  Manage API Keys
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="assistant" className="space-y-6">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-xl">AI Assistant</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600">👤</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">User</p>
                        <p className="text-gray-700">Can you send today's agreements?</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                        <span className="text-indigo-600">🤖</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Assistant</p>
                        <p className="text-gray-700">Sent! Three agreements emailed to logistics@yourbiz.com.</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input
                      className="flex-1"
                      placeholder="Type a message..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                    <Button className="button-gradient" onClick={() => alert(`Sending: ${message}`)}>
                      Send Message
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
