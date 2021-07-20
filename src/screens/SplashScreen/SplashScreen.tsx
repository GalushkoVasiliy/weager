import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Logo from '../../assets/icons/Logo';
import {Row} from '../../components';
import {COLORS, STRINGS} from '../../config';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  onAnimationFinish: () => void;
}

const Splash: React.FunctionComponent<Props> = ({onAnimationFinish}) => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      onAnimationFinish();
    }, 1500);
  }, [onAnimationFinish]);

  return (
    <LinearGradient
      colors={[COLORS.brightTurquoise, COLORS.biscay]}
      style={styles.splashWrapper}>
      <Row style={styles.title}>
        <View style={styles.logoWrapper}>
          <Logo />
        </View>
        <View>
          <Text style={styles.titleText}>
            {STRINGS.splashScreen.titlePart1}
          </Text>
          <Text style={styles.titleText}>
            {STRINGS.splashScreen.titlePart2}
          </Text>
        </View>
      </Row>
    </LinearGradient>
  );
};

export default Splash;
