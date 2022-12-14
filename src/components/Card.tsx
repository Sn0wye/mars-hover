import { format } from 'date-fns';
import Image from 'next/image';
import { useState } from 'react';
import { Camera, Rover } from '../@types';
import { FullscreenImage } from './FullscreenImage';

interface Props {
  imgSrc: string;
  camera: Camera;
  rover: Rover;
  date: string;
}

export const Card = ({ imgSrc, camera, rover, date }: Props) => {
  const [isImageFullscreen, setIsImageFullscreen] = useState(false);

  const onToggleFullscreen = () => {
    setIsImageFullscreen((state) => !state);
  };

  return (
    <>
      <div className='w-[337px] h-[455px] bg-zinc-100 rounded-xl flex flex-col'>
        <div className='relative w-full h-[13.1875rem]'>
          <Image
            src={imgSrc}
            className='rounded-tl-xl rounded-tr-xl'
            layout='fill'
            objectFit='cover'
          />
        </div>

        <div className='flex flex-col px-8 pt-6 pb-7 gap-4'>
          <h2 className='text-sm font-semibold text-[#abadc6]'>
            {format(new Date(date), 'MMMM d, y')}
          </h2>
          <p className='text-lg font-semibold'>Rover Name: {rover.name}</p>
          <p className='text-lg font-semibold'>Camera: {camera.full_name}</p>

          <button
            className='w-full p-3 bg-blue-500 text-white text-sm font-semibold rounded-xl'
            onClick={onToggleFullscreen}
          >
            Ver
          </button>
        </div>
      </div>

      <FullscreenImage
        show={isImageFullscreen}
        imageUrl={imgSrc}
        onRequestExit={onToggleFullscreen}
      />
    </>
  );
};
