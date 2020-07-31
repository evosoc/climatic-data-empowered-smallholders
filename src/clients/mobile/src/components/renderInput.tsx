import React from "react";
import {TextInput} from "react-native-paper";

export const renderInput = (field) => {
    const { input: { onChange, ...input}, ...rest}  = field;
    const error = field.meta.touched && !!field.meta.error;
    const errorText = error ? field.meta.error : "";

    return (
        <TextInput
            mode="outlined"
            onChangeText={onChange}
            {...input}
            {...rest}
            error={error}
            errorText={errorText}
            returnKeyType="next"
        />)
};
