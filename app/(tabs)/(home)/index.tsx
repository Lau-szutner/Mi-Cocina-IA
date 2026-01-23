// app/index.tsx
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Link } from 'expo-router';
// Ajustamos el path: como estamos en /app, subimos un nivel para ir a /components
import ItemCard from '../../components/ItemCard';
import TopBarTitle from '../../components/TopBarTitle';
import AddIngredient from '../../components/AddIngredient';

const MIS_PRODUCTOS = [
  { id: '1', nombre: 'Papas', cantidad: '1kg' },
  { id: '2', nombre: 'Tomates', cantidad: '2kg' },
  { id: '3', nombre: 'Carne', cantidad: '1kg' },
  { id: '4', nombre: 'Cebollas', cantidad: '2kg' },
];

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <TopBarTitle />
      <AddIngredient />

      <ScrollView className="px-6">
        <Text className="mb-4 text-sm font-bold uppercase tracking-widest text-slate-400">
          Inventario actual
        </Text>
        <Link href={'../components/receta'}>Pantalla </Link>

        {MIS_PRODUCTOS.map((item) => (
          <ItemCard key={item.id} name={item.nombre} cantidad={item.cantidad} state="Fresh" />
        ))}
        {/* <Link href="/receta" asChild>
          <TouchableOpacity className="mt-4 rounded-2xl bg-slate-800 p-5">
            <Text className="text-center text-lg font-bold text-white">
              🪄 Generar Receta con IA
            </Text>
          </TouchableOpacity>
        </Link> */}
      </ScrollView>
    </SafeAreaView>
  );
}
