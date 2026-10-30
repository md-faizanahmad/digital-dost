import { Text, View } from 'react-native';
import { Guide } from '../../../types/guide';
import { GuideLanguage } from '../../../shared/TranslateButton';
import { guideContentStyles } from '../../../styles/guideContent.styles';
import GuideDetails from './GuideDetails';
import EmptyState from '../../../shared/EmptyState';

type CategoryGuidesContentProps = {
  guides: Guide[];
  language: GuideLanguage;
};

export default function CategoryGuidesContent({
  guides,
  language,
}: CategoryGuidesContentProps) {
  if (!guides.length) {
    return (
      <EmptyState
        title="No guides available yet"
        description="Guides for this category will appear here when available."
      />
    );
  }

  return (
    <View>
      <Text style={guideContentStyles.listSubtitle}>
        {guides.length} {guides.length === 1 ? 'guide' : 'guides'} available
      </Text>

      <View style={guideContentStyles.categoryList}>
        {guides.map(guide => (
          <GuideDetails key={guide.id} guide={guide} language={language} />
        ))}
      </View>
    </View>
  );
}
