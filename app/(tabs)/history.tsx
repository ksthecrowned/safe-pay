import { Image, useWindowDimensions, Text, View } from 'react-native'

import { HelloWave } from '@/components/HelloWave'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { Ionicons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'
import { TabView, SceneMap } from 'react-native-tab-view'
import { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Animated from 'react-native-reanimated'

import { DetailsHeaderScrollView } from 'react-native-sticky-parallax-header'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const FirstRoute = () => (
  <View className='py-2 px-5'>
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
)

const SecondRoute = () => (
  <View className='py-2 px-5'>
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
)

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: FirstRoute,
  fourth: FirstRoute,
})



export default function HomeScreen() {
  const layout = useWindowDimensions()

  const [index, setIndex] = useState(0)
  const [routes] = useState([
    { key: 'first', title: 'Tout' },
    { key: 'second', title: 'En attente' },
    { key: 'third', title: 'Terminé' },
  ])

  const renderTabBar = (props: any) => {
    return (
      <View className='flex-row space-x-10 px-5 py-3 bg-[#1D3D47]/50'>
        {props.navigationState.routes.map((route: any, i: number) => {
          const isCurrent = index === i
          return (
            <TouchableOpacity
              className="" key={route.key}
              onPress={() => setIndex(i)}>
              <Animated.Text className={(isCurrent ? 'text-white' : 'text-gray-500') + ' text-base font-medium'}>{route.title}</Animated.Text>
            </TouchableOpacity>
          )
        })}
      </View>
    )
  }
  
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <View className='flex-1 justify-end py-6'>
          <Text className='text-white text-3xl text-center'>Historique</Text>
        </View>
      }
    >
      <StatusBar style="light" backgroundColor='#1D3D47' />
      <View className='flex-1'>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          renderTabBar={renderTabBar}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
        />
      </View>
    </ParallaxScrollView>
  )
}
