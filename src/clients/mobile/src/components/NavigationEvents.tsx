import React from "react";
import { useNavigation } from "@react-navigation/native";
import {View} from "react-native";

interface NavigationEventProps {
    onDidFocus?: () => void;
    navigation?: any;
}

const NavigationEvents = ({navigation = useNavigation(), onDidFocus}: NavigationEventProps) => {
    React.useEffect(() => {
        return navigation.addListener('focus', onDidFocus);
    }, [navigation]);

    return (<View />);
};

export default NavigationEvents;
