import React, { memo } from 'react';
import { StyleSheet, Text } from 'react-native';
import { theme } from '../core/theme';
import styles from "../styles";

type Props = {
  children: React.ReactNode;
  style?: any;
};

const Header = (props: Props) => (
  <Text style={styles.header} {...props}>{props.children}</Text>
);

export default memo(Header);
