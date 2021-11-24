import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { IconButton } from 'react-native-paper';
import Logo from '../Logo';
import CONFIG from '../../config';

export default function Header({ goToScreen, toggleSidebar, show }) {
  return (
    <View style={{ height: 50, backgroundColor: CONFIG.colors.primary, borderBottomWidth: 1, borderBottomColor: '#ccc', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <IconButton icon={show ? 'close' : 'menu'} color='#ddd' size={20} onPress={() => toggleSidebar()} />
        <View style={{ justifyContent: 'center', padding: 10 }}>
          <Logo justify={'left'} textColor='#ddd' />
        </View>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Ionicons name='log-in' size={25} color='#ddd'
          style={{ marginRight: 5 }}
          onPress={() => goToScreen(1)}
        />

        <MaterialIcons name='more-vert' size={20} color='#ddd'
          style={{ marginRight: 5 }}
        />
      </View>
    </View>
  );
}