import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Button, TextInput } from 'react-native-paper';
import Logo from '../components/Logo';
import CONFIG from '../config';

export default function Login({ goToScreen, screenId }) {
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');

	const login = () => {
		const user = { email, pass };
		console.log(user);
	}

	if (screenId != 1) {
		return null;
	} else {
		return (
			<View style={{ flex: 1 }}>
				<View>
					<Ionicons name='arrow-back' size={20} style={{ margin: 5 }}
						onPress={() => goToScreen(0)}
					/>
				</View>
				<View style={{ padding: 10, justifyContent: 'center', flex: 1 }}>
					<View style={{ justifyContent: 'center', padding: 10 }}>
						<Logo justify={'center'} />
					</View>
					<TextInput activeOutlineColor={CONFIG.colors.primary} style={{ backgroundColor: '#fff', borderColor: CONFIG.colors.primary }} value={email} mode='outlined' placeholder='Email' label='Introduza o email' onChangeText={text => setEmail(text)} />
					<TextInput activeOutlineColor={CONFIG.colors.primary} style={{ backgroundColor: '#fff' }} value={pass} mode='outlined' placeholder='Senha' label='Introduza a senha' secureTextEntry={true} onChangeText={text => setPass(text)} />
					<Button mode='contained' labelStyle={{ textTransform: 'capitalize' }}
						style={{ marginTop: 10, backgroundColor: CONFIG.colors.primary }}
						onPress={() => login()}
					>
						Entrar
					</Button>

					<Button labelStyle={{ textTransform: 'capitalize', color: CONFIG.colors.primary }}
						style={{}}
						onPress={() => goToScreen(2)}
					>
						Cadastrar
					</Button>

					<Button labelStyle={{ textTransform: 'capitalize', color: CONFIG.colors.primary }}
						style={{}}
						onPress={() => goToScreen(4)}
					>
						Recuperar senha
					</Button>

				</View>
			</View>
		);
	}
}