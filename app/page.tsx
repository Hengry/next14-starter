'use client';
import TestButton from '@/components/TestButton';
import useCounterStore from '@/store/counterStore';

export default function Home() {
  const counts = useCounterStore((state) => state.counts);

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <TestButton>test</TestButton>
      <div>{counts}</div>
    </main>
  );
}
