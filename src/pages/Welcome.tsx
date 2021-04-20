import React, { useRef, useState } from 'react'
import { SafeAreaView, Platform, Text, Image, StyleSheet } from 'react-native'

import wateringImg from '../assets/watering.png'
import colors from '../styles/colors'
import { Button } from '../components/Button'

export function Welcome(){
    const [visible, setVisible] = useState(false);

    function handleVisibility(){
        setVisible(true)
    }

    return(
        <SafeAreaView style={styles.container}>
            
            <Text style={styles.title}>
                Gerencie{'\n'}suas plantas{'\n'}de forma fácil
            </Text>

            {
                visible && 
                <Image source={wateringImg} style={styles.img}/>
            }
            
            <Text style={styles.subtitle}>
                Não esqueça mais de regar suas plantas. 
                Nós cuidamos de lembrar você sempre que precisar.
            </Text>
            <Button title="Imagem" onPress={handleVisibility}/>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
    title:{
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38
    },
    subtitle:{
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading
    },
    img:{
       width: 292,
       height: 284 
    } 
})