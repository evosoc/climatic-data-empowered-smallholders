import React from "react";
import {FAB, Theme, withTheme} from "react-native-paper";
import styles from "../styles";

export interface AddFabProps {
    onPress: () => void | undefined;
    theme: Theme
}

class AddFab extends React.Component<AddFabProps> {
    render() {

        let {onPress} = this.props;
        const { colors } = this.props.theme;

        return (
            <FAB
                style={{
                    ...styles.fab,
                    backgroundColor: colors.primary
                }}
                icon="plus"
                onPress={() => onPress()} />
        );
    }
}

export default withTheme(AddFab);
