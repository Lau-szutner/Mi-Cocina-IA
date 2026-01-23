import { View, Text } from 'react-native';

export default function TopBarTitle() {
  return (
    <View className="border-b border-slate-300 bg-white px-6 py-8">
      <Text className="text-3xl font-black text-slate-800">Mi Cocina IA</Text>
      <Text className="text-base text-slate-500">¿Qué tenemos para cocinar hoy?</Text>
    </View>
  );
}
