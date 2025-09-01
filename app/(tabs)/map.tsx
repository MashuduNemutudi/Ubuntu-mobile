// app/(tabs)/map.tsx
import { Platform, Text, View } from "react-native";

let MapView: any;
if (Platform.OS !== "web") {
  MapView = require("react-native-maps").default;
}

export default function MapScreen() {
  if (Platform.OS === "web") {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>🗺️ Maps are not supported on Web — run this app on a device.</Text>
      </View>
    );
  }

  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: -26.2041,
        longitude: 28.0473,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }}
    />
  );
}
