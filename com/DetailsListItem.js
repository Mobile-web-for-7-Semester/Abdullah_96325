import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

import {MaterialIcons} from '@expo/vector-icons'
import colors from '../utils/Colors'  

export default function DetailsListItem({icon, title, subTilte}){
    return (
        <View>
        <View style={styles.borderContainer}>
              <View style={styles.container}>
                <MaterialIcons name={icon} size={24} color="black"/> 
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                    <Text style={styles.subTilte}>
                        {subTilte}
                    </Text>
                </View>   
              </View>   
        </View>
    </View>
    )
}
const styles = StyleSheet.create({
    borderContainer: {
        paddingLeft: 24
    },
    container: {
        flexDirection: 'row',
        paddingVertical: 16,
        borderBottomWidth: 0.5,
        borderBottomColor: colors.secondry
    },
    contentContainer: {
        paddingLeft:20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    subTilte: {
        fontSize: 16,
        color: colors.primary
    }
})