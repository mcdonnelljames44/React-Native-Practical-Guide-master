import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={ {padding: 50} }>
      <View style={ {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'} }>
        <TextInput 
          placeholder="Course Goal" 
          style={{width: '80%', height: 35, paddingHorizontal: 5, borderColor: 'black', borderWidth: 1}} 
        />
        <Button title="ADD" />
      </View>
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
