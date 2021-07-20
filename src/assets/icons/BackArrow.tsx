import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
type Props = SvgProps;

const BackArrow: React.FunctionComponent<Props> = () => (
  <Svg
    width={25}
    height={25}
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M19.792 12.5H5.208M12.5 19.792L5.208 12.5 12.5 5.208"
      stroke="white"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default React.memo(BackArrow);
