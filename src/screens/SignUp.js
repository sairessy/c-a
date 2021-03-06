import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Button, TextInput } from 'react-native-paper';
import Logo from '../components/Logo';
import CONFIG from '../config';

import { getDatabase, ref, onValue } from 'firebase/database';

export default function SignUp({ goToScreen, screenId }) {
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');
	const [cPass, setCPass] = useState('');

	const signup = () => {
		const user = {
			email,
			pass,
			institution: '0',
			img: {},
			level: '0',
			fullName: 'John Doe',
			course: '0',
			zone: '0',
			disciplinas: [{ disciplina: '0', percent: '0' }]
		};

		if (pass !== cPass) {
			alert('As senhas não coincidem!');
			return;
		}

		const db = getDatabase();
		const reference = ref(db, 'users/' + 'xv');
		onValue(reference, (snapshot) => {
			const highscore = snapshot.val().highscore;
			console.log("New high score: " + highscore);
		});
	}

	useEffect(() => {
		console.log(getDatabase);
	}, [])

	if (screenId != 2) {
		return null;
	} else {
		return (
			<View style={{ flex: 1 }}>
				<View>
					<Ionicons name='arrow-back' size={20} style={{ margin: 5 }}
						onPress={() => goToScreen(1)}
					/>
				</View>
				<View style={{ padding: 10, justifyContent: 'center', flex: 1 }}>
					<View style={{ justifyContent: 'center', padding: 10 }}>
						<Logo justify={'center'} />
					</View>
					<TextInput activeOutlineColor={CONFIG.colors.primary} style={{ backgroundColor: '#fff' }} value={email} mode='outlined' placeholder='Email' label='Introduza o email' onChangeText={text => setEmail(text)} />
					<TextInput activeOutlineColor={CONFIG.colors.primary} style={{ backgroundColor: '#fff' }} value={pass} mode='outlined' placeholder='Senha' label='Introduza a senha' secureTextEntry={true} onChangeText={text => setPass(text)} />
					<TextInput activeOutlineColor={CONFIG.colors.primary} style={{ backgroundColor: '#fff' }} value={cPass} mode='outlined' placeholder='Senha' label='Introduza novamente a senha' secureTextEntry={true} onChangeText={text => setCPass(text)} />
					<Button mode='contained' labelStyle={{ textTransform: 'capitalize' }}
						style={{ marginTop: 10, backgroundColor: CONFIG.colors.primary }}
						onPress={() => signup()}
					>
						Cadastrar
					</Button>
				</View>

			</View>
		);
	}
}