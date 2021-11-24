import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';

// Screens
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import Profile from './src/screens/Profile';
import PasswordRecovery from './src/screens/PasswordRecovery';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXbhRYP1IBB4hEomxadny8-hHORzoZ4aY",
  authDomain: "consultor-academico.firebaseapp.com",
  projectId: "consultor-academico",
  storageBucket: "consultor-academico.appspot.com",
  messagingSenderId: "565004956088",
  appId: "1:565004956088:web:4ea0117c4d53bc0b475f4d"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

// Import Admin SDK
// const { getDatabase } = require('firebase-admin/database');

export default function App() {

  const [screenId, setScreenId] = useState(0);

  const goToScreen = (id) => {
    setScreenId(id);
  }

  return (
    <View style={{ flex: 1, paddingTop: Constants.statusbarHeight }}>
      <Home screenId={screenId} goToScreen={goToScreen} />
      <Login goToScreen={goToScreen} screenId={screenId} />
      <SignUp goToScreen={goToScreen} screenId={screenId} />
      <Profile goToScreen={goToScreen} screenId={screenId} />
      <PasswordRecovery goToScreen={goToScreen} screenId={screenId} />
    </View>
  );
}