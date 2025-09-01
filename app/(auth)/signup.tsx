// app/(auth)/signup.tsx
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ImageBackground
      source={require("@/assets/images/Rtourism-bg.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay} />

      <View style={styles.container}>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>Join Ubuntu Explorer today</Text>

        <TextInput
          placeholder="Email"
          placeholderTextColor="#ccc"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#ccc"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />

        <TouchableOpacity
          style={styles.primaryBtn}
          onPress={() => router.push("/(tabs)/home")}
        >
          <Text style={styles.btnText}>Sign Up</Text>
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
  background: { flex: 1, justifyContent: "center" },
  overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: "rgba(0,0,0,0.5)" },
  container: { flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 20 },
  title: { fontSize: 28, fontWeight: "bold", color: "#fff", marginBottom: 10 },
  subtitle: { fontSize: 16, color: "#ddd", marginBottom: 30 },
  input: {
    backgroundColor: "rgba(255,255,255,0.9)",
    width: "85%",
    borderRadius: 12,
    padding: 14,
    marginBottom: 15,
    fontSize: 16,
  },
  primaryBtn: {
    backgroundColor: "#FF914D",
    paddingVertical: 14,
    borderRadius: 30,
    width: "85%",
    alignItems: "center",
    marginBottom: 20,
  },
  btnText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  loginText: { color: "#fff", fontSize: 14 },
  loginLink: { color: "#FF914D", fontWeight: "bold" },
});
