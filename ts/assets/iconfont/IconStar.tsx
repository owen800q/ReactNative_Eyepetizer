/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let IconStar: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M218.861714 956.214857c17.554286 13.293714 39.862857 8.576 66.432-10.715428L512 779.209143l227.145143 166.290286c26.569143 19.291429 48.420571 24.009143 66.432 10.715428 17.554286-13.293714 21.430857-35.145143 10.715428-66.432l-89.581714-266.569143 228.864-164.571428c26.569143-18.852571 37.284571-38.582857 30.427429-59.995429-6.857143-20.571429-27.008-30.866286-59.995429-30.427428l-280.722286 1.700571-85.284571-267.849143C549.723429 70.363429 534.308571 54.509714 512 54.509714c-21.851429 0-37.284571 15.853714-47.579429 47.561143L379.136 369.92l-280.704-1.700571c-33.005714-0.438857-53.138286 9.856-59.995429 30.427428-7.296 21.430857 3.84 41.142857 30.427429 59.995429l228.845714 164.571428-89.563428 266.569143c-10.715429 31.286857-6.857143 53.138286 10.715428 66.432z m61.714286-84.845714c-0.859429-0.859429-0.438857-1.298286 0-3.876572l85.284571-245.138285c5.577143-16.713143 2.56-29.988571-12.434285-40.283429L139.995429 434.633143c-2.139429-1.28-2.56-2.139429-2.139429-3.419429 0.438857-1.28 1.28-1.28 3.858286-1.28l259.291428 4.717715c17.554286 0.420571 28.708571-6.857143 34.285715-24.429715l74.148571-248.137143c0.841143-2.578286 1.700571-3.437714 2.56-3.437714 1.28 0 2.139429 0.859429 2.56 3.419429l74.587429 248.137143c5.138286 17.590857 16.713143 24.868571 34.285714 24.448l259.291428-4.717715c2.56 0 3.419429 0 3.84 1.28 0.438857 1.28-0.420571 2.139429-2.139428 3.437715l-213.430857 147.419428c-14.994286 10.294857-18.413714 23.588571-12.434286 40.283429l85.302857 245.138285c0.420571 2.578286 0.859429 2.998857 0 3.858286-0.859429 1.28-2.139429 0.438857-3.858286-0.859428l-206.153142-157.275429c-13.714286-10.715429-29.568-10.715429-43.282286 0l-206.134857 157.293714c-1.718857 1.28-2.998857 2.139429-3.858286 0.841143z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconStar.defaultProps = {
  size: 18,
};

IconStar = React.memo ? React.memo(IconStar) : IconStar;

export default IconStar;
