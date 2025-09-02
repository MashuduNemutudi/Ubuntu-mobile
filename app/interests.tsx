import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React, { useContext, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "../components/Header";
import { InterestsContext } from "../contexts/InterestsContext";

const ALL = [
  "Street Food","Markets","Museums","Live Music","Hiking","Beaches","Nightlife",
  "Art","History","Wildlife","Cafés","Local Fashion","Festivals","Hidden Gems",
  "Architecture","Photography","Cooking Classes","Wine Tasting","Adventure Sports",
  "Traditional Dance","Handicrafts","Wellness & Spas","Temples","Mountains",
  "Local Tours","Food Tours","Camping","Cultural Shows","Shopping Malls",
  "Modern Art","Aquariums","Zoos","Botanical Gardens","Street Performances"
];

export default function InterestsScreen() {
  const { interests, setInterests } = useContext(InterestsContext);
  const [selected, setSelected] = useState<string[]>(interests || []);
  const router = useRouter();

  const toggle = (item: string) =>
    setSelected(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );

  const canContinue = selected.length >= 5;

  const handleContinue = async () => {
    try {
      // Save to Context
      setInterests(selected);

      // Persist to AsyncStorage
      await AsyncStorage.setItem("userInterests", JSON.stringify(selected));

      // Navigate to Explore screen
      router.push("/explore");
    } catch (error) {
      console.error("Error saving interests:", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <FlatList
        data={ALL}
        keyExtractor={item => item}
        numColumns={2}
        contentContainerStyle={{ padding: 16, paddingBottom: 100 }}
        renderItem={({ item }) => {
          const isSelected = selected.includes(item);
          return (
            <TouchableOpacity
              onPress={() => toggle(item)}
              style={[
                styles.item,
                { backgroundColor: isSelected ? "#007aff" : "#fff", borderColor: isSelected ? "#007aff" : "#ddd" }
              ]}
            >
              <Text style={{ color: isSelected ? "#fff" : "#111", fontWeight: "600", textAlign: "center" }}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        }}
      />

      {/* Sticky bottom button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          disabled={!canContinue}
          onPress={handleContinue}
          style={[styles.button, { backgroundColor: canContinue ? "#007aff" : "#ccc" }]}
        >
          <Text style={styles.buttonText}>
            {canContinue ? "Save & Explore" : "Pick at least 5"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5" },
  item: {
    flex: 1,
    margin: 6,
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    left: 16,
    right: 16,
  },
  button: {
    padding: 14,
    borderRadius: 12,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
    textAlign: "center",
  },
});
