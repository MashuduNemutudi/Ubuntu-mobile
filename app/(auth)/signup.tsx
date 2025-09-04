// app/(auth)/signup.tsx
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"tourist" | "business" | null>(null);

  return (
    <ImageBackground
      source={require("@/assets/images/AI_tour.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay} />

      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.subtitle}>
          Create an account to explore Ubuntu Explorer
        </Text>

        {/* Input fields */}
        <TextInput
          placeholder="Full Name"
          placeholderTextColor="#ccc"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
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

        {/* Role selection */}
        <View style={styles.roleContainer}>
          <TouchableOpacity
            style={[styles.roleBtn, role === "tourist" && styles.roleSelected]}
            onPress={() => setRole("tourist")}
          >
            <Text style={styles.roleText}>Tourist</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.roleBtn, role === "business" && styles.roleSelected]}
            onPress={() => setRole("business")}
          >
            <Text style={styles.roleText}>Business Owner</Text>
          </TouchableOpacity>
        </View>

        {/* Signup Button */}
        <TouchableOpacity
          style={styles.primaryBtn}
          onPress={() => {
            if (!role) {
              alert("Please select a role");
              return;
            }
            if (role === "tourist") {
              router.push("../tourist/dashboard");
            } else {
              router.push("../business/dashboard");
            }
          }}
        >
          <Text style={styles.btnText}>Sign Up</Text>
        </TouchableOpacity>

        {/* Already have an account */}
        <TouchableOpacity onPress={() => router.push("/login")}>
          <Text style={styles.loginText}>
            Already have an account?{" "}
            <Text style={styles.loginLink}>Login</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, justifyContent: "center" },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
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

  roleContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
    width: "85%",
  },
  roleBtn: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: "rgba(255,255,255,0.6)",
    alignItems: "center",
  },
  roleSelected: {
    backgroundColor: "#FF914D",
  },
  roleText: {
    color: "#000",
    fontWeight: "600",
  },
});
