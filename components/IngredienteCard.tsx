import { View, Text } from 'react-native';
import React from 'react';

interface Props {
  nombre: string;
  cantidad: string;
}

export default function IngredienteCard({ nombre, cantidad }: Props) {
  return (
    <View className="mb-3 flex-row items-center justify-between rounded-2xl border border-slate-50 bg-white px-4 py-4 shadow-sm">
      <View>
        <Text className="text-lg font-semibold text-slate-600">{nombre}</Text>
        <Text className="text-slate-400">{cantidad} Unidadesssssssssssss</Text>
      </View>
      <View className="rounded-full bg-red-500 px-3 py-1">
        <Text className="text-white">Estado Pendiente</Text>
      </View>
    </View>
  );
}
