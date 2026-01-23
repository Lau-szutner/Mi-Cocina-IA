import { View, Text } from 'react-native';
import React from 'react';

interface Props {
  name: string;
  cantidad: string;
  state: 'Fresh' | 'Urgent' | 'Frozen' | 'Expired';
}

export default function ItemCard({ name, cantidad, state }: Props) {
  return (
    <View className="mb-3 flex-row items-center justify-between rounded-2xl border border-slate-50 bg-white px-4 py-4 shadow-sm">
      <View>
        <Text className="text-lg font-semibold text-slate-600">{name}</Text>
        <Text className="text-slate-400">{cantidad} Unidades</Text>
      </View>
      <View className="rounded-full bg-red-500 px-3 py-1">
        <Text className="text-white">{state}</Text>
      </View>
    </View>
  );
}
