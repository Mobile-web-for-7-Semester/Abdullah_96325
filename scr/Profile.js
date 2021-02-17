import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'


import colors from '../utils/Colors'  
import ContactThumnail from '../components/ContactThumnail'
import DetailsListItem from '../components/DetailsListItem'
export default function Profile(props){
const {route} = props;
const {item} = route.params
const {name, phone, email} = item
    return (
    <View style={styles.container}>
        <View style={styles.thumnailSection}>
            <ContactThumnail name={name} phone={phone} />
        </View>
        <View style={styles.detailSection}>
            <DetailsListItem icon="email" title="Email" subTilte={email}/>
            <DetailsListItem icon="phone" title="Phone" subTilte={phone}/>
        </View>
    </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    thumnailSection: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
        paddingBottomWidth: 1,
        borderBottomColor: colors.secondry
    },
    detailSection:{
        flex:1,
        padding: 10
    }
})