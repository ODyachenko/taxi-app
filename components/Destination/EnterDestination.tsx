import React, { FC } from 'react';

type EnterDestinationProps = {
  handler: () => void;
};

const EnterDestination: FC<EnterDestinationProps> = ({ handler }) => {
  return (
    <>
      <h1 className="destination__title title">
        <svg
          onClick={handler}
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="14"
          viewBox="0 0 23 14"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.22793 0.275425C7.31523 0.362511 7.3845 0.465965 7.43176 0.579862C7.47902 0.693759 7.50335 0.815862 7.50335 0.939175C7.50335 1.06249 7.47902 1.18459 7.43176 1.29849C7.3845 1.41239 7.31523 1.51584 7.22793 1.60293L2.2648 6.56418L7.22793 11.5254C7.31509 11.6126 7.38423 11.7161 7.43141 11.83C7.47858 11.9438 7.50286 12.0659 7.50286 12.1892C7.50286 12.3124 7.47858 12.4345 7.43141 12.5484C7.38423 12.6623 7.31509 12.7658 7.22793 12.8529C7.14076 12.9401 7.03728 13.0092 6.9234 13.0564C6.80951 13.1036 6.68745 13.1279 6.56418 13.1279C6.44091 13.1279 6.31884 13.1036 6.20496 13.0564C6.09107 13.0092 5.98759 12.9401 5.90043 12.8529L0.275426 7.22793C0.18812 7.14084 0.118852 7.03738 0.0715899 6.92349C0.0243279 6.80959 0 6.68749 0 6.56418C0 6.44086 0.0243279 6.31876 0.0715899 6.20486C0.118852 6.09097 0.18812 5.98751 0.275426 5.90043L5.90043 0.275425C5.98751 0.188119 6.09097 0.118851 6.20486 0.0715891C6.31876 0.024327 6.44086 0 6.56418 0C6.68749 0 6.80959 0.024327 6.92349 0.0715891C7.03739 0.118851 7.14084 0.188119 7.22793 0.275425Z"
            fill="#4F4F4F"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.939209 6.56421C0.939209 6.31557 1.03798 6.07711 1.2138 5.9013C1.38961 5.72548 1.62807 5.62671 1.87671 5.62671H21.5642C21.8128 5.62671 22.0513 5.72548 22.2271 5.9013C22.4029 6.07711 22.5017 6.31557 22.5017 6.56421C22.5017 6.81285 22.4029 7.05131 22.2271 7.22712C22.0513 7.40294 21.8128 7.50171 21.5642 7.50171H1.87671C1.62807 7.50171 1.38961 7.40294 1.2138 7.22712C1.03798 7.05131 0.939209 6.81285 0.939209 6.56421Z"
            fill="#4F4F4F"
          />
        </svg>
        Enter destination
      </h1>
      <label className="destination__settings">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
        >
          <circle
            cx="7.5"
            cy="7.5"
            r="4.81579"
            stroke="#34D186"
            strokeWidth="5.36842"
          />
        </svg>
        <input type="text" placeholder="Your location" required />
      </label>
      <label className="destination__settings">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="15"
          viewBox="0 0 12 15"
          fill="none"
        >
          <path
            d="M6.00006 0C2.69181 0 6.10835e-05 2.69175 6.10835e-05 5.99625C-0.0216889 10.83 5.77206 14.838 6.00006 15C6.00006 15 12.0218 10.83 12.0001 6C12.0001 2.69175 9.30831 0 6.00006 0ZM6.00006 9C4.34256 9 3.00006 7.6575 3.00006 6C3.00006 4.3425 4.34256 3 6.00006 3C7.65756 3 9.00006 4.3425 9.00006 6C9.00006 7.6575 7.65756 9 6.00006 9Z"
            fill="#7C6DDD"
          />
        </svg>

        <input type="text" placeholder="Adress" required />
      </label>
    </>
  );
};

export default EnterDestination;
