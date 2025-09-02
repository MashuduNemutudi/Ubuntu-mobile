import { db } from "@/firebaseConfig";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { collection, CollectionReference, DocumentData, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Platform, Text, TouchableOpacity, View } from "react-native";

type Hotspot = {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  status: "safe" | "caution" | "danger";
  alert?: string;
  crowdScore?: number;
};

let MapView: any, Marker: any, Callout: any;
if (Platform.OS !== "web") {
  MapView = require("react-native-maps").default;
  Marker = require("react-native-maps").Marker;
  Callout = require("react-native-maps").Callout;
}

export default function MapScreen() {
  const router = useRouter();
  const [hotspots, setHotspots] = useState<Hotspot[]>([]);

  // Firestore subscription
  useEffect(() => {
    const hotspotsCollection = collection(db, "hotspots") as CollectionReference<DocumentData>;
    const unsub = onSnapshot(hotspotsCollection, (snapshot) => {
      const data = snapshot.docs.map(
        (doc) => ({ id: doc.id, ...doc.data() } as Hotspot)
      );
      setHotspots(data);
    });

    return () => unsub();
  }, []);

  // Helper function for marker colors
  const getPinColor = (alert?: string) => {
    if (!alert) return "green";
    if (alert.includes("🚨")) return "red";
    if (alert.includes("⚠️")) return "orange";
    return "green";
  };

  // Web fallback (shows text instead of map)
  if (Platform.OS === "web") {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>🗺️ Maps are not supported on Web — run this app on a device.</Text>
        {hotspots.map((spot: Hotspot) => (
          <Text key={spot.id}>
            {spot.name} - {spot.status} {spot.alert ? `(${spot.alert})` : ""}
          </Text>
        ))}
      </View>
    );
  }

  // Native (iOS/Android) map
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        style={{
          position: "absolute",
          top: 50,
          left: 20,
          zIndex: 1,
          backgroundColor: "rgba(255,255,255,0.8)",
          padding: 8,
          borderRadius: 50,
        }}
        onPress={() => router.back()}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: -26.2041,
          longitude: 28.0473,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        {hotspots.map((spot: Hotspot) => (
          <Marker
            key={spot.id}
            coordinate={{
              latitude: spot.latitude,
              longitude: spot.longitude,
            }}
            title={spot.name}
            pinColor={getPinColor(spot.alert)}
          >
            <Callout>
              <View style={{ padding: 8 }}>
                <Text style={{ fontWeight: "bold" }}>{spot.name}</Text>
                <Text>{spot.alert}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
}
