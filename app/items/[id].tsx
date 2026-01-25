import { View, Text } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';

export default function ItemDetail() {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Item detail with id {id}</Text>
    </View>
  );
}
