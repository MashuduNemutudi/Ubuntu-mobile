// app/(auth)/login.tsx
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"tourist" | "business" | null>(null);

  // ✅ Auto-redirect if a role is already saved
  useEffect(() => {
    const checkRole = async () => {
      try {
        const savedRole = await AsyncStorage.getItem("userRole");
        if (savedRole === "tourist") {
          router.replace("/tourist/dashboard");
        } else if (savedRole === "business") {
          router.replace("/business/dashboard");
        }
      } catch (error) {
        console.error("Error reading role from storage:", error);
      }
    };
    checkRole();
  }, []);

  const handleLogin = async () => {
    if (!role) {
      alert("Please select a role");
      return;
    }

    try {
      // ✅ Save role persistently
      await AsyncStorage.setItem("userRole", role);

      // Navigate based on role
      if (role === "tourist") {
        router.replace("/tourist/dashboard");
      } else {
        router.replace("/business/dashboard");
      }
    } catch (error) {
      console.error("Error saving role:", error);
    }
  };

  return (
    <ImageBackground
      source={require("@/assets/images/AI_tour.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay} />

      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>Welcome back to Ubuntu Explorer</Text>

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

        <TouchableOpacity style={styles.primaryBtn} onPress={handleLogin}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/signup")}>
          <Text style={styles.loginText}>
            Don’t have an account? <Text style={styles.loginLink}>Sign Up</Text>
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
