// app/(tabs)/home.tsx
import { Link } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#fff" }}
      contentContainerStyle={{ padding: 20 }}
    >
      {/* Logo */}
      <View style={{ alignItems: "center", marginBottom: 24 }}>
        <Image
          source={require("@/assets/images/ubuntu-logo.jpg")}
          style={{ width: 100, height: 100, marginBottom: 12 }}
          resizeMode="contain"
        />
        <Text style={{ fontSize: 22, fontWeight: "700" }}>
          Ubuntu Explorer
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: "#555",
            marginTop: 8,
            textAlign: "center",
          }}
        >
          Your gateway to authentic experiences across G20 countries. Discover
          hidden gems and vibrant cultures.
        </Text>
      </View>

      {/* Quick Nav */}
      <View style={{ gap: 12 }}>
        <Link href="/interests" asChild>
          <TouchableOpacity
            style={{
              backgroundColor: "#007bff",
              padding: 14,
              borderRadius: 12,
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "600", textAlign: "center" }}>
              🎯 Select Interests
            </Text>
          </TouchableOpacity>
        </Link>

        <Link href="/explore" asChild>
          <TouchableOpacity
            style={{
              backgroundColor: "#28a745",
              padding: 14,
              borderRadius: 12,
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "600", textAlign: "center" }}>
              🔎 Explore
            </Text>
          </TouchableOpacity>
        </Link>

        <Link href="/countries" asChild>
          <TouchableOpacity
            style={{
              backgroundColor: "#ffc107",
              padding: 14,
              borderRadius: 12,
            }}
          >
            <Text style={{ color: "#000", fontWeight: "600", textAlign: "center" }}>
              🌍 Countries
            </Text>
          </TouchableOpacity>
        </Link>

        <Link href="/sellers" asChild>
          <TouchableOpacity
            style={{
              backgroundColor: "#17a2b8",
              padding: 14,
              borderRadius: 12,
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "600", textAlign: "center" }}>
              🛍️ Sellers
            </Text>
          </TouchableOpacity>
        </Link>

        <Link href="/map" asChild>
          <TouchableOpacity
            style={{
              backgroundColor: "#6f42c1",
              padding: 14,
              borderRadius: 12,
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "600", textAlign: "center" }}>
              🗺️ Map
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ScrollView>
  );
}
