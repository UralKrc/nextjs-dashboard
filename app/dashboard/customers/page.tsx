import { fetchFilteredCustomers } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import CustomersTable from '@/app/ui/customers/table';
import { Suspense } from 'react';
import { TableRowSkeleton } from '@/app/ui/skeletons';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Customers',
};

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