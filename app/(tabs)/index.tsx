// app/index.tsx
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Link } from 'expo-router';
// Ajustamos el path: como estamos en /app, subimos un nivel para ir a /components
import IngredienteCard from '../../components/IngredienteCard';

const MIS_PRODUCTOS = [
  { id: '1', nombre: 'Papas', cantidad: '1kg' },
  { id: '2', nombre: 'Cebollas', cantidad: '2kg' },
];

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      {/* 2. Cabecera (Header) */}
      <View className="border-b border-slate-300 bg-white px-6 py-8">
        <Text className="text-3xl font-black text-slate-800">Mi Cocina IA</Text>
        <Text className="text-base text-slate-500">¿Qué tenemos para cocinar hoy?</Text>
      </View>

      <View className="mx-5 my-3 flex-row rounded bg-slate-300 p-4">
        <Text>Hola Lautaro</Text>
      </View>

      <View className="p-6">
        <View className="flex-row items-center rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
          <TextInput placeholder="Añade un ingrediente..." className="flex-1 px-4 py-3 text-lg" />
          <TouchableOpacity className="h-12 w-12 items-center justify-center rounded-xl bg-orange-500">
            <Text className="text-2xl font-bold text-white">+</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* 4. Lista de ejemplo */}
      <ScrollView className="px-6">
        <Text className="mb-4 text-sm font-bold uppercase tracking-widest text-slate-400">
          Inventario actual
        </Text>

        {/* Card de ejemplo que tenías fija */}
        <View className="mb-3 flex-row items-center justify-between rounded-2xl bg-white p-4 shadow-sm">
          <View>
            <Text className="text-lg font-semibold text-slate-700">Tomates</Text>
            <Text className="text-slate-400">3 unidades</Text>
          </View>
          <View className="rounded-full bg-orange-100 px-3 py-1">
            <Text className="font-bold text-orange-600">Fresco</Text>
          </View>
        </View>

        {MIS_PRODUCTOS.map((item) => (
          <IngredienteCard key={item.id} nombre={item.nombre} cantidad={item.cantidad} />
        ))}
        <Link href="/receta" asChild>
          <TouchableOpacity className="mt-4 rounded-2xl bg-slate-800 p-5">
            <Text className="text-center text-lg font-bold text-white">
              🪄 Generar Receta con IA
            </Text>
          </TouchableOpacity>
        </Link>
      </ScrollView>
    </SafeAreaView>
  );
}
