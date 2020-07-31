import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import NavigationEvents from "./NavigationEvents";

export default function QRScanner(props: any) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        if (props.onBarcodeScanned) {
            props.onBarcodeScanned({type, data});
        } else {
            alert(`Bar code with type ${type} and data ${data} has been scanned!`);
        }
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    const onDidFocus = () => {
        setScanned(false);
    };

    const styles = StyleSheet.create({
        overlay: {
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
        }
    });
    const renderOverlay = () => {
        return (<View style={styles.overlay}>
            <Image
                source={ require('../../assets/qr-overlay.png')}
                style={{
                    height: '100%',
                    width: '100%'
                }}
            />
        </View>);
    };
    return (
        <View
            style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-end',
                position: 'relative',
            }}>
            <NavigationEvents onDidFocus={onDidFocus} />
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
            {renderOverlay()}
            {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
        </View>
    );
}
