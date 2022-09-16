import Image from 'next/image';

interface Props {
  imageUrl: string;
  onRequestExit: () => void;
}

export const FullscreenImage = ({ imageUrl, onRequestExit }: Props) => {
  return (
    <div
      className='fixed inset-0 w-screen h-screen bg-black bg-opacity-70 flex justify-center items-center select-none z-10'
      onClick={onRequestExit}
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
  );
};
