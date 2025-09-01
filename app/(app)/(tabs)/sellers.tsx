import { Link } from "expo-router";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SELLERS } from "../../../data/sellers";

export default function SellersPage() {
  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: "#fff" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 16 }}>
        Local Sellers
      </Text>

      <FlatList
        data={SELLERS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link
  href={{
    pathname: "/sellers/[id]",
    params: { id: item.id },
  }}
  asChild
>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#f9f9f9",
                borderRadius: 12,
                padding: 12,
                marginBottom: 12,
              }}
            >
              {item.image && (
                <Image
                  source={{ uri: item.image }}
                  style={{ width: 64, height: 64, borderRadius: 8, marginRight: 12 }}
                />
              )}
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 18, fontWeight: "600" }}>{item.name}</Text>
                {item.address && (
                  <Text style={{ color: "#666", marginTop: 2 }}>{item.address}</Text>
                )}
              </View>
            </TouchableOpacity>
          </Link>
        )}
      />
    </View>
  );
}
