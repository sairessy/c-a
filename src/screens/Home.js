import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/home/Header';
import Consultor from '../components/home/Consultor';
import { Button } from 'react-native-paper';

import Sidebar from '../components/home/Sidebar';

export default function Home({ screenId, goToScreen }) {
	const [showSidebar, setShowSidebar] = useState(false);

	const toggleSidebar = () => {
		setShowSidebar(!showSidebar);
	}

	if (screenId != 0) {
		return null;
	} else {
		return (
			<View style={{ flex: 1 }}>
				<Header goToScreen={goToScreen} toggleSidebar={toggleSidebar} show={showSidebar} />
				<ScrollView style={{ flex: 1 }}>
					{[0, 1, 2, 3, 4, 5, 6, 7].map(c => (
						<Consultor key={c} />
					))}
				</ScrollView>
				<Sidebar show={showSidebar} goToScreen={goToScreen} toggleSidebar={toggleSidebar} />
			</View>
		);
	}
}