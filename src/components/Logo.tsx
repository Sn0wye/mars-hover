import React from 'react';

type Props = React.SVGAttributes<SVGElement>;

export const Logo = ({ ...props }: Props) => {
  return (
    <svg
      {...props}
      width='35'
      height='30'
      viewBox='0 0 35 30'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M0 29.5001H23.8802L35 19.8032H11.3021L0 29.5001Z'
        fill='#8E909A'
      />
      <path
        d='M34.9999 19.8032H11.1197L-6.19888e-05 10.1969H23.6979L34.9999 19.8032Z'
        fill='#D2D3D7'
      />
      <path d='M0 10.197H23.8802L35 0.50008H11.3021L0 10.197Z' fill='#FFFFFF' />
    </svg>
  );
};
