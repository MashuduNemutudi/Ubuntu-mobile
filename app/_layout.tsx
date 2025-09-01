// app/_layout.tsx
import { Stack, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";


// Fake auth (later connect to real auth or AsyncStorage)
const useAuth = () => {
  const [loading, setLoading] = useState(true);
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    // simulate loading saved session
    setTimeout(() => {
      setSignedIn(false); // 👈 change to true if already logged in
      setLoading(false);
    }, 1000);
  }, []);

  return { loading, signedIn };
};

export default function RootLayout() {
  const { loading, signedIn } = useAuth();
  const nav = useRouter();

  useEffect( () => {
    if(!loading){
      if(!signedIn){
        nav.replace('/(auth)/login');       
      }else{
        nav.replace('../');        
      }  
    }
    
  }, [loading, signedIn]);
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
     
        // Protected app
        <Stack.Screen name="(app)" />
     
        // Auth flow
        <Stack.Screen name="(auth)" />
     
    </Stack>
  );
}
