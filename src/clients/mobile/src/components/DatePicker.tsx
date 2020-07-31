import React, {useState} from 'react';
import {IconButton, TextInput} from "react-native-paper";
import {Platform, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {formatDate} from "../Utils";
import {theme} from "../core/theme";

interface DatePickerProps {
    textInputProps?: any;
    value?: any;
    textInputMode?: string;
    onChangeText: (selectedDate) => void;
}

export const DatePicker = (props: DatePickerProps) => {
    const {value, onChangeText, textInputProps, textInputMode } = props;

    let mode = textInputMode || "outlined";
    const [showPicker, setShowPicker] = useState(false);

    const _onConfirm = (selectedDate) => {
        selectedDate.setHours(0);
        selectedDate.setMinutes(0);
        if (onChangeText) onChangeText(selectedDate);

        setShowPicker(false);
    };
    const _onCancel = () => {
        setShowPicker(false);
    };
    const showDialog = () => {
        setShowPicker(true);
    };
    const {errorText} = textInputProps;
    return (
        <View>
            { showPicker &&
            <View>
                <DateTimePickerModal
                    maximumDate={new Date()}
                    date={value || undefined}
                    isVisible={showPicker}
                    mode="date"
                    onConfirm={_onConfirm}
                    onCancel={_onCancel}
                />
            </View>
            }

            <View style={{ width: '100%', flexDirection: 'row'}}>
                <TextInput
                    mode={mode}
                    style={{
                        flex: 8,
                        backgroundColor: 'white'
                    }}
                    {...textInputProps}
                    onFocus={showDialog}
                    disabled
                    {...props}
                    value={formatDate(value)}
                />
                <TouchableOpacity onPress={showDialog}>
                    <IconButton
                        style={{
                            flex: 1,
                        }}
                        size={40}
                        icon="calendar"
                    />
                </TouchableOpacity>
                <View>
                    {errorText ? <View> <Text style={styles.error}>{errorText}</Text></View> : null}
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginVertical: 12,
    },
    input: {
        backgroundColor: theme.colors.surface,
    },
    error: {
        fontSize: 14,
        color: theme.colors.error,
        paddingHorizontal: 4,
        paddingTop: 4,
    },
});
