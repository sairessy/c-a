import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Modal } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { IconButton } from 'react-native-paper';
import Disciplina from '../components/profile/Disciplina';
import AddProduct from '../components/profile/AddProduct';
import UpdateProfile from '../components/profile/UpdateProfile';
import CONFIG from '../config';

export default function Profile({ screenId, goToScreen }) {
	const [fullName, setFullName] = useState('');
	const [consultor, setConsultor] = useState({});

	const [showAddPopup, setShowAddPopup] = useState(false);
	const [showUpdateProfilePopup, setShowUpdateProfilePopup] = useState(false);

	const toggleAddPopup = () => {
		setShowAddPopup(!showAddPopup);
	}

	const toggleUpdateProfilePopup = () => {
		setShowUpdateProfilePopup(!showUpdateProfilePopup);
	}

	const logout = () => {
		goToScreen(0);
	}

	if (screenId != 3) {
		return null;
	} else {
		return (
			<View style={{ flex: 1, backgroundColor: '#fff' }}>
				<View style={{
					height: 130, backgroundColor: CONFIG.colors.primary,
					justifyContent: 'center', alignItems: 'center', borderBottomRightRadius: 10, borderBottomLeftRadius: 10,
				}}>
					<IconButton icon='arrow-left' color='#ddd' size={20} style={{ margin: 5, position: 'absolute', top: 0, left: 0 }}
						onPress={() => goToScreen(0)}
					/>
					<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', position: 'absolute', top: 0, right: 0 }}>
						<IconButton icon='plus' color='#ddd' size={20} style={{ margin: 5 }}
							onPress={() => toggleAddPopup()}
						/>
						<IconButton icon='pen' color='#ddd' size={20} style={{ margin: 5 }}
							onPress={() => toggleUpdateProfilePopup()}
						/>
						<Ionicons name='log-out' color='#ddd' size={20} style={{ margin: 5 }}
							onPress={() => logout()}
						/>
					</View>
					<View style={{ backgroundColor: '#aaa', borderRadius: 5, width: 40, height: 40, justifyContent: 'center', alignItems: 'center' }}>
						<Ionicons name='person' color='#eee' size={15} />
					</View>
					<Text style={{ color: '#fff', marginTop: 10, textTransform: 'capitalize' }}>{'Bernardo José Pica'}</Text>
					<Text style={{ color: '#fff', marginTop: 10, textTransform: 'capitalize', fontSize: 10 }}>{'Matemática'}</Text>
				</View>
				<ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
					<Disciplina />
				</ScrollView>

				<Modal
					animationType="slide"
					transparent={false}
					visible={showAddPopup}
					onRequestClose={() => {
						setShowAddPopup(!showAddPopup);
					}}
				>
					<AddProduct toggleAddPopup={toggleAddPopup} />
				</Modal>

				<Modal
					animationType="slide"
					transparent={false}
					visible={showUpdateProfilePopup}
					onRequestClose={() => {
						setShowUpdateProfilePopup(!showUpdateProfilePopup);
					}}
				>
					<UpdateProfile toggleUpdateProfilePopup={toggleUpdateProfilePopup} />
				</Modal>
			</View>
		);
	}
}