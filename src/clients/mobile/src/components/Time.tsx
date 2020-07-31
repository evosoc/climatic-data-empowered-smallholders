import React from "react";
import {View, Text} from "react-native";
import Moment from 'moment';

interface TimeProps {
    date: string;
}

export class Time extends React.Component<TimeProps, any> {
    render() {
        const {date} = this.props;

        if (!date || date === 'NaN') {
            return <View />
        }
        // @ts-ignore
        let time = "";
        if (date.toString().indexOf("T") > 0) {
            time = date.substr(11, 5);
        } else {
            time = Moment().utcOffset(date).format("HH:mm");
        }

        return (
            <Text>{time}</Text>
        )
    }

}
