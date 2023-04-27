import { Inter } from 'next/font/google';
import Hero from '@sections/home/hero';
import Team from '@sections/home/team';
import Achievements from '@sections/home/achievements';
import Services from '@sections/home/services';
import Customers from '@sections/home/customers';
import Solutions from '@sections/home/solutions';
import Ready from '@sections/home/ready';
import GetStarted from '@/components/sections/home/get-started';
import Unique from '@/components/sections/home/unique';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Hero />
      <GetStarted />
      <Unique />
      <Achievements />
      <Services />
      <Solutions />
      <Ready />
      <Customers />
      <Team />
    </>
  );
}
