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

  const whatyouneed = isHinglish
    ? guide.whatyouneedHinglish ?? guide.whatyouneed
    : guide.whatyouneed;

  return (
    <View>
      {/* <Text style={guideContentStyles.category}>{guide.categoryId}</Text> */}

      <Text style={guideContentStyles.title}>
        {isHinglish ? guide.titleHinglish || guide.title : guide.title}
      </Text>

      <Text style={guideContentStyles.description}>
        {isHinglish
          ? guide.descriptionHinglish || guide.description
          : guide.description}
      </Text>

      {whatyouneed?.length ? (
        <View style={guideContentStyles.whatyouneed}>
          <Text style={guideContentStyles.sectionTitle}>What You Need</Text>

          {whatyouneed.map((whatyouneed, index) => (
            <Text key={`${guide.id}-prerequisite-${index}`}>
              {'• '}
              {whatyouneed}
            </Text>
          ))}
        </View>
      ) : null}

      {/* <View style={guideContentStyles.meta}>
        <Text>
          {guide.difficulty} · {guide.estimatedMinutes} min
        </Text>
      </View> */}

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
