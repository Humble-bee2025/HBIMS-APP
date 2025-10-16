import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useLanguage } from '../context/LanguageContext';

const WelcomeContent = () => {
  const { t } = useLanguage();

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>{t('greeting')}</Text>
      <Text style={styles.welcome}>{t('welcome')}</Text>
      <Text style={styles.subtitle}>{t('subtitle')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  greeting: {
    fontSize: 28,
    fontWeight: '800',
    color: '#F4C542',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  welcome: {
    fontSize: 22,
    fontWeight: '700',
    color: '#FFFFFF',
    marginTop: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#D6E4FF',
    marginTop: 6,
    textAlign: 'center',
  },
});

export default WelcomeContent;
