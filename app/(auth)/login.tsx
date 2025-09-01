// app/(auth)/login.tsx
import { Link } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // TODO: replace with real auth (Firebase, Supabase, etc.)
    console.log("Logging in:", email, password);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "700", marginBottom: 24 }}>
        Welcome Back 👋
      </Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 12,
          borderRadius: 8,
          marginBottom: 16,
        }}
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 12,
          borderRadius: 8,
          marginBottom: 24,
        }}
      />

      <TouchableOpacity
        onPress={handleLogin}
        style={{
          backgroundColor: "#007bff",
          padding: 14,
          borderRadius: 12,
          marginBottom: 16,
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "600", textAlign: "center" }}>
          Log In
        </Text>
      </TouchableOpacity>

      <Text style={{ textAlign: "center", marginTop: 12 }}>
        Don’t have an account?{" "}
        <Link href="/signup" style={{ color: "#007bff", fontWeight: "600" }}>
          Sign Up
        </Link>
      </Text>
    </View>
  );
}
