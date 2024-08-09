import AddCompanyButton from '@/components/add-company-button';
import StatusLabel, { Status } from '@/components/status-label';
import { headers } from 'next/headers';

export default function Home() {
  console.log(headers());

  return (
    <main>
      <h1 className="text-xl">Home page {new Date().toTimeString()}</h1>
      <AddCompanyButton />
    </main>
  );
}
