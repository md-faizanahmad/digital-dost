import { Text, View } from 'react-native';
import { guideContentStyles } from '../styles/guideContent.styles';

type EmptyStateProps = {
  title: string;
  description: string;
};

export default function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <View style={guideContentStyles.emptyContainer}>
      <Text style={guideContentStyles.emptyTitle}>{title}</Text>
      <Text style={guideContentStyles.emptyDescription}>{description}</Text>
    </View>
  );
}
