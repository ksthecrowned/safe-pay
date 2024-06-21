import { Image, StyleSheet, Platform, Text, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <View className='flex-1 justify-end px-4'>
          <Text className='text-white text-3xl text-center'>Votre profil</Text>
          <View className='bg-white dark:bg-[#151718] h-6 rounded-t-xl mt-4' />
        </View>
      }>
      <View className='flex-1 px-4'>
        <StatusBar style="light" backgroundColor='#1D3D47' />
        <View className='flex-1 bg-white dark:bg-[#151718] rounded-b-xl pb-6'>
          <View className='flex-row justify-between items-center px-4'>
            <View className='flex-row items-center space-x-2'>
              <View className='relative h-16 w-16 rounded-full dark:bg-[#0a0a04]/50 items-center justify-center'>
                <Image className='w-full h-full object-contain rounded-full' source={require('@/assets/images/placeholder-user.jpg')} />
                <View className='absolute bottom-0 right-0 bg-gray-100 dark:bg-[#0a0a04] h-6 w-6 rounded-full flex items-center justify-center'>
                  <TouchableOpacity>
                    <Ionicons name='pencil' size={14} color={"white"} />
                  </TouchableOpacity>
                </View>
              </View>
              <View className=''>
                <Text className='text-gray-100 text-xl -mt-2'>Kaiser Styve</Text>
                <Text className='text-gray-400'>242 06 515 2374</Text>
              </View>
            </View>
            <View className='space-y-2'>
              <View className='h-6 w-20 rounded-full dark:bg-[#0a0a04]/50 items-center justify-center'>
                {/* Something here */}
              </View>
              <View className='h-6 w-20 rounded-full dark:bg-[#0a0a04]/50 items-center justify-center'>
                {/* Something here */}
              </View>
            </View>
          </View>
        </View>
        <View className='flex-1 flex-row mt-4'>
          <View className='w-1/2 pr-2'>
            <View className='flex-1 h-20 bg-white dark:bg-[#151718] rounded-xl'>
              {/* Something here */}
            </View>
          </View>
          <View className='w-1/2 pl-2'>
            <View className='flex-1 h-20 bg-white dark:bg-[#151718] rounded-xl'>
              {/* Something here */}
            </View>
          </View>
        </View>
        <View className='py-2 mt-2'>
          <View className='flex-row justify-between items-center'>
            <Text className='text-xl text-gray-200 font-medium'>Mon compte</Text>
          </View>
          <View className='gap-4 mt-0.5'>
            <TouchableOpacity className='flex-1 px-4 py-2.5 bg-white dark:bg-[#151718] rounded-xl'>
              <View className='flex-row justify-between items-center'>
                <View className='flex-row items-center space-x-2'>
                  <View className='w-12 h-12 rounded-full bg-gray-200 dark:bg-[#0a0a04]/50 items-center justify-center'>
                    <Ionicons name='man' size={24} color={"white"} />
                  </View>
                  <View className=''>
                    <Text className='text-gray-100 text-base'>Informations personnelles</Text>
                  </View>
                </View>
                <Ionicons name='chevron-forward' size={20} color={"white"} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity className='flex-1 px-4 py-2.5 bg-white dark:bg-[#151718] rounded-xl'>
              <View className='flex-row justify-between items-center'>
                <View className='flex-row items-center space-x-2'>
                  <View className='w-12 h-12 rounded-full bg-gray-200 dark:bg-[#0a0a04]/50 items-center justify-center'>
                    <Ionicons name='phone-portrait' size={24} color={"white"} />
                  </View>
                  <View className=''>
                    <Text className='text-gray-100 text-base'>Changer mon numéro</Text>
                  </View>
                </View>
                <Ionicons name='chevron-forward' size={20} color={"white"} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity className='flex-1 px-4 py-2.5 bg-white dark:bg-[#151718] rounded-xl'>
              <View className='flex-row justify-between items-center'>
                <View className='flex-row items-center space-x-2'>
                  <View className='w-12 h-12 rounded-full bg-gray-200 dark:bg-[#0a0a04]/50 items-center justify-center'>
                    <Ionicons name='lock-open' size={24} color={"white"} />
                  </View>
                  <View className=''>
                    <Text className='text-gray-100 text-base'>Changer mon mot de passe</Text>
                  </View>
                </View>
                <Ionicons name='chevron-forward' size={20} color={"white"} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View className='py-2 mt-2'>
          <View className='flex-row justify-between items-center'>
            <Text className='text-xl text-gray-200 font-medium'>Plus de réglages</Text>
          </View>
          <View className='gap-4 mt-0.5'>
            <TouchableOpacity className='flex-1 px-4 py-2.5 bg-white dark:bg-[#151718] rounded-xl'>
              <View className='flex-row justify-between items-center'>
                <View className='flex-row items-center space-x-2'>
                  <View className='w-12 h-12 rounded-full bg-gray-200 dark:bg-[#0a0a04]/50 items-center justify-center'>
                    <Ionicons name='cloud-done-sharp' size={24} color={"white"} />
                  </View>
                  <View className=''>
                    <Text className='text-gray-100 text-base'>Informations personnelles</Text>
                  </View>
                </View>
                <Ionicons name='chevron-forward' size={20} color={"white"} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity className='flex-1 px-4 py-2.5 bg-white dark:bg-[#151718] rounded-xl'>
              <View className='flex-row justify-between items-center'>
                <View className='flex-row items-center space-x-2'>
                  <View className='w-12 h-12 rounded-full bg-gray-200 dark:bg-[#0a0a04]/50 items-center justify-center'>
                    <Ionicons name='cloud-done-sharp' size={24} color={"white"} />
                  </View>
                  <View className=''>
                    <Text className='text-gray-100 text-base'>Informations personnelles</Text>
                  </View>
                </View>
                <Ionicons name='chevron-forward' size={20} color={"white"} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity className='flex-1 px-4 py-2.5 bg-white dark:bg-[#151718] rounded-xl'>
              <View className='flex-row justify-between items-center'>
                <View className='flex-row items-center space-x-2'>
                  <View className='w-12 h-12 rounded-full bg-gray-200 dark:bg-[#0a0a04]/50 items-center justify-center'>
                    <Ionicons name='cloud-done-sharp' size={24} color={"white"} />
                  </View>
                  <View className=''>
                    <Text className='text-gray-100 text-base'>Informations personnelles</Text>
                  </View>
                </View>
                <Ionicons name='chevron-forward' size={20} color={"white"} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View className='flex-1 justify-center items-center my-4'>
          <TouchableOpacity className='flex-row justify-center items-center space-x-1'>
            <Ionicons name='log-out' size={24} color={"#ef4444"} />
            <Text className='text-red-500 text-base'>Se deconnecter</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ParallaxScrollView>
  );
}
