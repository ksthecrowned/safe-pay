import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, Animated } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { StatusBar } from 'expo-status-bar';

export default function TabTwoScreen() {
  return (
    <Animated.ScrollView scrollEventThrottle={16}>
      <StatusBar style="light" backgroundColor='#1D3D47' />
    </Animated.ScrollView>
  );
}
