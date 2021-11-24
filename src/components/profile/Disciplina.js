import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { IconButton } from 'react-native-paper';

export default function Disciplina({ goToScreen }) {
  return (
    <View style={{ padding: 5, backgroundColor: '#fcfcfc', borderWidth: 1, borderColor: '#ddd', borderBottomColor: '#ccc', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 5, borderRadius: 5 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text>{'87% ' + 'Probabilidades e Estatistica'}</Text>
      </View>
      <View>
        <IconButton icon='delete' color='#666' size={20}
          onPress={() => { }}
        />
      </View>
    </View>
  );
}