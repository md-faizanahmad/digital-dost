import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  MessageCircle,
  Sparkles,
  Laptop,
  ShieldCheck,
  PlaySquare,
  Film,
} from 'lucide-react-native';

const categories = [
  { id: '1', name: 'YouTube', count: 8, icon: PlaySquare },
  { id: '2', name: 'Instagram', count: 6, icon: Film },
  { id: '3', name: 'WhatsApp Business', count: 5, icon: MessageCircle },
  { id: '4', name: 'AI Tools', count: 10, icon: Sparkles },
  { id: '5', name: 'Digital Skills', count: 7, icon: Laptop },
  { id: '6', name: 'Online Safety', count: 4, icon: ShieldCheck },
];

export default function LearnScreen() {
  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Learn</Text>
        <Text style={styles.subtitle}>
          Explore tutorials and build your digital skills.
        </Text>

        <Text style={styles.sectionTitle}>Browse Categories</Text>

        <View style={styles.grid}>
          {categories.map(({ id, name, count, icon: Icon }) => (
            <View key={id} style={styles.card}>
              <Icon size={24} color="#111111" strokeWidth={1.8} />
              <Text style={styles.categoryName}>{name}</Text>
              <Text style={styles.count}>{count} tutorials</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 32,
    paddingBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111111',
  },
  subtitle: {
    marginTop: 8,
    fontSize: 15,
    lineHeight: 22,
    color: '#666666',
  },
  sectionTitle: {
    marginTop: 28,
    marginBottom: 16,
    fontSize: 18,
    fontWeight: '600',
    color: '#111111',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 12,
  },
  card: {
    width: '48%',
    minHeight: 130,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  categoryName: {
    marginTop: 14,
    fontSize: 15,
    fontWeight: '600',
    color: '#111111',
  },
  count: {
    marginTop: 5,
    fontSize: 13,
    color: '#777777',
  },
});
