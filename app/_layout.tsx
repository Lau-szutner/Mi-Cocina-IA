import { Stack } from 'expo-router';
import '../global.css';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}


// FALTA AGREGAR     "react-native-safe-area-context": "~5.6.0",
// EXPO-VECTOR-ICONS
