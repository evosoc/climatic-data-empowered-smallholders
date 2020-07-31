import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
    DrawerItem,
} from '@react-navigation/drawer';
import React from 'react';
import {View, Text, Picker} from 'react-native';
import {
    Card,
    Drawer, Surface,
} from 'react-native-paper';
import styles from '../../styles';
import {connect} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from "@store";
import {Pages} from "@common";

class LoggedInDrawerContent extends React.Component<any, any> {
    state = {
        selectedFarmerId: 1,
    };

    componentDidMount(): void {
        this.props.getFarmers();
        const { farmer } = this.props;
        const id = farmer ? farmer.id : 1;
        this.props.setFarmer(id);
        this.setState({
            selectedFarmerId: id
        });
    }

    setFarmer = (id: any) => {
        this.props.setFarmer(id);
        this.setState({
            selectedFarmerId: id
        })
    };

    pickerItems = (items = []) => {
        return items.map((x) => {
            return (
                <Picker.Item label={x.farmer} key={x.id} value={x.id} />
            )
        })
    };

    render() {
        const {navigation, logout, farmers, user, farmer } = this.props;
        const _farmer = farmer || {};
        return (
            <View>
                <Surface style={{
                    height: 100,
                    backgroundColor: '#cccccc',
                    padding: 10,
                    borderRadius: 8,
                    margin: 5,
                    alignItems: 'center',
                    elevation: 5
                }}>
                    <Text style={styles.header2}>Weather Direct</Text>
                    <Text>{_farmer.farmer}</Text>
                </Surface>

                <DrawerItem
                    onPress={() => { navigation.navigate(Pages.Home)}}
                    style={styles.drawerItem}
                    label="Home"
                    icon={({color, size}) => (
                        <MaterialCommunityIcons
                            name="home"
                            color={color}
                            size={size}
                        />
                    )}
                />
                <DrawerItem
                    onPress={() => { navigation.navigate(Pages.Community)}}
                    style={styles.drawerItem}
                    label="Community"
                    icon={({color, size}) => (
                        <MaterialCommunityIcons
                            name="forum-outline"
                            color={color}
                            size={size}
                        />
                    )}
                />
                <DrawerItem
                    onPress={() => { navigation.navigate(Pages.Profile)}}
                    style={styles.drawerItem}
                    label="Profile"
                    icon={({color, size}) => (
                        <MaterialCommunityIcons
                            name="account"
                            color={color}
                            size={size}
                        />
                    )}
                />{/*
                <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem
                        style={styles.drawerItem}
                        icon={({ color, size }) => (
                            <MaterialCommunityIcons
                                name="logout"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Logout"
                        onPress={() =>  {
                            logout();
                            navigation.navigate(Pages.HomeScreen);
                        }}
                    />
                </Drawer.Section>*/}
                <Card>
                    <Card.Content>
                        <Picker onValueChange={this.setFarmer} selectedValue={this.state.selectedFarmerId}>
                            {this.pickerItems(farmers)}
                        </Picker>
                    </Card.Content>
                </Card>
            </View>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoggedInDrawerContent);
