import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

export default function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  
  const send = () => {
    if (input.trim()) {
      setMessages([...messages, { id: Date.now(), text: input, sender: 'user' }]);
      setTimeout(() => {
        setMessages(prev => [...prev, { id: Date.now()+1, text: 'Jian: ' + input, sender: 'jian' }]);
      }, 500);
      setInput('');
    }
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>简 Jian</Text>
      </View>
      <ScrollView style={styles.messages}>
        {messages.map(m => (
          <View key={m.id} style={[styles.bubble, m.sender === 'user' ? styles.userBubble : styles.jianBubble]}>
            <Text>{m.text}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputArea}>
        <TextInput 
          style={styles.input} 
          value={input} 
          onChangeText={setInput} 
          placeholder="Message..." 
        />
        <TouchableOpacity onPress={send} style={styles.sendBtn}>
          <Text>Send</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  header: { backgroundColor: '#1e3c72', padding: 20, alignItems: 'center' },
  title: { color: '#fff', fontSize: 24 },
  messages: { flex: 1, padding: 16 },
  bubble: { padding: 12, borderRadius: 16, marginBottom: 8, maxWidth: '80%' },
  userBubble: { alignSelf: 'flex-end', backgroundColor: '#2196F3' },
  jianBubble: { alignSelf: 'flex-start', backgroundColor: '#fff' },
  inputArea: { flexDirection: 'row', padding: 12, backgroundColor: '#fff' },
  input: { flex: 1, borderWidth: 1, borderColor: '#ddd', borderRadius: 20, paddingHorizontal: 16 },
  sendBtn: { marginLeft: 8, padding: 12, backgroundColor: '#2196F3', borderRadius: 20 }
});
