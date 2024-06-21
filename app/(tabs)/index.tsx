import { Image, StyleSheet, Platform, Text, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <View className='flex-1 justify-end px-4'>
          <View className='flex-row justify-between items-center'>
            <View>
                <View className='flex-row items-center'>
                    <Text className='text-gray-400 text-base'>Heureux de vous revoir </Text>
                    <HelloWave
                        styles={
                            {
                                fontSize: 20,
                                lineHeight: 32,
                                marginTop: -6,
                            }
                        }
                    />
                </View>
                <Text className='mt-2 text-white text-2xl'>Kaiser Styve</Text>
            </View>
            <Link
                href={{
                  pathname: "/notifications",
                }}
            >
              <Ionicons name='notifications' size={28} color={"white"}/>
            </Link>
          </View>
          <View className='bg-white dark:bg-[#151718] h-6 rounded-t-xl mt-4' />
        </View>
      }>
      <View className='flex-1 px-4'>
        <StatusBar style="light" backgroundColor='#1D3D47' />
        <View className='flex-1 bg-white dark:bg-[#151718] -mt-1.5 rounded-b-xl pb-8'>
          <View className='flex-row items-center justify-between px-4'>
            <Text className='font-semibold text-base dark:text-gray-300'>Votre solde</Text>
            <Text className='font-semibold text-base dark:text-gray-300'>20.400.452 XAF</Text>
          </View>
          <View className='bg-gray-100 dark:bg-gray-400/10 h-0.5 m-4' />
          <View className='flex-row px-2'>
            <View className='w-1/4 items-center justify-center'>
              <View className='mb-2 w-12 h-12 rounded-full bg-gray-200 dark:bg-[#0a0a04]/50 items-center justify-center'>
                <Ionicons name='add' size={28} color={"white"} />
              </View>
              <Text className='dark:text-gray-300 text-xs font-semibold'>Payer</Text>
            </View>
            <View className='w-1/4 items-center justify-center'>
              <View className='mb-2 w-12 h-12 rounded-full bg-gray-200 dark:bg-[#0a0a04]/50 items-center justify-center'>
                <Ionicons name='mic' size={28} color={"white"} />
              </View>
              <Text className='dark:text-gray-300 text-xs font-semibold'>Recevoir</Text>
            </View>
            <View className='w-1/4 items-center justify-center'>
              <View className='mb-2 w-12 h-12 rounded-full bg-gray-200 dark:bg-[#0a0a04]/50 items-center justify-center'>
                <Ionicons name='stopwatch' size={28} color={"white"} />
              </View>
              <Text className='dark:text-gray-300 text-xs font-semibold'>Recevoir</Text>
            </View>
            <View className='w-1/4 items-center justify-center'>
              <View className='mb-2 w-12 h-12 rounded-full bg-gray-200 dark:bg-[#0a0a04]/50 items-center justify-center'>
                <Ionicons name='navigate' size={28} color={"white"} />
              </View>
              <Text className='dark:text-gray-300 text-xs font-semibold'>Recevoir</Text>
            </View>
          </View>
        </View>
        <View className='py-2'>
          <View className='flex-row justify-between items-center'>
            <Text className='text-2xl text-gray-200 font-medium'>Transactions</Text>
            <Text className='text-[#0a7ea4]'>Voir tout</Text>
          </View>
          <View className='gap-4 mt-0.5'>
            <View className='flex-1 flex-row rounded-xl p-3 bg-white dark:bg-[#151718] border dark:border-gray-400/25 border-t-0 space-x-3'>
              <View className='flex-row flex-1'>
                <View className='h-16 w-16 rounded-xl dark:bg-[#0a0a04]/50 items-center justify-center'>
                  <Image className='w-12 h-12 object-contain' source={require('@/assets/images/react-logo.png')} />
                </View>
                <View className='flex-1 justify-between my-0.5 ml-2 mb-2'>
                  <Text className='text-base text-gray-300' numberOfLines={1}>Restaurant Péla missapi</Text>
                  <Text className='text-gray-500'>26 Mars 2025, 12:47</Text>
                </View>
              </View>
              <View className='items-end mt-1'>
                <Text className='text-base text-gray-300'>20.000.000</Text>
                <Text className='text-gray-300'>XAF</Text>
              </View>
            </View>
            <View className='flex-1 flex-row rounded-xl p-3 bg-white dark:bg-[#151718] border dark:border-gray-400/25 border-t-0 space-x-3'>
              <View className='flex-row flex-1'>
                <View className='h-16 w-16 rounded-xl dark:bg-[#0a0a04]/50 items-center justify-center'>
                  <Image className='w-12 h-12 object-contain' source={require('@/assets/images/react-logo.png')} />
                </View>
                <View className='flex-1 justify-between my-0.5 ml-2 mb-2'>
                  <Text className='text-base text-gray-300' numberOfLines={1}>Restaurant Péla missapi</Text>
                  <Text className='text-gray-500'>26 Mars 2025, 12:47</Text>
                </View>
              </View>
              <View className='items-end mt-1'>
                <Text className='text-base text-gray-300'>20.000.000</Text>
                <Text className='text-gray-300'>XAF</Text>
              </View>
            </View>
            <View className='flex-1 flex-row rounded-xl p-3 bg-white dark:bg-[#151718] border dark:border-gray-400/25 border-t-0 space-x-3'>
              <View className='flex-row flex-1'>
                <View className='h-16 w-16 rounded-xl dark:bg-[#0a0a04]/50 items-center justify-center'>
                  <Image className='w-12 h-12 object-contain' source={require('@/assets/images/react-logo.png')} />
                </View>
                <View className='flex-1 justify-between my-0.5 ml-2 mb-2'>
                  <Text className='text-base text-gray-300' numberOfLines={1}>Restaurant Péla missapi</Text>
                  <Text className='text-gray-500'>26 Mars 2025, 12:47</Text>
                </View>
              </View>
              <View className='items-end mt-1'>
                <Text className='text-base text-gray-300'>20.000.000</Text>
                <Text className='text-gray-300'>XAF</Text>
              </View>
            </View>
            <View className='flex-1 flex-row rounded-xl p-3 bg-white dark:bg-[#151718] border dark:border-gray-400/25 border-t-0 space-x-3'>
              <View className='flex-row flex-1'>
                <View className='h-16 w-16 rounded-xl dark:bg-[#0a0a04]/50 items-center justify-center'>
                  <Image className='w-12 h-12 object-contain' source={require('@/assets/images/react-logo.png')} />
                </View>
                <View className='flex-1 justify-between my-0.5 ml-2 mb-2'>
                  <Text className='text-base text-gray-300' numberOfLines={1}>Restaurant Péla missapi</Text>
                  <Text className='text-gray-500'>26 Mars 2025, 12:47</Text>
                </View>
              </View>
              <View className='items-end mt-1'>
                <Text className='text-base text-gray-300'>20.000.000</Text>
                <Text className='text-gray-300'>XAF</Text>
              </View>
            </View>
            <View className='flex-1 flex-row rounded-xl p-3 bg-white dark:bg-[#151718] border dark:border-gray-400/25 border-t-0 space-x-3'>
              <View className='flex-row flex-1'>
                <View className='h-16 w-16 rounded-xl dark:bg-[#0a0a04]/50 items-center justify-center'>
                  <Image className='w-12 h-12 object-contain' source={require('@/assets/images/react-logo.png')} />
                </View>
                <View className='flex-1 justify-between my-0.5 ml-2 mb-2'>
                  <Text className='text-base text-gray-300' numberOfLines={1}>Restaurant Péla missapi</Text>
                  <Text className='text-gray-500'>26 Mars 2025, 12:47</Text>
                </View>
              </View>
              <View className='items-end mt-1'>
                <Text className='text-base text-gray-300'>20.000.000</Text>
                <Text className='text-gray-300'>XAF</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ParallaxScrollView>
  );
}
