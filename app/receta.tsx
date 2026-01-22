import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Receta() {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center bg-white p-6">
      <Text className="mb-4 text-2xl font-bold">Receta sugerida</Text>
      <Text className="text-center text-slate-600">
        Estamos analizando tus ingredientes para crear algo delicioso...
      </Text>

      <TouchableOpacity
        onPress={() => router.back()}
        className="mt-10 rounded-2xl bg-orange-500 p-4">
        <Text className="text-lg font-bold text-white">Volver</Text>
      </TouchableOpacity>
    </View>
  );
}
