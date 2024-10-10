'use client';

import LeadsCallLogs from '@/components/leads/call-logs';
import LeadsCommunicationLogs from '@/components/leads/communication-logs';
import LeadsDocumentLocker from '@/components/leads/document-locker';
import { LeadTimeline } from '@/components/leads/lead-timeline';
import LeadsNavbar from '@/components/leads/navbar';
import LeadsNotes from '@/components/leads/notes';
import LeadsTickets from '@/components/leads/tickets';
import LeadsUserDetails from '@/components/leads/user-details';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  QrCode,
  Calendar,
  FileText,
  MessageSquare,
  Folder,
  Ticket,
  Phone,
  User
} from 'lucide-react';

export function LeadDetailsComponent() {
  return (
    <div className="">
      <h1 className="mb-4 text-2xl font-bold">Lead Details</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card>
          <CardContent className="p-6">
            <div className="col-span-1">
              <div className="mb-4 flex items-center">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-500">
                  K
                </div>
                <div>
                  <h2 className="text-xl font-bold">KHUSHBU LOHARE</h2>
                  <p className="text-blue-500">Untouched</p>
                </div>
                <Button variant="ghost" size="sm" className="ml-auto">
                  <QrCode className="mr-2 h-4 w-4" />
                  Scan from App
                </Button>
              </div>
              <p className="mb-2">Email: khushbulohare2@gmail.com</p>
              <p className="mb-2">Mobile: +91-8817845247</p>
              <p className="mb-2">Added On: 02 Oct 2024 03:26 PM</p>
              <p>Last Active: 02 Oct 2024 03:26 PM</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="col-span-1">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold">Communication Status</h3>
                  <p>Email Sent - 1</p>
                  <p>SMS Sent - 0</p>
                  <p>Whatsapp Sent - 0</p>
                </div>
                <div>
                  <h3 className="font-semibold">Telephony Status</h3>
                  <p>Inbound Call - 0</p>
                  <p>Outbound Call - 0</p>
                </div>
                <div>
                  <h3 className="font-semibold">Assigned Owner</h3>
                  <p>navjot kaur</p>
                </div>
                <div>
                  <h3 className="font-semibold">Lead Source</h3>
                  <p>Publisher Campaign: Collegedekho</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Lead Journey */}
      <div className="mt-6">
        <Progress value={20} className="h-3" />
        <div className="mt-1 flex justify-between text-sm">
          <span className="font-semibold">Unverified</span>
          <span>Verified</span>
          <span>Application Started</span>
          <span>Payment Approved</span>
          <span>Application Submitted</span>
          <span>Enrolled</span>
        </div>
      </div>

      {/* Lead Details Tabs */}
      <Tabs defaultValue="leadDetails" className="mt-6 flex">
        <TabsList className="flex-1 flex-col items-start justify-start bg-inherit">
          <TabsTrigger value="leadDetails">
            <Button variant="ghost" className="w-full justify-start">
              <User className="mr-2 h-4 w-4" /> Leads Details
            </Button>
          </TabsTrigger>
          <TabsTrigger value="timeline">
            <Button variant="ghost" className="w-full justify-start">
              <Calendar className="mr-2 h-4 w-4" /> Timeline
            </Button>
          </TabsTrigger>

          <TabsTrigger value="notes">
            <Button variant="ghost" className="w-full justify-start">
              <FileText className="mr-2 h-4 w-4" /> Notes
            </Button>
          </TabsTrigger>

          <TabsTrigger value="communicationLogs">
            <Button variant="ghost" className="w-full justify-start">
              <MessageSquare className="mr-2 h-4 w-4" /> Communication Logs
            </Button>
          </TabsTrigger>

          <TabsTrigger value="documentLocker">
            <Button variant="ghost" className="w-full justify-start">
              <Folder className="mr-2 h-4 w-4" /> Document Locker
            </Button>
          </TabsTrigger>

          <TabsTrigger value="tickets">
            <Button variant="ghost" className="w-full justify-start">
              <Ticket className="mr-2 h-4 w-4" /> Tickets
            </Button>
          </TabsTrigger>

          <TabsTrigger value="callLogs">
            <Button variant="ghost" className="w-full justify-start">
              <Phone className="mr-2 h-4 w-4" /> Call Logs
            </Button>
          </TabsTrigger>
        </TabsList>
        <div className="w-full border">
          <TabsContent value="leadDetails">
            <LeadsUserDetails />
          </TabsContent>
          <TabsContent value="timeline">
            <LeadTimeline />
          </TabsContent>
          <TabsContent value="notes">
            <LeadsNotes />
          </TabsContent>
          <TabsContent value="communicationLogs">
            <LeadsCommunicationLogs />
          </TabsContent>
          <TabsContent value="documentLocker">
            <LeadsDocumentLocker />
          </TabsContent>
          <TabsContent value="tickets">
            <LeadsTickets />
          </TabsContent>
          <TabsContent value="callLogs">
            <LeadsCallLogs />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
