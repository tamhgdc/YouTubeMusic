import React, { memo } from 'react';

const ReplayIcon = ({ isReplay }) => {
  return (
    <svg className="style-scope tp-yt-iron-icon" width="24px" height="24px" fill={`${isReplay ? '#fff' : '#909090'}`}>
      <g className="style-scope tp-yt-iron-icon">
        <path
          d="M3 6.929c0-.75.643-1.393 1.393-1.393h14.286L16.32 3.179 17.5 2l4.393 4.393-4.393 4.393-1.179-1.179L18.68 7.25H4.714V11H3V6.929zm-.893 10.678L6.5 13.214l1.179 1.179L5.32 16.75l13.965-.071v-3.965H21V17c0 .75-.643 1.393-1.393 1.393l-14.286.071 2.358 2.357L6.5 22l-4.393-4.393z"
          className="style-scope tp-yt-iron-icon"></path>
      </g>
    </svg>
  );
};

export default memo(ReplayIcon);
