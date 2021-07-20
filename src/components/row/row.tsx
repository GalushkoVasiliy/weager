/* REACT */
import React from 'react';
/* TYPES */
import type {Node} from 'react';
import {View, ViewStyle} from 'react-native';

/* STYLES */
import styles from './styles';

export interface BaseProps {
  children?: Node;
  style?: ViewStyle;
}

export default (props: BaseProps): Node => {
  const {children, style, ...restProps} = props;

  return (
    <View style={[styles.row, style]} {...restProps}>
      {children}
    </View>
  );
};
