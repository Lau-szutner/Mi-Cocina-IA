import { useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';

export default function ItemDetail() {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Item ID: {id}</Text>
    </View>
  );
}
