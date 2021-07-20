import * as React from 'react';
import Svg, {SvgProps, Path, Circle} from 'react-native-svg';
type Props = SvgProps;

const Logo: React.FunctionComponent<Props> = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 483.512 483.512">
    <Path
      fill="#fcb641"
      d="M483.512 241.752l-54.584 49.936 22.016 70.64-72.344 15.624-16.272 72.2-70.504-22.488-50.072 54.48-50.064-54.48-70.504 22.488-16.272-72.2-72.352-15.624 22.024-70.64L0 241.752l54.584-49.928-22.016-70.64 72.344-15.632 16.272-72.192 70.504 22.488 50.064-54.48 50.072 54.48 70.504-22.488 16.272 72.2 72.344 15.624-22.016 70.64z"
    />
    <Circle cx={241.752} cy={244.504} r={138.736} fill="#fdc567" />
  </Svg>
);

export default React.memo(Logo);
