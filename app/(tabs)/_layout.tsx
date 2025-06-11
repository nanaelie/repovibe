import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { ThemeProvider } from '@/contexts/ThemeContext'; // <<---- Ajouté
import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider>
      <Tabs
		  screenOptions={{
			tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
			headerShown: false,
			tabBarButton: HapticTab,
			tabBarBackground: TabBarBackground,
			tabBarStyle: {
			  backgroundColor: '#0A0A0A',
			  position: Platform.OS === 'ios' ? 'absolute' : 'relative',
			  borderTopWidth: 0,
			  elevation: 0,
			  paddingBlock: 5,
			},
		  }}
		>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Repos',
            tabBarIcon: () => <IconSymbol size={30} name="house.fill" color='#424242' />,
          }}
        />
        <Tabs.Screen
          name="user"
          options={{
            title: 'User',
            tabBarIcon: () => <IconSymbol size={30} name="account.circle" color='#424242' />,
          }}
        />
      </Tabs>
    </ThemeProvider>
  );
}
