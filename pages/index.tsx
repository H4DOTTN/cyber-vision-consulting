import { Inter } from 'next/font/google';
import Hero from '@sections/home/hero';
import Team from '@sections/home/team';
import Achievements from '@sections/home/achievements';
import Services from '@sections/home/services';
import Customers from '@sections/home/customers';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Hero />
      <Achievements />
      <Services />
      <Customers />
      <Team />
    </>
  );
}
