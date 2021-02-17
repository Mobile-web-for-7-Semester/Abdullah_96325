import React from 'react'
import { StyleSheet, Text, FlatList, View, TouchableOpacity } from 'react-native';

import {Feather} from '@expo/vector-icons'
import colors from '../utils/Colors'
import ContactListItem from '../components/ContactListItem'

const contacts = [
    { id: '1', name: 'Abdulla', phone: '0792380009', email: 'abdulla@gmail.com'},
    { id: '2', name: 'AhmadSina', phone: '0798753255', email: 'ah_sina@gmail.com'},
    { id: '3', name: 'Farid', phone: '079738409', email: 'farid@gmail.com'},
    { id: '4', name: 'SharifAhmad', phone: '0790045987', email: 'sharif@gmail.com'},
    { id: '5', name: 'Reza', phone: '072975437', email: 'reza@gmail.com'},
    { id: '6', name: 'Jawad', phone: '074657788', email: 'jawad@gmail.com'},
    { id: '7', name: 'Sahar', phone: '0792948043', email: 'sahar@gmail.com'},
    { id: '8', name: 'Amina', phone: '078956333', email: 'amina@gmail.com'},
    { id: '9', name: 'Abdulla', phone: '079456268', email: 'ahmadi@gmail.com'},
]
export default function Contacts({navigation}){
    return (
        <View>
            <FlatList
            data={contacts}
            keyExtractor={(item)=>item.id}
            renderItem={({item}) => {
                return <ContactListItem name={item.name} phone={item.phone} onPress={()=> navigation.navigate('Profile',{item:item})} />
            }}
            />
        <TouchableOpacity style={styles.floatButton} onPress={()=> navigation.navigate('CreateContact')}>
            <Text>
            <Feather name="plus" size={28} color="white" />
            </Text>
        </TouchableOpacity>
        </View>
    )
 
 }
 const styles = StyleSheet.create({
     floatButton: {
         backgroundColor: 'orange',
         padding: 20,
         borderRadius: '50%',
         position: 'absolute',
         bottom: 40,
         right: 40
     }
 })