import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { View } from 'moti';

export default function Logo() {
  return (
    <View from={{
      opacity: 0,
      translateY: -50,
    }}
      animate={{
        opacity: 1,
        translateY: 0,
      }}
      transition={{
        type: 'spring',
        duration: 850,
      }} style={styles.logoArea}>
      <Text style={styles.logo}>Receita Fácil</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logoArea: {
    backgroundColor: '#4CBE6C',
    alignSelf: 'flex-start',
    padding: 8,
    paddingLeft: 16,
    paddingRight: 20,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 32,
    marginBottom: 8
  },
  logo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF'
  }
})
