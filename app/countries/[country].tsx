// app/countries/[country].tsx
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Header from '../../components/Header';
import { COUNTRIES } from '../../data/countries';

export default function CountryPage() {
  const { country } = useLocalSearchParams<{ country?: string }>();
  const router = useRouter();
  const item = COUNTRIES.find(c => c.slug === country) ?? null;

  if (!item) {
    return (
      <View style={{ flex: 1 }}>
        <Header />
        <View style={{ padding: 16 }}>
          <Text>Country not found</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Text style={{ fontSize: 28, fontWeight: '900' }}>{item.name} {item.emoji}</Text>
        <Text style={{ color: '#666', marginTop: 8 }}>{item.intro}</Text>

        <Text style={{ marginTop: 16, fontWeight: '800' }}>Highlights</Text>
        <Text style={{ color: '#666', marginTop: 6 }}>Explore markets, food stalls, hidden gems, and local sellers handpicked by our community.</Text>

        <TouchableOpacity onPress={() => router.push('/auth/signup')} style={{ marginTop: 20, padding: 12, backgroundColor: '#007aff', borderRadius: 10 }}>
          <Text style={{ color: '#fff', fontWeight: '700', textAlign: 'center' }}>Sign up to unlock full access</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
