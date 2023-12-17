import { fetchFilteredCustomers } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import CustomersTable from '@/app/ui/customers/table';
import { Suspense } from 'react';
import { TableRowSkeleton } from '@/app/ui/skeletons';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const customers = await fetchFilteredCustomers(query);
  
  return (
    <Suspense fallback={<TableRowSkeleton />}>
      <CustomersTable customers={customers} />
    </Suspense>
  );
}