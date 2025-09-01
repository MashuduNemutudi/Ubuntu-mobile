// app/countries/all.tsx
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import CountryCard from '../../components/CountryCard';
import Header from '../../components/Header';
import { COUNTRIES } from '../../data/countries';

export default function AllCountries() {
  const router = useRouter();
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Text style={{ fontSize: 22, fontWeight: '800' }}>All G20 Countries</Text>
        <Text style={{ color: '#666', marginTop: 6 }}>Discover authentic experiences across all G20 nations</Text>

        <View style={{ marginTop: 12 }}>
          {COUNTRIES.map(c => (
            <CountryCard key={c.id} name={c.name} emoji={c.emoji} description={c.intro} onPress={() => router.push(`/countries/${c.slug}`)} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
