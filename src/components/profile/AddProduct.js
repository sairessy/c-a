import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Button, IconButton } from 'react-native-paper';
import CONFIG from '../../config';

export default function AddProduct({ toggleAddPopup }) {

	const [disciplina, setDisciplina] = useState('0');
	const [percent, setPercent] = useState('0')

	const addProduct = () => {
		const data = { disciplina, percent };
		console.log(data);
	}

	return (
		<View style={{ padding: 5 }}>
			<View>
				<Ionicons name='arrow-back' size={20} style={{ margin: 5 }}
					onPress={() => toggleAddPopup()}
				/>
			</View>

			<Picker
				style={{ padding: 10, marginTop: 5, borderWidth: 0, backgroundColor: '#eee', borderRadius: 3 }}
				selectedValue={disciplina}
				onValueChange={(itemValue, itemIndex) =>
					setDisciplina(itemValue)
				}>
				{CONFIG.disciplinas.map(d => (
					<Picker.Item label={d.label} value={d.id} key={d.id} />
				))}
			</Picker>

			<Picker
				style={{ padding: 10, marginTop: 5, borderWidth: 0, backgroundColor: '#eee', borderRadius: 3 }}
				selectedValue={percent}
				onValueChange={(itemValue, itemIndex) =>
					setPercent(itemValue)
				}>
				{CONFIG.percent.map(p => (
					<Picker.Item label={'Dominio de ' + p.label + '%'} value={p.id} key={p.id} />
				))}
			</Picker>

			<Button mode='contained' labelStyle={{ textTransform: 'capitalize' }}
				style={{ marginTop: 10, backgroundColor: CONFIG.colors.primary }}
				onPress={() => addProduct()}
			>
				Adicionar
			</Button>
		</View>
	);
}