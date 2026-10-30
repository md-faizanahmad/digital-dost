import { Text, View } from 'react-native';
import { Guide } from '../../../types/guide';
import { GuideLanguage } from '../../../shared/TranslateButton';
import { guideContentStyles } from '../../../styles/guideContent.styles';
import GuideDetails from './GuideDetails';

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
      <View style={guideContentStyles.emptyContainer}>
        <Text style={guideContentStyles.emptyTitle}>No guides found</Text>
        <Text style={guideContentStyles.emptyDescription}>
          There are no guides available in this category yet.
        </Text>
      </View>
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
