import { View, Text, Pressable } from 'react-native';
import { useState } from 'react';

interface Props {
  title: string;
  options: Record<string, string>;
  value: string;
  onChange: (key: string) => void;
}

const ContextSelector = ({ title, options, value, onChange }: Props) => {
  return (
    <View className="mt-20 px-4">
      <Text className="mb-5 text-xl font-bold">{title}</Text>
      <View className="flex-row justify-evenly overflow-hidden rounded-md border border-stone-300  bg-white shadow-2xl">
        {Object.entries(options).map(([key, label]) => (
          <Pressable
            key={key}
            onPress={() => onChange(key)}
            className={`flex-1 items-center py-3 ${value === key ? 'bg-[#f97316]' : 'bg-white'}`}>
            <Text className={`font-medium ${value === key ? 'text-white' : 'text-black'}`}>
              {label}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default ContextSelector;
