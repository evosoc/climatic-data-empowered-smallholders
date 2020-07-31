import React from "react";
import {Text} from "react-native";
import {formatDate} from "../Utils";

interface DateProps {
    value: string | Date;
    format?: string;
    style?: any;
}

export default class DateFormat extends React.Component<DateProps, any> {
    render() {
        const {format, value, style} = this.props;
        return (
            <Text style={style}>
                {formatDate(value, format)}
            </Text>
        )
    }
}
