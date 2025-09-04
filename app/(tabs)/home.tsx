import { Link, useLocalSearchParams } from "expo-router";
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Home() {
  const { role } = useLocalSearchParams<{ role?: string }>();

  return (
    <ImageBackground
      source={require("@/assets/images/tour3.jpg")}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      {/* Semi-transparent overlay for readability */}
      <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.35)" }}>
        <ScrollView contentContainerStyle={{ padding: 20, flexGrow: 1 }}>
          {/* Logo */}
          <View style={{ alignItems: "center", marginBottom: 24 }}>
            <Image
              source={require("@/assets/images/ubuntu-logo.jpg")}
              style={{ width: 100, height: 100, marginBottom: 12 }}
              resizeMode="contain"
            />
            <Text style={{ fontSize: 22, fontWeight: "700", color: "#fff" }}>
              Ubuntu Explorer
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: "#eee",
                marginTop: 8,
                textAlign: "center",
              }}
            >
              {role === "tourist"
                ? "🌍 Welcome Tourist! Discover hidden gems and vibrant cultures."
                : role === "business"
                ? "🏪 Welcome Business Owner! Share your local business with the world."
                : "Your gateway to authentic experiences across G20 countries. Discover hidden gems and vibrant cultures."}
            </Text>
          </View>

          {/* Quick Nav */}
          <View style={{ gap: 12 }}>
            <Link href="/interests" asChild>
              <TouchableOpacity
                style={{
                  backgroundColor: "rgba(0,123,255,0.85)",
                  padding: 14,
                  borderRadius: 12,
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "600",
                    textAlign: "center",
                  }}
                >
                  🎯 Select Interests
                </Text>
              </TouchableOpacity>
            </Link>

            <Link href="/explore" asChild>
              <TouchableOpacity
                style={{
                  backgroundColor: "rgba(40,167,69,0.85)",
                  padding: 14,
                  borderRadius: 12,
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "600",
                    textAlign: "center",
                  }}
                >
                  🔎 Explore
                </Text>
              </TouchableOpacity>
            </Link>

            <Link href="/countries" asChild>
              <TouchableOpacity
                style={{
                  backgroundColor: "rgba(255,193,7,0.85)",
                  padding: 14,
                  borderRadius: 12,
                }}
              >
                <Text
                  style={{
                    color: "#000",
                    fontWeight: "600",
                    textAlign: "center",
                  }}
                >
                  🌍 G20 Countries
                </Text>
              </TouchableOpacity>
            </Link>

            <Link href="/sellers" asChild>
              <TouchableOpacity
                style={{
                  backgroundColor: "rgba(23,162,184,0.85)",
                  padding: 14,
                  borderRadius: 12,
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "600",
                    textAlign: "center",
                  }}
                >
                  🛍️ Local Businesses
                </Text>
              </TouchableOpacity>
            </Link>

            <Link href="/map" asChild>
              <TouchableOpacity
                style={{
                  backgroundColor: "rgba(236, 45, 20, 0.85)",
                  padding: 14,
                  borderRadius: 12,
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "600",
                    textAlign: "center",
                  }}
                >
                  🗺️ Map
                </Text>
              </TouchableOpacity>
            </Link>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}
