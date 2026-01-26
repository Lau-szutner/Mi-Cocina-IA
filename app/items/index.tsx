import { View, Text } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
export default function Items() {
  return (
    <View>
      <Text className="text-center text-xl">Items detail</Text>

      <Link href="/items/1">Item 1</Link>
      <Link href="/items/2">Item 2</Link>
      <Link href="/items/3">Item 3</Link>
    </View>
  );
}
