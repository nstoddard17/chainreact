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
    <section className="min-h-screen bg-background py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold gradient-text mb-4">
            ChainReact Automation Hub
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Streamline your workflow with intelligent automation and AI-powered assistance
          </p>
        </div>

        <Tabs defaultValue="dashboard" className="space-y-8">
          <TabsList className="flex flex-wrap gap-2 mb-6 bg-card p-2 rounded-xl shadow-sm border">
            <TabsTrigger value="dashboard" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="workflows" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Workflows
            </TabsTrigger>
            <TabsTrigger value="integrations" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Integrations
            </TabsTrigger>
            <TabsTrigger value="assistant" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              AI Assistant
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Weekly Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Tasks Automated</span>
                      <span className="font-semibold text-foreground">124</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                  <div className="pt-4">
                    <Badge className="bg-green-600 text-white">+12% from last week</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Active Workflows</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Client Intake</span>
                      <Badge variant="secondary">Active</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Invoice Processing</span>
                      <Badge variant="secondary">Active</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">System Health</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">API Status</span>
                      <Badge className="bg-green-600 text-white">Healthy</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Response Time</span>
                      <span className="text-sm font-medium text-foreground">245ms</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="workflows" className="space-y-6">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Active Workflows</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4">
                  {[
                    { name: "Form Submission → Generate PDF → Email", status: "Active" },
                    { name: "Stripe Payment → Update Inventory + Notify Team", status: "Active" },
                    { name: "Lead Capture → CRM Update + Slack Alert", status: "Active" }
                  ].map((workflow, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-card rounded-lg">
                      <span className="text-foreground">{workflow.name}</span>
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
                <CardTitle className="text-xl text-foreground">Connected Services</CardTitle>
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
                    <div key={index} className="flex items-center justify-between p-4 bg-card rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{integration.icon}</span>
                        <span className="text-foreground">{integration.name}</span>
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
                <CardTitle className="text-xl text-foreground">AI Assistant</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="bg-card rounded-lg p-4 space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-primary">👤</span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">User</p>
                        <p className="text-muted-foreground">Can you send today's agreements?</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-primary">🤖</span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Assistant</p>
                        <p className="text-muted-foreground">Sent! Three agreements emailed to logistics@yourbiz.com.</p>
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
