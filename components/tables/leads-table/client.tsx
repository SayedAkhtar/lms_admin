'use client';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { User } from '@/constants/data';
import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { columns } from './columns';
import { Lead } from '@/constants/leads';

interface ProductsClientProps {
  data: any;
  columns: any;
}

export const LeadsList: React.FC<ProductsClientProps> = ({ data }) => {
  const router = useRouter();

  const dataColumns = data.map((item: any, index: number) => {
    return {
      id: index + 1,
      ...item
    };
  });
  return (
    <>
      <div className="flex items-start justify-between">
        <Heading title={`Leads (${data.length})`} description="Manage leads" />
        <Button
          className="text-xs md:text-sm"
          onClick={() => router.push(`/dashboard/user/new`)}
        >
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={dataColumns} />
    </>
  );
};
