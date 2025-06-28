import React from 'react';
import { View, Text, Image, ScrollView, Button } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';
import type { StackNavigationProp } from '@react-navigation/stack';

type NewsDetailRouteProp = RouteProp<RootStackParamList, 'NewsDetail'>;
type NavigationProp = StackNavigationProp<RootStackParamList, 'NewsDetail'>;

export default function NewsDetailScreen() {
  const route = useRoute<NewsDetailRouteProp>();
  const navigation = useNavigation<NavigationProp>();
  const { article } = route.params;

  return (
    <ScrollView style={{ padding: 16 }}>
      {article.image_url && (
        <Image source={{ uri: article.image_url }} style={{ height: 200, marginBottom: 10 }} />
      )}
      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{article.title}</Text>
      <Text style={{ color: '#666', marginVertical: 8 }}>{article.pubDate}</Text>
      <Text style={{ marginBottom: 20 }}>
        {article.description || 'No description available.'}
      </Text>
      {article.link && (
        <Button
          title="Read More"
          onPress={() => navigation.navigate('WebView', { url: article.link })}
        />
      )}
    </ScrollView>
  );
}
