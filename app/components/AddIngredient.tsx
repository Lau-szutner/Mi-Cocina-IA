import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';

export default function AddIngredient() {
  return (
    <View className="p-6">
      <View className="flex-row items-center rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
        <TextInput placeholder="Añade un ingrediente..." className="flex-1 px-4 py-3 text-lg" />
        <TouchableOpacity className="h-12 w-12 items-center justify-center rounded-xl bg-orange-500">
          <Text className="text-2xl font-bold text-white">+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
