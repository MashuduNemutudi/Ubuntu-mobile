// app/(auth)/signup.tsx
import { Link } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    // TODO: replace with real signup
    console.log("Signing up:", name, email, password);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "700", marginBottom: 24 }}>
        Create Account ✨
      </Text>

      <TextInput
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 12,
          borderRadius: 8,
          marginBottom: 16,
        }}
      />

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
        onPress={handleSignup}
        style={{
          backgroundColor: "#28a745",
          padding: 14,
          borderRadius: 12,
          marginBottom: 16,
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "600", textAlign: "center" }}>
          Sign Up
        </Text>
      </TouchableOpacity>

      <Text style={{ textAlign: "center", marginTop: 12 }}>
        Already have an account?{" "}
        <Link href="/login" style={{ color: "#28a745", fontWeight: "600" }}>
          Log In
        </Link>
      </Text>
    </View>
  );
}
