'use client';
import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';
import { User } from '@/constants/data';
import { Checkbox } from '@/components/ui/checkbox';
import { Lead } from '@/constants/leads';
import { LeadsDetailAction } from '@/components/tables/leads-table/lead-details-action';

export const columns: ColumnDef<Lead>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'name',
    header: 'NAME',
    cell: ({ row, getValue }) => {
      return <LeadsDetailAction data={row.original} />;
    }
  },
  {
    accessorKey: 'registered_mobile',
    header: 'Registered Mobile'
  },
  {
    accessorKey: 'registered_email',
    header: 'Registered Email'
  },
  {
    accessorKey: 'city',
    header: 'City'
  },
  {
    accessorKey: 'state',
    header: 'State'
  },
  {
    accessorKey: 'primary_registration_campaign',
    header: 'Primary Registration Campaign'
  },
  {
    accessorKey: 'user_registration_date',
    header: 'User Registration Date'
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
];
