import React, { useEffect } from 'react';
import AppLoading from 'expo-app-loading'
import * as Notifications from 'expo-notifications';

import Routes from './src/routes'
import { 
  useFonts, 
  Jost_400Regular,
  Jost_600SemiBold

} from '@expo-google-fonts/jost';
import { PlantsProps } from './src/libs/storage';

export default function App(){
  const [ fontsLoadead ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  })

  useEffect(() => {
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
      }),
    });

    const subscription = Notifications.addNotificationReceivedListener(
      async notification => {
        const data = notification.request.content.data.plant as PlantsProps
      }
    )

    async function notificacoes() {
      const data2 = await Notifications.getAllScheduledNotificationsAsync()
      console.log(data2)
    }
    
    notificacoes()

    return () => subscription.remove()
  }, [])

  if(!fontsLoadead)
    return <AppLoading />

  return(
    <Routes />
  )
}


