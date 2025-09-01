// app/interests.tsx
import React, { useContext, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import Header from '../components/Header';
import { InterestsContext } from '../contexts/InterestsContext';

const ALL = [
  'Street Food','Markets','Museums','Live Music','Hiking','Beaches','Nightlife','Art',
  'History','Wildlife','Cafés','Local Fashion','Festivals','Hidden Gems','Architecture'
];

export default function InterestsScreen({ navigation }: any) {
  const { interests, setInterests } = useContext(InterestsContext);
  const [selected, setSelected] = useState<string[]>(interests || []);

  const toggle = (k: string) => setSelected(prev => (prev.includes(k) ? prev.filter(i => i !== k) : [...prev, k]));
  const canContinue = selected.length >= 5;

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 22, fontWeight: '800' }}>What are you into?</Text>
        <Text style={{ color: '#666', marginTop: 6 }}>Pick at least 5 to personalize your feed.</Text>

        <FlatList
          data={ALL}
          keyExtractor={(i) => i}
          numColumns={2}
          style={{ marginTop: 16 }}
          renderItem={({ item }) => {
            const on = selected.includes(item);
            return (
              <TouchableOpacity onPress={() => toggle(item)} style={{ flex: 1, margin: 6, padding: 12, borderRadius: 12, borderWidth: 1, borderColor: on ? '#111' : '#ddd', backgroundColor: on ? '#111' : '#fff' }}>
                <Text style={{ textAlign: 'center', color: on ? '#fff' : '#111', fontWeight: '600' }}>{item}</Text>
              </TouchableOpacity>
            );
          }}
        />

        <TouchableOpacity disabled={!canContinue} onPress={() => { setInterests(selected); navigation.goBack(); }} style={{ marginTop: 12, padding: 12, backgroundColor: canContinue ? '#007aff' : '#ccc', borderRadius: 10 }}>
          <Text style={{ color: '#fff', textAlign: 'center', fontWeight: '700' }}>{canContinue ? 'Save & Explore' : 'Pick at least 5'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
