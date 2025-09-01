// app/(tabs)/profile.tsx
import * as FileSystem from 'expo-file-system';
import { useRouter } from 'expo-router';
import React, { useContext, useState } from 'react';
import { Alert, Share, Text, TouchableOpacity, View } from 'react-native';
import Header from '../../components/Header';
import { InterestsContext } from '../../contexts/InterestsContext';

export default function ProfileScreen() {
  const { interests } = useContext(InterestsContext);
  const [downloading, setDownloading] = useState(false);
  const router = useRouter();

  const doDownload = async () => {
    try {
      setDownloading(true);
      const payload = { downloadedAt: new Date().toISOString(), interests, seed: 'offline-pack-sample' };
      const path = FileSystem.documentDirectory + 'ubuntu-offline-pack.json';
      await FileSystem.writeAsStringAsync(path, JSON.stringify(payload));
      Alert.alert('Offline pack saved', `Saved to ${path}`);
    } catch (e) {
      Alert.alert('Error', 'Could not save pack');
    } finally {
      setDownloading(false);
    }
  };

  const shareTrip = async () => {
    const text = `I'm exploring with Ubuntu Explorer — interests: ${interests.join(', ')}`;
    try {
      await Share.share({ message: text });
    } catch (e) {}
  };

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 22, fontWeight: '800' }}>Profile / Utilities</Text>

        <Text style={{ marginTop: 12, fontWeight: '700' }}>Interests</Text>
        <Text style={{ color: '#666', marginTop: 6 }}>{interests.length ? interests.join(' • ') : 'No interests set'}</Text>

        <TouchableOpacity onPress={() => router.push('/interests')} style={{ marginTop: 16, backgroundColor: '#111', padding: 12, borderRadius: 10 }}>
          <Text style={{ color: '#fff', textAlign: 'center' }}>Refine Interests</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={doDownload} style={{ marginTop: 12, backgroundColor: '#007aff', padding: 12, borderRadius: 10 }}>
          <Text style={{ color: '#fff', textAlign: 'center' }}>{downloading ? 'Downloading...' : 'Download offline pack (sim)'}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={shareTrip} style={{ marginTop: 12, backgroundColor: '#eee', padding: 12, borderRadius: 10 }}>
          <Text style={{ textAlign: 'center' }}>Share trip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
