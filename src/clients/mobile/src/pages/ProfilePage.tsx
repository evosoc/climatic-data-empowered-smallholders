import Page from "./Page";
import React from "react";
import {Text, View} from 'react-native';
import { connect } from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from "@store";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {ComplexLayout} from "../layouts";
import styles from "../styles";
import {Card, IconButton, List} from "react-native-paper";
import {Field, reduxForm} from 'redux-form';
import {capitalizeFirstLetter} from "../core/utils";

class ProfilePage extends Page {
    state = {
        region: {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }
    };

    renderItem = (item: any, index: number) => {
        const description = ``;
        return (<List.Item
            style={styles.listItem}
            title={capitalizeFirstLetter(item)}
            description={description}
            key={index}
            left={props => <List.Icon {...props} icon="flower"/>}
        />);
    };

    render() {
        const { farmer } = this.props;
        const _farmer = farmer || {};
        const crops = farmer.enterprises || [];

        return (
            <ComplexLayout style={{ flex: 1 }}>
                <KeyboardAwareScrollView style={{
                    flex: 1,
                    paddingHorizontal: 20
                }}>
                    <Card
                        style={styles.card}
                    >
                        <Card.Title
                            title="Farm Location"
                        />
                        <Card.Cover source={ require("../../assets/map-demo2.png")} />
                        <Card.Content>
                            <Text style={{
                                fontWeight: "bold",
                                fontSize: 20
                            }}>{farmer.address || farmer.location}</Text>
                        </Card.Content>
                    </Card>

                    <Card style={{
                        marginTop: 10
                    }}>
                        <Card.Title title="Your Profile" />
                        <Card.Content>
                            <View style={{ flexDirection: "row" }}>
                                <View style={{flex: 1 }} >
                                    <Text style={styles.key}>Farmer</Text>
                                    <Text style={styles.value}>{ _farmer.farmer }</Text>

                                    <Text style={styles.key}>Age</Text>
                                    <Text style={styles.value}>{ _farmer.age }</Text>
                                </View>
                                <View style={{flex: 1 }} >
                                    <Text style={styles.key}>Country</Text>
                                    <Text style={styles.value}>{ _farmer.country }</Text>

                                    <Text style={styles.key}>Sex</Text>
                                    <Text style={styles.value}>{ _farmer.sex }</Text>
                                </View>
                            </View>

                        </Card.Content>
                    </Card>
                    <Card style={{
                        marginTop: 10,
                    }}>
                        <Card.Title title="Your Crops" left={() => <IconButton icon="plus-circle" color="blue" onPress={() => alert("Coming Soon")}/>} />
                        <Card.Content>
                            <List.Section>
                                {crops.map((item, key) => this.renderItem(item, key))}
                            </List.Section>
                        </Card.Content>
                    </Card>
                </KeyboardAwareScrollView>
            </ComplexLayout>
        )
    }
}

const Form = reduxForm({
    form:'profile',
    destroyOnUnmount: true,
})(ProfilePage);

export default connect(mapStateToProps, mapDispatchToProps)(Form);
