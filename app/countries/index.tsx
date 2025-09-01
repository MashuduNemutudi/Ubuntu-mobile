// app/countries/index.tsx
import CountryCard from "@/components/CountryCard";
import { COUNTRIES } from "@/data/countries";
import { Link } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";


export default function CountriesIndex() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a G20 Country to Explore</Text>

<FlatList
        data={COUNTRIES.slice(0, 6)} // show 6 featured countries
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link href={`/countries/${item.id}`} asChild>
            <CountryCard
              name={item.name}
              emoji={item.emoji}
              description={item.description}
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
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
    textAlign: "center",
  },
});
