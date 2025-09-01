// components/Header.tsx
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

export default function Header() {
  const router = useRouter();
  return (
    <View style={{ padding: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={require('../assets/images/ubuntu-logo.jpg')} style={{ width: 40, height: 40, borderRadius: 8 }} />
        <Text style={{ marginLeft: 10, fontSize: 18, fontWeight: '800' }}>Ubuntu Explorer</Text>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => router.push('/about')} style={{ marginRight: 12 }}>
          <Text style={{ color: '#007aff' }}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/countries')} style={{ marginRight: 12 }}>
          <Text style={{ color: '#007aff' }}>Countries</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/auth/login')}>
          <Text style={{ color: '#007aff' }}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
