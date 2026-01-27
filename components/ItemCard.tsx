import { View, Text } from 'react-native';
import React from 'react';

type ItemState = 'Fresh' | 'Urgent' | 'Frozen' | 'Expired';

interface Props {
  name: string;
  cantidad: string;
  state?: ItemState;
}

export default function ItemCard({ name, cantidad, state }: Props) {
  const getStateColor = (state?: ItemState) => {
    switch (state) {
      case 'Fresh':
        return 'bg-blue-500';
      case 'Urgent':
        return 'bg-orange-500';
      case 'Frozen':
        return 'bg-cyan-500';
      case 'Expired':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <View className="mb-3 flex-row items-center justify-between rounded-2xl border border-slate-50 bg-white px-4 py-4 shadow-xl">
      <View>
        <Text className="text-lg font-semibold text-slate-600">{name}</Text>
        <Text className="text-slate-400">{cantidad} Unidades</Text>
      </View>

      {state && (
        <View className={`rounded-full ${getStateColor(state)} px-3 py-1`}>
          <Text className="font-medium text-white">{state}</Text>
        </View>
      )}
    </View>
  );
}
