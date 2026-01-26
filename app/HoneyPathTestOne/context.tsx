import { View, Text } from 'react-native';
import React from 'react';
import ContextSelector from 'components/HoneyPathTestOne/ContextSelector';
const context = () => {
  return (
    <View className="bg-[#F8FAFC] p-5">
      <Text className="text-3xl font-bold">Contexto rápido</Text>
      <ContextSelector
        title="Tiempo de preparacion"
        options={{
          quick: 'Rápido',
          home: 'Estandar',
          comfort: 'Sin apuro',
        }}
      />
      <ContextSelector
        title="Tipo de comida"
        options={{
          quick: 'Saludable',
          home: 'Clasica',
          comfort: 'Gustoso',
        }}
      />
      <ContextSelector
        title="Prioridad de ingredientes"
        options={{
          quick: 'Por vencer',
          home: 'Congelados',
          comfort: 'Todo',
        }}
      />
    </View>
  );
};

export default context;
