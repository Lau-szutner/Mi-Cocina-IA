// app/index.tsx
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Link } from 'expo-router';
// Ajustamos el path: como estamos en /app, subimos un nivel para ir a /components
import ItemCard from '../components/ItemCard';
import TopBarTitle from '../components/TopBarTitle';
import AddIngredient from '../components/AddIngredient';

type ItemState = 'Fresh' | 'Urgent' | 'Frozen' | 'Expired';

const MIS_PRODUCTOS: Array<{ id: string; nombre: string; cantidad: string; state: ItemState }> = [
  { id: '1', nombre: 'Papas', cantidad: '1kg', state: 'Fresh' },
  { id: '2', nombre: 'Tomates', cantidad: '2kg', state: 'Urgent' },
  { id: '3', nombre: 'Carne', cantidad: '1kg', state: 'Frozen' },
  { id: '4', nombre: 'Cebollas', cantidad: '2kg', state: 'Expired' },
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

        {MIS_PRODUCTOS.map((item) => (
          <ItemCard key={item.id} name={item.nombre} cantidad={item.cantidad} state={item.state} />
        ))}

        <View className="place-items-center gap-5">
          <Link
            href="/profile"
            className=" align-items-center h-10 w-6/12 place-content-center rounded-md bg-slate-500 text-center text-white">
            Profile
          </Link>
          <Link
            href="/about"
            className=" align-items-center h-10 w-6/12 place-content-center rounded-md bg-slate-500 text-center text-white">
            about
          </Link>

          <Link
            href="/items"
            className=" align-items-center h-10 w-6/12 place-content-center rounded-md bg-slate-500 text-center text-white">
            Items
          </Link>

          <Link
            href="/HoneyPathTestOne/Lautaro"
            className=" align-items-center h-10 w-6/12 place-content-center rounded-md bg-slate-500 text-center text-white">
            HoneyPastTestOne
          </Link>
        </View>
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
