import { View, Text, Pressable } from 'react-native';
import React from 'react';

interface Props {
  title: string;
  options: Record<string, string>;
}

const ContextSelector = ({ title, options }: Props) => {
  return (
    <View className="mt-20">
      <Text className="mb-5 text-xl font-bold">{title}</Text>

      <View className=" flex h-fit w-full flex-row justify-evenly rounded-md border border-stone-300 bg-white p-2 text-xl shadow-2xl">
        {Object.entries(options).map(([key, value]) => (
          <Pressable key={key} className=" hover:bg-black" onPress={() => console.log('Hello')}>
            <Text>{value}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default ContextSelector;
