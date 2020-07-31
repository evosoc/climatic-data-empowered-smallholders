import Page from "./Page";
import React from "react";
import {Text, View} from 'react-native';
import { connect } from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from "@store";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {ComplexLayout} from "../layouts";
import styles from "../styles";
import {Card} from "react-native-paper";
import {Icon} from "react-native-elements";
import {MaterialCommunityIcons} from "@expo/vector-icons";

class CommunityPost extends Page {
    render() {
        const post =     {
            subject: "Frost Protection Techniques",
            commentCount: 14,
            upvotes: 75,
            downvotes: 1,
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel lacus ultricies, vulputate elit ut, fermentum magna. Fusce ultrices turpis sed est pellentesque, sed malesuada leo vehicula. Ut gravida sem in nibh congue maximus. Nulla tincidunt aliquam tortor nec mollis. Etiam feugiat diam leo, at elementum justo rutrum eget. Aliquam id sapien quis ipsum tempor tincidunt. 
            
            Quisque augue nibh, tristique et dapibus quis, ultricies sit amet lorem. Maecenas suscipit elit at dolor interdum, ut aliquam libero elementum. Donec luctus arcu eu gravida convallis. Integer finibus feugiat tellus vitae aliquet. Aliquam non nunc neque. Etiam sit amet ipsum semper, feugiat felis feugiat, scelerisque tortor. Integer porta vestibulum laoreet. Etiam aliquet nisl quis lobortis suscipit.

Cras viverra magna sed nulla eleifend, a dignissim magna viverra. Nullam semper fringilla metus, eu dictum risus hendrerit a. In et semper lorem. Donec ut tristique lacus, quis gravida augue. Donec tincidunt sem a risus euismod suscipit. Duis nec quam est. Aliquam nunc justo, tempus at feugiat sit amet, accumsan ac mauris.`
        };

        return (
            <ComplexLayout style={{ flex: 1 }}>
                <KeyboardAwareScrollView style={{
                    flex: 1,
                    paddingHorizontal: 20
                }}>
                    <Card>
                        <Card.Title title={post.subject} />
                        <Card.Content>

                            <View style={{ flexDirection: "row"}}>
                                <MaterialCommunityIcons name="thumb-up"/>
                                <Text> {post.upvotes}   </Text>
                                <MaterialCommunityIcons name="thumb-down"/>
                                <Text> {post.downvotes}

                                </Text>
                            </View>


                            <Text>{ post.content }</Text>
                        </Card.Content>
                    </Card>
                </KeyboardAwareScrollView>
            </ComplexLayout>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommunityPost);
