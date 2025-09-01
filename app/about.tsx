// app/about.tsx
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Header from '../components/Header';

export default function About() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Text style={{ fontSize: 22, fontWeight: '800' }}>About Ubuntu Explorer</Text>
        <Text style={{ marginTop: 10, color: '#666' }}>
          Connecting travelers with authentic local experiences across G20 nations.
        </Text>

        <Text style={{ marginTop: 14, fontWeight: '700' }}>G20 Focus</Text>
        <Text style={{ color: '#666', marginTop: 6 }}>
          Explore tourism highlights, hidden gems, and unique cultural experiences across all G20 countries from a single platform.
        </Text>

        <Text style={{ marginTop: 14, fontWeight: '700' }}>AI-Powered</Text>
        <Text style={{ color: '#666', marginTop: 6 }}>
          Our intelligent system learns your preferences to recommend personalized experiences in each destination.
        </Text>

        <Text style={{ marginTop: 14, fontWeight: '700' }}>Community Driven</Text>
        <Text style={{ color: '#666', marginTop: 6 }}>
          Support local communities by discovering and booking authentic experiences directly with providers.
        </Text>

        <Text style={{ marginTop: 22, color: '#999', fontSize: 12 }}>
          Ubuntu Explorer was created for the G20 Tourism Hackathon with the vision of promoting sustainable tourism and cultural exchange.
        </Text>
      </ScrollView>
    </View>
  );
}
