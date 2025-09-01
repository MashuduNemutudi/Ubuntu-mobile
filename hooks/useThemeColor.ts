import { useColorScheme } from "react-native";

// Optional: define a theme color palette
const lightColors = {
  text: "#000",
  background: "#fff",
  card: "#f5f5f5",
};

const darkColors = {
  text: "#fff",
  background: "#000",
  card: "#1c1c1c",
};

export function useThemeColor(
  colorName: keyof typeof lightColors,
  customColors?: { light?: string; dark?: string }
) {
  const theme = useColorScheme() || "light";

  if (theme === "light") {
    return customColors?.light ?? lightColors[colorName];
  } else {
    return customColors?.dark ?? darkColors[colorName];
  }
}
