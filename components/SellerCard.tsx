// components/SellerCard.tsx
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import type { Seller } from '../data/sellers';

export default function SellerCard({ seller, onPress }: { seller: Seller; onPress?: () => void }) {
  return (
    <TouchableOpacity onPress={onPress} style={{ flexDirection: 'row', padding: 12, borderWidth: 1, borderColor: '#eee', borderRadius: 12, marginBottom: 10, alignItems: 'center' }}>
      <Image source={{ uri: seller.image }} style={{ width: 80, height: 60, borderRadius: 8, marginRight: 12 }} />
      <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: '700' }}>{seller.name}</Text>
        <Text style={{ color: '#666', marginTop: 4 }}>{seller.bio}</Text>
        {seller.phone ? <Text style={{ color: '#007aff', marginTop: 6 }}>{seller.phone}</Text> : null}
      </View>
    </TouchableOpacity>
  );
}
