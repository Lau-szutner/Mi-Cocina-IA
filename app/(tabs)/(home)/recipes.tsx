import { View, Text, SafeAreaView } from 'react-native';

export default function RecipesScreen() {
  return (
    <SafeAreaView className="flex-1 bg-slate-50 p-6">
      <Text className="text-3xl font-black text-slate-800">Recetas Guardadas</Text>
      <Text className="mt-2 text-slate-500">Aquí aparecerán tus creaciones con IA.</Text>
    </SafeAreaView>
  );
}
