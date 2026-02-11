//Improting some components and fonts for the dashboard page
import { Card } from '@/app/dashboard/cards';
import RevenueChart from '@/app/dashboard/revenue-chart';
import LatestInvoices from '@/app/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { fetchRevenue , fetchLatestInvoices,fetchCardData } from '@/app/lib/data';
 
export default async function Page() {

  // 2. adding the fetchrevnue component . 
  // Fire off all promises at the same time
  const data = await Promise.all([
    fetchRevenue(),
    fetchLatestInvoices(),
    fetchCardData(),
  ]);

  // Destructure the results from the array in the same order you passed them
  const [revenue, latestInvoices, cardData] = data;

  const { numberOfCustomers, numberOfInvoices, totalPaidInvoices, totalPendingInvoices } = cardData;
  //The page is an async server component. This allows you to use await to fetch data.
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChart revenue={revenue}  />
        <LatestInvoices latestInvoices={latestInvoices} />
      </div>
    </main>
  );
}