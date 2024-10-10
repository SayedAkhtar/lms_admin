'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';
import { Mail, UserPlus, RefreshCcw, CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';

type TimelineEvent = {
  date: Date;
  icon: 'mail' | 'user-plus' | 'refresh-ccw';
  description: string;
  points?: number;
};

const timelineEvents: TimelineEvent[] = [
  {
    date: new Date('2024-10-02T15:30:00'),
    icon: 'mail',
    description:
      'Khushbu lohare received email on khushbulohare2@gmail.com with subject line: student_welcome_api.',
    points: 0
  },
  {
    date: new Date('2024-10-02T15:30:00'),
    icon: 'mail',
    description:
      'Khushbu lohare opened email on khushbulohare2@gmail.com with subject line: student_welcome_api.',
    points: 1
  },
  {
    date: new Date('2024-10-02T15:29:00'),
    icon: 'refresh-ccw',
    description:
      'NPF Automation re-assigned Lead to navjot kaur from Automation Id :35443 and Job Id :12300791 on 02 Oct 2024 03:29 PM.'
  },
  {
    date: new Date('2024-10-02T15:26:00'),
    icon: 'user-plus',
    description:
      'Khushbu lohare registered via lead origin:API, registration channel: Email through Channel/Publisher: CollegeDekho with Campaign Name: Collegedekho/NA/NA',
    points: 2
  },
  {
    date: new Date('2024-10-02T15:26:00'),
    icon: 'user-plus',
    description: 'Khushbu lohare has successfully created account .',
    points: 5
  },
  {
    date: new Date('2024-10-02T15:26:00'),
    icon: 'mail',
    description:
      'Email with login credential sent to the Khushbu lohare on khushbulohare2@gmail.com',
    points: 1
  }
];

export function LeadTimeline() {
  const [date, setDate] = useState<Date>();

  return (
    <div className="container mx-auto p-4">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Timeline</h1>
        <div className="flex gap-2">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Action" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Actions</SelectItem>
              <SelectItem value="email">Email</SelectItem>
              <SelectItem value="registration">Registration</SelectItem>
            </SelectContent>
          </Select>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-[180px] justify-start text-left font-normal"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, 'PPP') : <span>Select date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className="space-y-4">
        {timelineEvents.map((event, index) => (
          <div key={index} className="flex items-start">
            <div className="mr-4 flex flex-col items-center">
              <div className="text-sm text-gray-500">
                {format(event.date, 'dd MMM yyyy')}
              </div>
              <div className="text-sm text-gray-500">
                {format(event.date, 'hh:mm a')}
              </div>
              <div className="my-2 h-full w-px bg-gray-200"></div>
            </div>
            <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
              {event.icon === 'mail' && (
                <Mail className="h-5 w-5 text-blue-500" />
              )}
              {event.icon === 'user-plus' && (
                <UserPlus className="h-5 w-5 text-blue-500" />
              )}
              {event.icon === 'refresh-ccw' && (
                <RefreshCcw className="h-5 w-5 text-blue-500" />
              )}
            </div>
            <div className="flex-grow">
              <p className="text-sm text-gray-700">{event.description}</p>
              {event.points !== undefined && (
                <span className="text-sm font-semibold text-green-500">
                  +{event.points}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
