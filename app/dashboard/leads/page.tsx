import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import { LeadsList } from '@/components/tables/leads-table/client';
import { Leads } from '@/constants/leads';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Leads', link: '/dashboard/leads' }
];
export default function page() {
  return (
    <PageContainer>
      <div className="space-y-2">
        <Breadcrumbs items={breadcrumbItems} />
        <LeadsList data={Leads} />
      </div>
    </PageContainer>
  );
}
