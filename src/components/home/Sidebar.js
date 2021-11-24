import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Button, IconButton } from 'react-native-paper';
import CONFIG from '../../config';

export default function Header({ goToScreen, show, toggleSidebar }) {

	if (!show) {
		return null;
	} else {
		return (
			<View style={{
				flex: 1, height: '100%',
				borderLeftWidth: 1,
				borderLeftColor: '#eee',
				width: '85%', backgroundColor: '#fff', position: 'absolute',
				top: 0, right: 0
			}}
			>
				<TouchableOpacity style={{ height: 140, backgroundColor: '#f9f9f9', borderBottomWidth: 1, borderBottomColor: '#f1f1f1', alignItems: 'center', justifyContent: 'center' }}
					onPress={() => { toggleSidebar(); goToScreen(3); }}
				>
					<Ionicons name='ios-person-circle-sharp' color={CONFIG.colors.primary} size={50} />
				</TouchableOpacity>
				<Button mode='contained' labelStyle={{ textTransform: 'capitalize', color: CONFIG.colors.primary }} icon='home'
					style={{ backgroundColor: '#d3d3ff', margin: 5, alignItems: 'flex-start' }}
					onPress={() => { }}
				>
					Home
				</Button>

				<Button mode='contained' labelStyle={{ textTransform: 'capitalize', color: CONFIG.colors.primary }} icon='tools'
					style={{ backgroundColor: '#d3d3ff', margin: 5, alignItems: 'flex-start' }}
					onPress={() => { }}
				>
					Configurações
				</Button>

				<Button mode='contained' labelStyle={{ textTransform: 'capitalize', color: CONFIG.colors.primary }} icon='phone'
					style={{ backgroundColor: '#d3d3ff', margin: 5, alignItems: 'flex-start' }}
					onPress={() => { }}
				>
					Contacte-nos
				</Button>
			</View>
		);
	}
}