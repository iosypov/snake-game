import React, {MouseEvent} from 'react';

export interface IconProps extends IconContainerProps {
  gradient?: boolean;
}

export const StarIcon: React.FC<IconProps> = ({ gradient, ...props }) => {
  return (
    <IconContainer {...props}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 8.20038C18 8.34825 17.9167 8.50956 17.75 8.68431L14.2596 12.2533L15.0865 17.2943C15.0929 17.3413 15.0962 17.4085 15.0962 17.4959C15.0962 17.6371 15.0625 17.7564 14.9952 17.8538C14.9279 17.9513 14.8301 18 14.7019 18C14.5801 18 14.4519 17.9597 14.3173 17.879L10 15.4997L5.68269 17.879C5.54167 17.9597 5.41346 18 5.29808 18C5.16346 18 5.0625 17.9513 4.99519 17.8538C4.92788 17.7564 4.89423 17.6371 4.89423 17.4959C4.89423 17.4556 4.90064 17.3884 4.91346 17.2943L5.74038 12.2533L2.24038 8.68431C2.08013 8.50284 2 8.34152 2 8.20038C2 7.95169 2.17949 7.7971 2.53846 7.73661L7.36538 7.00063L9.52885 2.41336C9.65064 2.13779 9.80769 2 10 2C10.1923 2 10.3494 2.13779 10.4712 2.41336L12.6346 7.00063L17.4615 7.73661C17.8205 7.7971 18 7.95169 18 8.20038Z"
          fill={gradient ? 'url(#paint0_linear_789_31524)' : 'currentColor'}
        />
        <defs>
          <linearGradient
            id="paint0_linear_789_31524"
            x1="5.63636"
            y1="16.9091"
            x2="16.9091"
            y2="4.90909"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#ED8525" />
            <stop offset="1" stopColor="#F2D84F" />
          </linearGradient>
        </defs>
      </svg>
    </IconContainer>
  );
};


export interface IconContainerProps {
  /**
   * CSS classes
   */
  className?: string;
  /**
   * Icon
   */
  children?: React.ReactElement;
  /**
   * Fire when user click on icon
   */
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  /**
   * Fire when user hover
   */
  onMouseOver?: (e: MouseEvent<HTMLElement>) => void;
  /**
   * Fire when user blur
   */
  onMouseOut?: (e: MouseEvent<HTMLElement>) => void;
}

export const IconContainer: React.FC<IconContainerProps> = ({
  className,
  children,
  onClick,
  onMouseOver,
  onMouseOut,
}) => {
  return (
    <div
      className={className}
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      {children}
    </div>
  );
};
