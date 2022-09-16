import { useQuery } from '@tanstack/react-query';
import type { Photo } from '../@types';
import { Card } from '../components/Card';
import { Loading } from '../components/Loading';
import { Navbar } from '../components/Navbar';
import { fetchPhotos } from '../services/fetchPhotos';

interface Data {
  photos: Photo[];
}

export default function Home() {
  const { data, isFetching } = useQuery<Data>(['teste'], fetchPhotos, {
    refetchOnWindowFocus: false,
  });

  if (isFetching) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <main className='pt-16 px-6 flex flex-wrap gap-4'>
        {data &&
          data.photos.map((item) => (
            <Card key={item.id} imageUrl={item.img_src} />
          ))}
      </main>
    </>
  );
}
