// app/(auth)/landing.tsx
import { useRouter } from "expo-router";
import React from "react";
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function LandingPage() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("@/assets/images/Rtourism-bg.jpg")} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay} />

      <View style={styles.container}>
        {/* Logo */}
        <Text style={styles.logo}>🌍 Ubuntu Explorer</Text>

        {/* Welcome Text */}
        <Text style={styles.title}>Welcome to Ubuntu Explorer</Text>
        <Text style={styles.subtitle}>
          Your gateway to authentic experiences across G20 countries
        </Text>

        {/* Buttons */}
        <TouchableOpacity
          style={styles.primaryBtn}
          onPress={() => router.push("/signup")}
        >
          <Text style={styles.btnText}>Create Account</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/login")}>
          <Text style={styles.loginText}>
            Already have an account? <Text style={styles.loginLink}>Login</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)", // dark overlay for readability
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#ddd",
    textAlign: "center",
    marginBottom: 40,
  },
  primaryBtn: {
    backgroundColor: "#FF914D",
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginBottom: 20,
    width: "80%",
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  loginText: {
    color: "#fff",
    fontSize: 14,
  },
  loginLink: {
    color: "#FF914D",
    fontWeight: "bold",
  },
});
