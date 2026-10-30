import { Text, View } from 'react-native';

import GuideStepItem from './GuideStepItem';
import { Guide } from '../../../types/guide';
import { GuideLanguage } from '../../../shared/TranslateButton';
import { guideContentStyles } from '../../../styles/guideContent.styles';

type GuideDetailsProps = {
  guide: Guide;
  language: GuideLanguage;
};

export default function GuideDetails({ guide, language }: GuideDetailsProps) {
  const isHinglish = language === 'hinglish';

  const prerequisites = isHinglish
    ? guide.prerequisitesHinglish ?? guide.prerequisites
    : guide.prerequisites;

  return (
    <View>
      <Text style={guideContentStyles.category}>{guide.categoryId}</Text>

      <Text style={guideContentStyles.title}>
        {isHinglish ? guide.titleHinglish || guide.title : guide.title}
      </Text>

      <Text style={guideContentStyles.description}>
        {isHinglish
          ? guide.descriptionHinglish || guide.description
          : guide.description}
      </Text>

      {prerequisites?.length ? (
        <View style={guideContentStyles.prerequisites}>
          <Text style={guideContentStyles.sectionTitle}>Prerequisites</Text>

          {prerequisites.map((prerequisite, index) => (
            <Text key={`${guide.id}-prerequisite-${index}`}>
              {'• '}
              {prerequisite}
            </Text>
          ))}
        </View>
      ) : null}

      <View style={guideContentStyles.meta}>
        <Text>
          {guide.difficulty} · {guide.estimatedMinutes} min
        </Text>
      </View>

      <View style={guideContentStyles.divider} />

      <Text style={guideContentStyles.sectionTitle}>Steps</Text>

      {guide.steps.map((step, index) => (
        <GuideStepItem
          key={step.id}
          step={step}
          index={index}
          language={language}
        />
      ))}
    </View>
  );
}
