import React, { memo } from 'react';
import { Image, StyleSheet } from 'react-native';

const Logo = (props: any) => (
  <Image source={require('../../assets/icon.png')} style={styles.image} {...props} />
);

const styles = StyleSheet.create({
  image: {
    width: 128,
    height: 128,
    marginBottom: 12,
  },
});

export default memo(Logo);
