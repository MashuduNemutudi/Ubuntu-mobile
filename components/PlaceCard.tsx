// components/PlaceCard.tsx
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import type { Place } from '../data/places';

export default function PlaceCard({ place, onPress }: { place: Place; onPress?: () => void }) {
  return (
    <TouchableOpacity onPress={onPress} style={{ marginBottom: 12, borderRadius: 12, overflow: 'hidden', borderWidth: 1, borderColor: '#eee' }}>
      <Image source={{ uri: place.image }} style={{ width: '100%', height: 140 }} />
      <View style={{ padding: 12 }}>
        <Text style={{ fontWeight: '700' }}>{place.name}</Text>
        <Text style={{ color: '#666', marginTop: 6 }}>{place.description}</Text>
        <View style={{ marginTop: 8, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text>⭐ {place.rating.toFixed(1)}</Text>
          <Text style={{ color: '#888' }}>{place.tags.join(' • ')}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
