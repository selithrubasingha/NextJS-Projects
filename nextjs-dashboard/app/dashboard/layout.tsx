import SideNav from '@/app/dashboard/sidenav';
import {inter,lusitana} from '@/app/ui/fonts';


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className={`${lusitana.className} antialiased`}>{children}</div>
    </div>
  );
}