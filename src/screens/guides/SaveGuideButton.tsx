import { useCallback, useEffect, useState } from 'react';
import { Pressable, StyleSheet, ActivityIndicator } from 'react-native';
import { Bookmark, BookmarkCheck } from 'lucide-react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
} from 'react-native-reanimated';

import {
  isGuideSaved,
  removeSavedGuide,
  saveGuide,
} from '../../utils/savedGuides';

type SaveGuideButtonProps = {
  guideId: string;
};

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export default function SaveGuideButton({ guideId }: SaveGuideButtonProps) {
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [isInitializing, setIsInitializing] = useState<boolean>(true);
  const [isUpdating, setIsUpdating] = useState<boolean>(false);

  const scale = useSharedValue(1);

  /**
   * Provides a subtle scale animation when bookmark state changes.
   */
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  /**
   * Checks the existing bookmark status from SQLite.
   */
  const checkSavedStatus = useCallback(async (): Promise<void> => {
    setIsInitializing(true);

    try {
      const savedStatus = await isGuideSaved(guideId);
      setIsSaved(savedStatus);
    } catch (error: unknown) {
      console.error('Failed to check saved guide status:', error);
    } finally {
      setIsInitializing(false);
    }
  }, [guideId]);

  /**
   * Loads the bookmark status when the component mounts
   * or when the guide ID changes.
   */
  useEffect(() => {
    void checkSavedStatus();
  }, [checkSavedStatus]);

  /**
   * Saves or removes a guide without replacing the bookmark icon
   * with a loading indicator during database operations.
   */
  const handleToggleSave = async (): Promise<void> => {
    if (isUpdating || isInitializing) {
      return;
    }

    setIsUpdating(true);

    try {
      if (isSaved) {
        await removeSavedGuide(guideId);
        setIsSaved(false);
      } else {
        await saveGuide(guideId);
        setIsSaved(true);
      }

      // Animate the bookmark after a successful database operation.
      scale.value = withSequence(
        withSpring(1.2, { damping: 5, stiffness: 250 }),
        withSpring(1, { damping: 8, stiffness: 180 }),
      );
    } catch (error: unknown) {
      console.error('Failed to update saved guide:', error);
    } finally {
      setIsUpdating(false);
    }
  };

  /**
   * Prevents interaction until the initial saved status is known.
   */
  if (isInitializing) {
    return (
      <ActivityIndicator
        size="small"
        color="#16A34A"
        accessibilityLabel="Loading bookmark status"
      />
    );
  }

  return (
    <AnimatedPressable
      onPress={handleToggleSave}
      disabled={isUpdating}
      accessibilityRole="button"
      accessibilityLabel={isSaved ? 'Remove saved guide' : 'Save guide'}
      accessibilityState={{
        selected: isSaved,
        disabled: isUpdating,
      }}
      style={[styles.button, animatedStyle]}
    >
      {isSaved ? (
        <BookmarkCheck
          size={22}
          color="#16A34A"
          fill="#16A34A"
          strokeWidth={2}
        />
      ) : (
        <Bookmark size={22} color="#171717" strokeWidth={2} />
      )}
    </AnimatedPressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
});
