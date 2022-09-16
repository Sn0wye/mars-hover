import Image from 'next/image';
import { useState } from 'react';
import { FullscreenImage } from './FullscreenImage';

interface Props {
  imageUrl: string;
}

export const Card = ({ imageUrl }: Props) => {
  const [isImageFullscreen, setIsImageFullscreen] = useState(false);

  const onToggleFullscreen = () => {
    setIsImageFullscreen((state) => !state);
  };

  return (
    <>
      <div className='w-[337px] h-[455px] bg-zinc-100 rounded-xl flex flex-col'>
        <div className='relative w-full h-[13.1875rem]'>
          <Image
            src={imageUrl}
            className='rounded-tl-xl rounded-tr-xl'
            layout='fill'
            objectFit='cover'
          />
        </div>

        <div className='flex flex-col px-8 pt-6 pb-7 gap-4'>
          <h2 className='text-sm font-semibold text-[#abadc6]'>
            April 17, 2022
          </h2>
          <p className='text-lg font-semibold'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            consequat quam nibh.
          </p>

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
        imageUrl={imageUrl}
        onRequestExit={onToggleFullscreen}
      />
    </>
  );
};
