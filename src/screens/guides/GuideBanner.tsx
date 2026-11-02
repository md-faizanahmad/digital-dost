import { Image, StyleSheet, View } from 'react-native';
import { GuideImage } from '../../types/guide';
import { getGuideImage } from '../../utils/getGuideImage';

type Props = {
  image: GuideImage;
};

export default function GuideBanner({ image }: Props) {
  const source = getGuideImage(image.key);

  if (!source) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image
        source={source}
        style={styles.image}
        resizeMode="cover"
        accessibilityLabel={image.alt}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    aspectRatio: 16 / 9,
    overflow: 'hidden',
    backgroundColor: '#F5F5F5',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
