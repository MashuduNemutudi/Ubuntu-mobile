
import CountryCard from "@/components/CountryCard";
import { COUNTRIES } from "@/data/countries";
import { Link } from "expo-router";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function CountriesIndex() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a G20 Country to Explore</Text>
      <Text style={styles.subtitle}>
        Discover authentic experiences across all G20 nations
      </Text>

      <FlatList
        data={COUNTRIES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link href={`/countries/${item.slug}`} asChild>
            <CountryCard
              name={item.name}
              emoji={item.emoji}
              description={item.intro}
            />
          </Link>
        )}
        contentContainerStyle={{ paddingVertical: 12 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  title: { fontSize: 18, fontWeight: "700", marginBottom: 4, textAlign: "center" },
  subtitle: { fontSize: 14, color: "#666", marginBottom: 12, textAlign: "center" },
});
