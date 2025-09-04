// app/business/dashboard.tsx
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Tab = "Explore" | "BrowseBusinesses" | "MapSafety";

export default function BusinessDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>("Explore");

  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to log out?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Yes",
          style: "destructive",
          onPress: async () => {
            await AsyncStorage.removeItem("userRole");
            router.replace("/(auth)/login");
          },
        },
      ],
      { cancelable: true }
    );
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "Explore":
        return (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Explore Attractions</Text>
            <Text>- Table Mountain</Text>
            <Text>- Robben Island</Text>
            <Text>- Kruger National Park</Text>
          </View>
        );
      case "BrowseBusinesses":
        return (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Browse Local Businesses</Text>
            <Text>- Local Tour Companies</Text>
            <Text>- Hotels & Lodges</Text>
            <Text>- Restaurants & Cafes</Text>
          </View>
        );
      case "MapSafety":
        return (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>View Map & Safety Alerts</Text>
            <Text>- Traffic Alerts</Text>
            <Text>- Safety Notifications</Text>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* Side Tabs */}
      <View style={styles.sideMenu}>
        {["Explore", "BrowseBusinesses", "MapSafety"].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.menuItem, activeTab === tab && styles.menuItemActive]}
            onPress={() => setActiveTab(tab as Tab)}
          >
            <Text style={styles.menuText}>
              {tab === "Explore" && "🔎 Explore Attractions"}
              {tab === "BrowseBusinesses" && "🛍️ Browse Local Businesses"}
              {tab === "MapSafety" && "🗺️ View Map & Safety Alerts"}
            </Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={[styles.menuItem, styles.logoutBtn]} onPress={handleLogout}>
          <Text style={styles.menuText}>🚪 Logout</Text>
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.content}>{renderTabContent()}</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: "row" },
  sideMenu: {
    width: 180,
    backgroundColor: "#FF914D",
    paddingTop: 40,
    paddingHorizontal: 10,
    justifyContent: "flex-start",
  },
  menuItem: { paddingVertical: 15, paddingHorizontal: 10, borderRadius: 8, marginBottom: 10 },
  menuItemActive: { backgroundColor: "#fff" },
  menuText: { color: "#fff", fontWeight: "bold" },
  logoutBtn: { marginTop: 30, backgroundColor: "#ff5c5c" },
  content: { flexGrow: 1, padding: 20, backgroundColor: "#f0f0f0" },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
});
