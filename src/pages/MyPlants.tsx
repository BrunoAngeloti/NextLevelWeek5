import React, { useState } from 'react'
import {
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Header } from '../components/Header'

import waterdrop from '../assets/waterdrop.png'
import colors from '../styles/colors'
import { FlatList } from 'react-native-gesture-handler'
import { PlantsProps } from '../libs/storage'

export function MyPlants(){
    const [] = useState<PlantsProps[]>([])
    const [loading, setLoading] = useState(true)
    const [nextWaterd, setNextWaterd] = useState<string>()

    return(
        <View style={styles.container}>
            <Header />

            <View style={styles.spotlight}>
                <Image source={waterdrop} style={styles.spotlightImage}/>
                <Text style={styles.spotlightText}>
                    sdasdasdsa
                </Text>
            </View>

            <View style={styles.plants}>
                <Text style={styles.plantsTitle}>
                    Próximas regadas
                </Text>

                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingTop: 50,
        backgroundColor: colors.background
    },
    spotlight:{

    },
    spotlightImage:{

    },
    spotlightText:{

    },
    plants:{

    },
    plantsTitle:{

    }
})