import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { LanguageProvider } from './src/context/LanguageContext';
import LanguageSelector from './src/components/LanguageSelector';
import WelcomeContent from './src/components/WelcomeContent';

export default function App() {
  return (
    <LanguageProvider>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="light-content" />
        <View style={styles.container}>
          <WelcomeContent />
          <LanguageSelector />
        </View>
      </SafeAreaView>
    </LanguageProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#06183A',
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 32,
    backgroundColor: '#06183A',
  },
});
