import React from "react";
import {Image, Text, View} from "react-native";
import {ComplexLayout} from "../layouts";
import {Card, Drawer, withTheme, Avatar, DataTable} from "react-native-paper";
import {connect} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from "@store";
import {Pages} from "@common";
import styles from "../styles";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {Button} from "@components";
import {Time} from "../components/Time";
import {capitalizeFirstLetter} from "../core/utils";
import Moment from 'moment';


class HomePage extends React.Component<any, any> {

    renderCards = (data: any = []) => {
        const { navigation } = this.props;
        return data.map((x: any, i) => {
            return (
                <Card key={i} style={{
                    margin: 10,
                    elevation: 10
                }}>
                    <Card.Title title={x.dayOfWeek} subtitle="The Weather Company" />
                    <Card.Content>
                        <Text style={styles.narrative}>{x.narrative}</Text>

                        <View style={{ flex: 1, flexDirection: "row", marginTop: 15}}>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.key}>Temp Min:</Text>
                                <Text style={styles.value}>{x.temperatureMin}&deg;F</Text>

                                <Text style={styles.key}>Sunrise:</Text>
                                <Text style={styles.value}><Time date={x.sunriseTimeLocal}/></Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.key}>Temp Max:</Text>
                                <Text style={styles.value}>{x.temperatureMax }&deg;F</Text>

                                <Text style={styles.key}>Sunset:</Text>
                                <Text style={styles.value}><Time date={x.sunsetTimeUtc}/></Text>

                            </View>
                        </View>

                        <Text style={styles.header3}>Suggestions</Text>
                        <Text style={styles.paragraph}>
                            Weather like this often produces a 20% better yield if your crops are covered.
                        </Text>
                    </Card.Content>
                    <Card.Actions>
                        <Button onPress={() => navigation.navigate(Pages.Community)}>Community Wiki</Button>
                    </Card.Actions>
                </Card>
            )
        });
    };

    dayForecast = (data: any = []) => {
        const {farmer} = this.props;
        const address = farmer ? farmer.address : "";
        const rows = data.map((x, i) => {
            return (<DataTable.Row key={i}>
                <DataTable.Cell><Time date={x.validTimeLocal}/></DataTable.Cell>
                <DataTable.Cell numeric>{x.temperature}&deg;F</DataTable.Cell>
                <DataTable.Cell numeric>{capitalizeFirstLetter(x.precipType)} {x.precipChance}%</DataTable.Cell>
            </DataTable.Row>);
        });

        return (
            <Card>
                <Card.Title title={"Today - " + Moment(new Date()).format("dddd DD-MMM")} subtitle={ address } />
                <Card.Content>
                    <DataTable>
                        <DataTable.Header>
                            <DataTable.Title>Time</DataTable.Title>
                            <DataTable.Title numeric>Temp.</DataTable.Title>
                            <DataTable.Title numeric>Precip.</DataTable.Title>
                        </DataTable.Header>
                        {rows}
                    </DataTable>
                </Card.Content>
            </Card>
        )
    };

    render() {
        const { navigation, logout, week, today } = this.props;
        return (
            <ComplexLayout>
                <KeyboardAwareScrollView>

                    <Card style={{
                        ...styles.cardAlert,
                        margin: 10,

                    }}>
                        <Card.Title
                            title="Suggestions for Today"
                            subtitle="FROST ALERT"
                            left={(props) => <Avatar.Icon {...props} icon="alert" />}
                        />
                        <Card.Content>
                            <Text style={styles.paragraph}>
                                There is a Frost Alert due this evening.  We suggest that you cover your beans to avoid
                                ice burns.
                            </Text>
                            <Text style={styles.paragraph}>
                                Some community suggestions for Java Beans can be found here:
                            </Text>
                            <Button onPress={() => navigation.navigate(Pages.Community)}>Community Wiki</Button>
                        </Card.Content>
                    </Card>
                    {this.dayForecast(today)}
                    <Card style={{ margin: 10}}>
                        <Card.Title
                            title="7 Day Forecast"/>
                        <Card.Content>
                            {this.renderCards(week)}
                        </Card.Content>
                    </Card>
                </KeyboardAwareScrollView>
            </ComplexLayout>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(HomePage));
