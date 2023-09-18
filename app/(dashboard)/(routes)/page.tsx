import { UserButton } from '@clerk/nextjs';
export default function Home() {
  return (
    <div>
      <p className="text-red-500 font-medium">This is a protected page</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
