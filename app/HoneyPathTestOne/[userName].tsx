import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { Link } from 'expo-router';
export default function HoneyPathTestOne() {
  const { userName } = useLocalSearchParams();

  return (
    <View className="bg-[#F8FAFC] p-5">
      <Text className="text-3xl">Hola {userName}!!!</Text>

      <View className="mt-10 gap-5">
        <View className="h-fit w-full rounded-md border border-stone-300  bg-white p-2 text-xl shadow-2xl">
          ¿Que comemos?
        </View>
        <Link href="./context" asChild>
          <Pressable>
            <Text className=" h-fit rounded-md bg-[#F97316] p-2 text-center text-2xl text-white">
              Cocinemos
            </Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}
