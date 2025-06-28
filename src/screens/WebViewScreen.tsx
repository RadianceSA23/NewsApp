
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

type WebViewRouteProp = RouteProp<RootStackParamList, 'WebView'>;

export default function WebViewScreen() {
  const { params } = useRoute<WebViewRouteProp>();
  const { url } = params;

  return (
    <View style={styles.container}>
      <WebView source={{ uri: url }} startInLoadingState />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
