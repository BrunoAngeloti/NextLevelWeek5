import React from 'react';
import { View, Text } from 'react-native'
import AppLoading from 'expo-app-loading'

import { Welcome } from './src/pages/Welcome'
import { 
  useFonts, 
  Jost_400Regular,
  Jost_600SemiBold

} from '@expo-google-fonts/jost';

export default function App(){
  const [ fontsLoadead ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  })

  if(!fontsLoadead)
    return <AppLoading />

  return(
    <Welcome />
  )
}


