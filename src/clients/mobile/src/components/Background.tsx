import React, { memo } from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import LoadingOverlay from "./LoadingOverlay";
import {mapDispatchToProps, mapStateToProps} from "@store";
import {connect} from 'react-redux';

type Props = {
  children: React.ReactNode;
  loading?: boolean;
};

const Background = (props?: Props) => {
  const { children, loading } = props;
  const loadingSymbol =  <LoadingOverlay/>;

  return (
  <View
    style={styles.background}
  >
      <KeyboardAwareScrollView
          style={styles.container}
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }} >
        {children}
      </KeyboardAwareScrollView>
    {loading && loadingSymbol}
  </View>
)};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(memo(Background));
