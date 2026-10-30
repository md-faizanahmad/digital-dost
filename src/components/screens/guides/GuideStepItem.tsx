import { Image, Text, View } from 'react-native';
import { Guide } from '../../../types/guide';
import { GuideLanguage } from '../../../shared/TranslateButton';
import { guideContentStyles } from '../../../styles/guideContent.styles';

type GuideStep = Guide['steps'][number];

type GuideStepItemProps = {
  step: GuideStep;
  index: number;
  language: GuideLanguage;
};

export default function GuideStepItem({
  step,
  index,
  language,
}: GuideStepItemProps) {
  const isHinglish = language === 'hinglish';

  return (
    <View style={guideContentStyles.step}>
      <View style={guideContentStyles.stepNumber}>
        <Text style={guideContentStyles.stepNumberText}>{index + 1}</Text>
      </View>

      <View style={guideContentStyles.stepContent}>
        <Text style={guideContentStyles.stepTitle}>
          {isHinglish ? step.titleHinglish || step.title : step.title}
        </Text>

        <Text style={guideContentStyles.stepDescription}>
          {isHinglish
            ? step.descriptionHinglish || step.description
            : step.description}
        </Text>

        {step.image ? (
          <Image
            source={{ uri: step.image.key }}
            accessibilityLabel={step.image.alt}
            style={guideContentStyles.stepImage}
            resizeMode="contain"
          />
        ) : null}

        {step.tip ? (
          <View style={guideContentStyles.tipBox}>
            <Text style={guideContentStyles.tipLabel}>Tip</Text>
            <Text style={guideContentStyles.tipText}>
              {isHinglish ? step.tipHinglish || step.tip : step.tip}
            </Text>
          </View>
        ) : null}
      </View>
    </View>
  );
}
