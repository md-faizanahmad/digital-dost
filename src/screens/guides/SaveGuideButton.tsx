import { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text } from 'react-native';
import { Bookmark, BookmarkCheck } from 'lucide-react-native';
import {
  isGuideSaved,
  removeSavedGuide,
  saveGuide,
} from '../../utils/savedGuides';

type SaveGuideButtonProps = {
  guideId: string;
};

export default function SaveGuideButton({ guideId }: SaveGuideButtonProps) {
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  /**
   * Retrieves the current bookmark status from SQLite.
   */
  const checkSavedStatus = useCallback(async (): Promise<void> => {
    setIsLoading(true);
    setError(null);

    try {
      const savedStatus = await isGuideSaved(guideId);
      setIsSaved(savedStatus);
    } catch (error: unknown) {
      console.error('Failed to check saved guide status:', error);
      setError('Unable to load saved status.');
    } finally {
      setIsLoading(false);
    }
  }, [guideId]);

  /**
   * Loads the saved status whenever the guide ID changes.
   */
  useEffect(() => {
    void checkSavedStatus();
  }, [checkSavedStatus]);

  /**
   * Toggles the bookmark status and updates the UI
   * only after the SQLite operation succeeds.
   */
  const handleToggleSave = async (): Promise<void> => {
    if (isLoading) {
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      if (isSaved) {
        await removeSavedGuide(guideId);
        setIsSaved(false);
      } else {
        await saveGuide(guideId);
        setIsSaved(true);
      }
    } catch (error: unknown) {
      console.error('Failed to update saved guide:', error);
      setError('Unable to update saved guide.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <ActivityIndicator
        size="small"
        color="#16A34A"
        accessibilityLabel="Loading saved status"
      />
    );
  }

  return (
    <Pressable
      onPress={handleToggleSave}
      accessibilityRole="button"
      accessibilityLabel={isSaved ? 'Remove saved guide' : 'Save guide'}
      accessibilityState={{ selected: isSaved }}
      disabled={isLoading}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      {isSaved ? (
        <BookmarkCheck size={20} color="#16A34A" />
      ) : (
        <Bookmark size={20} color="#171717" />
      )}

      <Text style={[styles.label, isSaved && styles.savedLabel]}>
        {isSaved ? 'Saved' : 'Save'}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  pressed: {
    opacity: 0.65,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#171717',
  },
  savedLabel: {
    color: '#16A34A',
  },
});
