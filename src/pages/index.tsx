import { useQuery } from '@tanstack/react-query';
import { GetStaticProps } from 'next';
import type { Photo } from '../@types';
import { Card } from '../components/Card';
import { Loading } from '../components/Loading';
import { Navbar } from '../components/Navbar';
import { fetchPhotos } from '../services/fetchPhotos';

interface Data {
  photos: Photo[];
}

interface Props {
  initialData: Data;
}

export default function Home({ initialData }: Props) {
  const { data, isFetching } = useQuery<Data>(['photos'], fetchPhotos, {
    refetchOnWindowFocus: false,
    initialData,
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
            <Card
              key={item.id}
              camera={item.camera}
              date={item.earth_date}
              imgSrc={item.img_src}
              rover={item.rover}
            />
          ))}
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data: Data = await fetchPhotos();
  return {
    props: {
      initialData: data,
    },
  };
};
