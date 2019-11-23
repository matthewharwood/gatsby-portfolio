import React from 'react';

type fbIconType = {
  scale?: number,
}

export const FacebookIcon = ({scale=1}:fbIconType) => {
  return (
    <svg
      width="24"
      height="24"
      transform={ `scale(${scale})` }
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.676 0H1.324C0.593 0 0 0.593 0 1.324V22.676C0 23.408 0.593 24 1.324 24H12.818V14.706H9.689V11.085H12.818V8.41C12.818 5.311 14.712 3.625 17.477 3.625C18.802 3.625 19.941 3.722 20.273 3.766V7.006H18.352C16.852 7.006 16.56 7.727 16.56 8.777V11.088H20.144L19.679 14.718H16.56V24H22.675C23.408 24 24 23.408 24 22.676V1.324C24 0.593 23.408 0 22.676 0Z"
        fill="black"
      />
    </svg>
  );
};
