'use client';
import { AlertModal } from '@/components/modal/alert-modal';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Lead } from '@/constants/leads';
import { Edit, MoreHorizontal, Trash } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface LeadsDetailActionProps {
  data: Lead;
}

export const LeadsDetailAction: React.FC<LeadsDetailActionProps> = ({
  data
}) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const onConfirm = async () => {};

  return (
    <>
      <div
        onClick={() => router.push(`/dashboard/leads/${data.id}`)}
        className="cursor-pointer text-blue-500 hover:underline"
      >
        {data.name}
      </div>
    </>
  );
};
