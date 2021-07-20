import React from 'react';
import {KeyboardType} from 'react-native';
import {TextInput} from 'react-native';
import {COLORS} from '../../config';
import styles from './styles';

interface Props {
  label?: string;
  placeholder?: string;
  keyboardType?: KeyboardType;
  multiline?: boolean;
  security?: boolean;
  value: string;
  onFocus?: () => void;
  onBlur?: () => void | Promise<any>;
  returnKeyType?: 'go' | 'next' | 'search' | 'send' | 'done';
  onChangeText: (value: string) => void;
}

const BaseInput: React.FunctionComponent<Props> = ({
  placeholder = 'Search your city...',
  multiline = false,
  security,
  value,
  onBlur,
  onChangeText,
}) => {
  return (
    <TextInput
      value={value}
      multiline={multiline}
      allowFontScaling={false}
      underlineColorAndroid="transparent"
      secureTextEntry={security}
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor={COLORS.white}
      onChangeText={onChangeText}
      autoFocus={false}
      maxLength={50}
      onBlur={onBlur}
    />
  );
};

export default React.memo(BaseInput);
