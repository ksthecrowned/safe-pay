import { View, Text } from 'react-native'
import React from 'react'
import Animated, { interpolate, useAnimatedRef, useAnimatedStyle, useScrollViewOffset } from 'react-native-reanimated'
import { HelloWave } from './HelloWave';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const HEADER_HEIGHT = 100;

export default function StickyHeader({ route }: { route: any }) {
    const scrollRef = useAnimatedRef<Animated.ScrollView>();
    const scrollOffset = useScrollViewOffset(scrollRef);

    const headerAnimatedStyle = useAnimatedStyle(() => {
        return {
            height: 220,
            transform: [
                {
                    translateY: interpolate(
                        scrollOffset.value,
                        [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                        [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
                    ),
                },
                {
                    scale: interpolate(scrollOffset.value, [-HEADER_HEIGHT, 0, HEADER_HEIGHT], [2, 1, 1]),
                },
            ],
        };
    });
    return (
        <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
            <Animated.View  className='bg-[#1D3D47] px-5 pt-10 ' style={[headerAnimatedStyle]}>
                <View className='flex-1 justify-end'>
                    {route.name === "index" 
                        ? (
                            <View className='flex-row justify-between items-center'>
                                <View>
                                    <View className='flex-row items-center'>
                                        <Text className='text-gray-400 text-base'>Heureux de vous revoir {route?.name} </Text>
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
                                        params: { id: 'bacon' }
                                    }}
                                >
                                    <Ionicons name='notifications' size={28} color={"white"}/>
                                </Link>
                            </View>
                        )
                        : (
                            <View className='flex-1 justify-end pb-6'>
                                <Text className='text-white text-3xl text-center'>Historique</Text>
                                {/* <Link
                                    href={{
                                        pathname: "/notifications",
                                        params: { id: 'bacon' }
                                    }}
                                >
                                    <Ionicons name='notifications' size={28} color={"white"}/>
                                </Link> */}
                            </View>
                        )
                    }
                    {route.name === "index" && <View className='bg-white dark:bg-[#151718] h-6 rounded-t-xl mt-4' />}
                </View>
            </Animated.View>
        </Animated.ScrollView>
    )
}