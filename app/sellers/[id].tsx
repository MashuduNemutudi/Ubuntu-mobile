import { useLocalSearchParams } from "expo-router";
import { Image, ScrollView, Text, View } from "react-native";
import { SELLERS } from "../../data/sellers";

export default function SellerDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const seller = SELLERS.find((s) => s.id === id);

  if (!seller) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Seller not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{ flex: 1, padding: 16, backgroundColor: "#fff" }}>
      {seller.image && (
        <Image
          source={{ uri: seller.image }}
          style={{ width: "100%", height: 200, borderRadius: 12, marginBottom: 16 }}
        />
      )}

      <Text style={{ fontSize: 28, fontWeight: "bold" }}>{seller.name}</Text>

      {seller.bio && (
        <Text style={{ marginTop: 8, fontSize: 16, lineHeight: 22, color: "#444" }}>
          {seller.bio}
        </Text>
      )}

      {seller.address && (
        <Text style={{ marginTop: 16, fontWeight: "600" }}>📍 {seller.address}</Text>
      )}

      {seller.phone && <Text style={{ marginTop: 4 }}>📞 {seller.phone}</Text>}
      {seller.email && <Text style={{ marginTop: 4 }}>✉️ {seller.email}</Text>}

      {seller.placeIds?.length ? (
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>Places linked</Text>
          {seller.placeIds.map((pid) => (
            <Text key={pid} style={{ marginTop: 4 }}>
              • {pid}
            </Text>
          ))}
        </View>
      ) : null}
    </ScrollView>
  );
}
