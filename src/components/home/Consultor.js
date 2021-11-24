import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Button, IconButton } from 'react-native-paper';

export default function Header() {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 10 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Ionicons name='person-circle' size={40} color='#ddd' />
      </View>
      <View style={{ backgroundColor: '#f9f9f9', flex: 1, padding: 5, borderRadius: 5 }}>
        <Text>Sairesse Victorino</Text>
        <Text style={{ fontSize: 11 }}>Matemática <Text style={{ fontSize: 9 }}>UEM</Text></Text>
        <Text style={{ fontSize: 11 }}>Liberdade</Text>
        <View style={{ flexDirection: 'row' }}>
          <IconButton icon='whatsapp' color='#666' size={15} />
          <IconButton icon='message' color='#666' size={15} />
          <IconButton icon='phone' color='#666' size={15} />
        </View>
      </View>
      <View>
        <MaterialIcons name='chevron-right' color='#666' size={20} />
      </View>
    </View>
  );
}