import React from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { useLanguage } from '../context/LanguageContext';
import { LANGUAGES } from '../i18n/translations';

const LanguageSelector = () => {
  const { language, setLanguage, t } = useLanguage();

  const renderItem = ({ item }) => {
    const isActive = item.code === language;

    return (
      <Pressable
        onPress={() => setLanguage(item.code)}
        style={[styles.languageButton, isActive && styles.activeLanguageButton]}
      >
        <View style={styles.languageHeader}>
          <Text style={styles.flag}>{item.flag}</Text>
          <Text style={styles.languageLabel}>{item.label}</Text>
        </View>
        <Text style={styles.nativeLabel}>{item.nativeLabel}</Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.prompt}>{t('chooseLanguage')}</Text>
      <FlatList
        data={LANGUAGES}
        keyExtractor={(item) => item.code}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={styles.column}
        contentContainerStyle={styles.listContent}
      />
      <Pressable style={styles.continueButton}>
        <Text style={styles.continueText}>{t('continue')}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 32,
  },
  prompt: {
    color: '#F4C542',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  listContent: {
    paddingBottom: 24,
  },
  column: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  languageButton: {
    flex: 1,
    backgroundColor: '#0D2A59',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 12,
    marginHorizontal: 4,
  },
  activeLanguageButton: {
    borderWidth: 2,
    borderColor: '#F4C542',
  },
  languageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  flag: {
    fontSize: 24,
    marginRight: 8,
  },
  languageLabel: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  nativeLabel: {
    color: '#D6E4FF',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'left',
  },
  continueButton: {
    backgroundColor: '#F4C542',
    borderRadius: 30,
    marginTop: 16,
    paddingVertical: 14,
  },
  continueText: {
    textAlign: 'center',
    color: '#06183A',
    fontSize: 18,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default LanguageSelector;
