import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#f97316', // orange-500
        tabBarStyle: { borderTopWidth: 1, borderTopColor: '#e2e8f0' },
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inventario',
          tabBarIcon: ({ color }) => <Ionicons name="basket" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="recipes"
        options={{
          title: 'Recetas',
          tabBarIcon: ({ color }) => <Ionicons name="restaurant" size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}
