import { auth } from '@/auth';
import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import { LeadsList } from '@/components/tables/leads-table/client';
// import { Leads } from '@/constants/leads';
import { cookies } from 'next/headers';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Leads', link: '/dashboard/leads' }
];
export default async function page() {
  const token = cookies().get('__DEV-token')?.value as string;
  const clientId = '6716baf7120b160db9184f71';
  let data = await fetch(`${process.env.API_BASE_URL}/leads/${clientId}/view`, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Cookie: `token=${token}`
    }
  });
  let leads: { success: boolean; leads: []; header: any } = await data.json();
  console.log('Session ===> ', leads);
  return (
    <PageContainer>
      <div className="space-y-2">
        <Breadcrumbs items={breadcrumbItems} />
        <LeadsList data={leads.leads} columns={leads.header} />
      </div>
    </PageContainer>
  );
}
