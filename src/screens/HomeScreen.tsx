import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { CompositeNavigationProp } from '@react-navigation/native';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import Header from '../components/layouts/Header';
import Greeting from '../components/home/Greeting';
import SearchBar from '../components/home/SearchBar';
import ExploreCategories from '../components/home/categories/ExploreCategories';

import type { RootTabParamList } from '../navigation/navigation.types';
import type { RootStackParamList } from '../navigation/rootStack.types';
import type { GuideCategory } from '../types/guide';

type HomeNavigation = CompositeNavigationProp<
  BottomTabNavigationProp<RootTabParamList, 'Home'>,
  NativeStackNavigationProp<RootStackParamList>
>;

export default function HomeScreen() {
  const navigation = useNavigation<HomeNavigation>();

  const handleCategoryPress = (category: GuideCategory) => {
    navigation.navigate('GuideContent', {
      categoryId: category.id,
    });
  };

  const handleViewMore = () => {
    navigation.navigate('Learn');
  };

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <View style={styles.content}>
        <Header />
        <Greeting />
        <SearchBar />

        <ExploreCategories
          onCategoryPress={handleCategoryPress}
          onViewMore={handleViewMore}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    gap: 20,
  },
});
