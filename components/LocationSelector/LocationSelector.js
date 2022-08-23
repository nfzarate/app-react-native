import React, { useEffect, useState } from 'react';
import { View, Button, Text, StyleSheet, Alert } from 'react-native';
import * as Location from 'expo-location';
import MapPreview from '../MapPreview/MapPreview'
import colors from '../../constants/colors'
import { useNavigation } from '@react-navigation/native';

const LocationSelector = ({onLocation, mapLocation}) => {
    const [pickedLocation, setPickedLocation] = useState();
    const navigation = useNavigation();

    const handleGetLocation = async () => {
        const isLocationOk = await verifyPermissions();
        if (!isLocationOk) {
            return
        }

        const location = await Location.getCurrentPositionAsync({
            timeout: 5000,
        });

        setPickedLocation({
            lat: location.coords.latitude,
            lng: location.coords.longitude,
        });
        onLocation({
            lat: location.coords.latitude,
            lng: location.coords.longitude,
        })
    }

    const verifyPermissions = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert(
                'Permisos insuficientes',
                'Necesitas permisos para usar la localización',
                [{ text: 'OK' }]
            )
            return false;

        }
        return true
    }

    const handlePickOnMap = async() => {
        const isLocationOk = await verifyPermissions();
        if (!isLocationOk) {
            return
        }
        navigation.navigate('Map')
    }

    useEffect(() => {
        if(mapLocation) {
            setPickedLocation(mapLocation)
            onLocation(mapLocation)
        }
    }, [mapLocation])

    return (
        <View style={styles.container}>
            <MapPreview location={pickedLocation} style={styles.preview}>
                <Text>Location en proceso...</Text>
            </MapPreview>
            <View style={styles.actions}>
                <Button 
                    title='Obtener location'
                    color={colors.primary}
                    onPress={handleGetLocation}
                />
                <Button
                    title='Elegir del mapa'
                    color={colors.primary}
                    onPress={handlePickOnMap}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    preview: {
        width: '100%',
        height: 170,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors.floralwhite,
        borderWidth: 1
    },
    image: {
        width: '100%',
        height: '100%'
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
})

export default LocationSelector;