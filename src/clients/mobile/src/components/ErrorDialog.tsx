import React from 'react';
import {Button, Dialog, Paragraph, Portal} from "react-native-paper";
import {View} from "react-native";

interface ErrorDialogProps {
    message: string;
    visible: boolean;
    hideDialogPress: () => void;
}

const ErrorDialog = (props: ErrorDialogProps) => {
    return (
        <View>
            <Portal>
                <Dialog
                    visible={props.visible}
                    onDismiss={props.hideDialogPress}>
                    <Dialog.Title>Alert</Dialog.Title>
                    <Dialog.Content>
                        <Paragraph>{props.message}</Paragraph>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={props.hideDialogPress}>Done</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </View>
    )
};

export default ErrorDialog;
