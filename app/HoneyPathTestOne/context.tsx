import { View, Text, Pressable } from 'react-native';
import React from 'react';
import ContextSelector from 'components/HoneyPathTestOne/ContextSelector';
import { useState } from 'react';

const context = () => {
  let options = {
    timeOfPreparation: 'option1',
    typeOfFood: 'option1',
    priorityOfIngredientes: 'option1',
  };

  const [optionSelected, setOptionSelected] = useState(options);

  return (
    <View className="bg-[#F8FAFC] p-5">
      <Text className="text-3xl font-bold">Contexto rápido</Text>
      <ContextSelector
        title="Tiempo de preparación"
        options={{
          option1: 'Rápido',
          option2: 'Estándar',
          option3: 'Sin apuro',
        }}
        value={optionSelected.timeOfPreparation}
        onChange={(key) =>
          setOptionSelected({
            ...optionSelected,
            timeOfPreparation: key,
          })
        }
      />

      <ContextSelector
        title="Tipo de comida"
        options={{
          option1: 'Saludable',
          option2: 'Clasica',
          option3: 'Gustoso',
        }}
        value={optionSelected.typeOfFood}
        onChange={(key) =>
          setOptionSelected({
            ...optionSelected,
            typeOfFood: key,
          })
        }
      />

      <ContextSelector
        title="Prioridad de ingredientes"
        options={{
          option1: 'Por vencer',
          option2: 'Congelados',
          option3: 'Todo',
        }}
        value={optionSelected.priorityOfIngredientes}
        onChange={(key) =>
          setOptionSelected({
            ...optionSelected,
            priorityOfIngredientes: key,
          })
        }
      />
      <Pressable>
        <Text className=" h-fit rounded-md bg-[#F97316] p-2 text-center text-2xl text-white">
          Cocinemos
        </Text>
      </Pressable>
    </View>
  );
};

export default context;
