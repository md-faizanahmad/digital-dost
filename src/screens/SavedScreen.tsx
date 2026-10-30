import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Bookmark, Plus, Folder, ChevronRight } from 'lucide-react-native';

const savedTutorials = [
  { id: '1', title: 'Create a YouTube Channel', category: 'YouTube' },
  { id: '2', title: 'Write Better Prompts with ChatGPT', category: 'AI Tools' },
];

const lists = [
  { id: '1', name: 'Learn Later', count: 4 },
  { id: '2', name: 'My Business', count: 3 },
];

export default function SavedScreen() {
  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Saved</Text>
        <Text style={styles.subtitle}>Your personal learning collection.</Text>

        {/* Lists */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>My Lists</Text>
          <Pressable style={styles.createButton}>
            <Plus size={16} color="#FFFFFF" />
            <Text style={styles.createButtonText}>Create List</Text>
          </Pressable>
        </View>

        {lists.map(list => (
          <Pressable key={list.id} style={styles.listRow}>
            <View style={styles.listIcon}>
              <Folder size={20} color="#333333" />
            </View>

            <View style={styles.listInfo}>
              <Text style={styles.listName}>{list.name}</Text>
              <Text style={styles.listCount}>{list.count} tutorials</Text>
            </View>

            <ChevronRight size={20} color="#888888" />
          </Pressable>
        ))}

        {/* Saved Tutorials */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Saved Tutorials</Text>

          {savedTutorials.map(tutorial => (
            <Pressable key={tutorial.id} style={styles.tutorialRow}>
              <Bookmark size={20} color="#333333" />

              <View style={styles.tutorialInfo}>
                <Text style={styles.tutorialTitle}>{tutorial.title}</Text>
                <Text style={styles.tutorialCategory}>{tutorial.category}</Text>
              </View>

              <ChevronRight size={20} color="#888888" />
            </Pressable>
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
    color: '#666666',
  },
  sectionHeader: {
    marginTop: 28,
    marginBottom: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111111',
  },
  createButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 9,
    paddingHorizontal: 12,
    backgroundColor: '#111111',
  },
  createButtonText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  listRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E5E5E5',
  },
  listIcon: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F4F6',
  },
  listInfo: {
    flex: 1,
    marginLeft: 12,
  },
  listName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111111',
  },
  listCount: {
    marginTop: 4,
    fontSize: 13,
    color: '#777777',
  },
  section: {
    marginTop: 32,
  },
  tutorialRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E5E5E5',
  },
  tutorialInfo: {
    flex: 1,
    marginLeft: 12,
  },
  tutorialTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#222222',
  },
  tutorialCategory: {
    marginTop: 4,
    fontSize: 13,
    color: '#777777',
  },
});
