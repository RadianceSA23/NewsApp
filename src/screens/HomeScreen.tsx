import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Text,
  View,
  ActivityIndicator,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { CATEGORIES } from '../constants/categories';
import {LANGUAGES} from '../constants/languages';
import { useNetStatus } from '../hooks/useNetStatus';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';



export default function HomeScreen() {
  const dispatch = useDispatch();
  const { articles, loading, error } = useSelector((state: RootState) => state.news);
  const isConnected = useNetStatus();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  //const navigation = useNavigation();

const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
const [language, setLanguage] = useState('en');

useEffect(() => {
  const finalCategory = category === 'all' ? 'top' : category;

  dispatch({
    type: 'news/fetchNewsRequest',
    payload: { query, category: finalCategory, language },
  });
}, [query, category, language]);
  const renderLanguageChips = () => (
    <View style={styles.fixedChipRow}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.languageScroll}>
      {LANGUAGES.map((lang) => (
        <TouchableOpacity
          key={lang.key}
          style={[
            styles.chip,
            language === lang.key && styles.chipSelected,
          ]}
          onPress={() => setLanguage(lang.key)}
        >
          <Text style={language === lang.key ? styles.chipTextSelected : styles.chipText}>
            {lang.label}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
    </View>
  );
  const renderItem = ({ item }: any) => (
    <TouchableOpacity onPress={() => navigation.navigate('NewsDetail', { article: item })}>
    <View style={styles.card}>
      {item.image_url ? (
        <Image source={{ uri: item.image_url }} style={styles.image} />
      ) : (
        <View style={styles.imagePlaceholder}><Text>No Image</Text></View>
      )}
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.date}>{new Date(item.pubDate).toLocaleString()}</Text>
      </View>
    </View>
    </TouchableOpacity>
  );

  const renderCategoryChips = () => (
    <View style={styles.fixedChipRow}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
      {CATEGORIES.map((cat) => (
        <TouchableOpacity
          key={cat.key}
          style={[
            styles.chip,
            category === cat.key && styles.chipSelected,
          ]}
          onPress={() => setCategory(cat.key)}
        >
          <Text style={category === cat.key ? styles.chipTextSelected : styles.chipText}>
            {cat.label}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
    </View>
    
  );

  return (
    <View style={{ flex: 1, padding: 10 }}>
      {isConnected === false && (
  <View style={{ backgroundColor: '#ffcccb', padding: 6, alignItems: 'center' }}>
    <Text style={{ color: '#a00', fontWeight: 'bold' }}>You're offline</Text>
  </View>
)}
      <TextInput
        placeholder="Search news..."
        value={query}
        onChangeText={setQuery}
        style={styles.searchInput}
      />
      {renderLanguageChips()}
      {renderCategoryChips()}
  
      {loading && <ActivityIndicator size="large" style={{ marginTop: 20 }} />}
      {error && <Text style={{ marginTop: 20 }}>Error: {error}</Text>}
  
      {!loading && !error && (
        <FlatList
          data={articles}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          contentContainerStyle={{ paddingVertical: 10 }}
        />
      )}
    </View>
  );
  
}

const styles = StyleSheet.create({
  searchInput: {
    height: 40,
    borderColor: '#aaa',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 8,
  },
  categoryScroll: {
    height: 40, // 👈 force consistent height
    marginBottom: 10,
  },
  fixedChipRow: {
    height: 42, // ✅ Fixed height ensures no jumping
    marginBottom: 8,
  },
  
  chipScrollContainer: {
    alignItems: 'center',
  },
  
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#eee',
    borderRadius: 20,
    marginRight: 8,
    height: 32, // ✅ Match height to prevent row from stretching
    justifyContent: 'center',
  },
  
  chipSelected: {
    backgroundColor: '#007aff',
  },
  
  chipText: {
    color: '#333',
  },
  
  chipTextSelected: {
    color: '#fff',
  },
  

  card: {
    flexDirection: 'row',
    marginBottom: 12,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 2,
  },
  image: {
    width: 100,
    height: 100,
  },
  imagePlaceholder: {
    width: 100,
    height: 100,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 6,
  },
  date: {
    fontSize: 12,
    color: '#888',
  },
  languageScroll: {
    height: 40,
    marginBottom: 10,
  },
});