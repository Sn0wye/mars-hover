import { Transition } from '@headlessui/react';
import Image from 'next/image';
import { Fragment } from 'react';

interface Props {
  imageUrl: string;
  show: boolean;
  onRequestExit: () => void;
}

export const FullscreenImage = ({ imageUrl, onRequestExit, show }: Props) => {
  const handleExit = () => {
    onRequestExit();
  };

  return (
    <Transition
      show={show}
      as={Fragment}
      enter='ease-out duration-300'
      enterFrom='opacity-0'
      enterTo='opacity-100'
      leave='ease-in duration-200'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'
    >
      <div
        className='fixed inset-0 w-screen h-screen bg-black bg-opacity-70 flex justify-center items-center select-none z-10'
        onClick={handleExit}
      >
        <div className='relative z-20 w-[calc(95vw)] h-[calc(95)] md:w-[calc(80vh)] md:h-[calc(80vh)] aspect-square'>
          <Image
            src={imageUrl}
            className='rounded-xl'
            layout='fill'
            objectFit='cover'
          />
        </div>
      </div>
    </Transition>
  );
};
