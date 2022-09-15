import { Card } from '../components/Card';
import { Navbar } from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className='pt-16 px-6 flex flex-wrap gap-4'>
        <Card imageUrl='/assets/gato.png' />
        <Card imageUrl='/assets/gato.png' />
      </main>
    </>
  );
}
