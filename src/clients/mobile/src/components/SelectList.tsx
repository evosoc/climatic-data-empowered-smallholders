import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {View, StyleSheet} from "react-native";

const SelectList = (props) => {
    const { items, value, onValueChange, placeholder , label} = props;

    return (
        <RNPickerSelect
            items={items || []}
            onValueChange={onValueChange}
            {...props}
            style={{
                ...pickerSelectStyles,
                iconContainer: {
                    top: 20,
                    right: 10,
                },
                placeholder: {
                    color: '#999',
                    fontSize: 12,
                    fontWeight: 'bold',
                },
            }}
            value={value}
            useNativeAndroidPickerStyle={false}
            placeholder={{
                label:  label,
                value: null,
                color: '#aaa',
            }}
            Icon={() => {
                return (
                    <View
                        style={{
                            backgroundColor: 'transparent',
                            borderTopWidth: 10,
                            borderTopColor: 'gray',
                            borderRightWidth: 10,
                            borderRightColor: 'transparent',
                            borderLeftWidth: 10,
                            borderLeftColor: 'transparent',
                            width: 0,
                            height: 0,
                        }}
                    />
                );
            }}
        />
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContainer: {
        flex: 1,
        paddingHorizontal: 15,
    },
    scrollContentContainer: {
        paddingTop: 40,
        paddingBottom: 10,
    },
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        backgroundColor: 'white',
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: 'white',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
});

export default SelectList;
