import React, { memo } from 'react';
import { StyleSheet, Text } from 'react-native';
import { theme } from '../core/theme';
import styles from "../styles";

type Props = {
  children: React.ReactNode;
  style?: any;
};

const Paragraph = ({ children, style }: Props) => (
  <Text style={{...styles.paragraphText, ...style}}>{children}</Text>
);

export default memo(Paragraph);
