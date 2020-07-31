import React from "react";
import {FlatList} from "react-native";
import {withTheme, List} from "react-native-paper";
import {connect} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from "@store";
import styles from "../styles";
import {Pages} from "@common";

class Community extends React.Component<any, any> {

    componentDidMount(): void {
        this.props.getCommunityPosts();
    }

    render() {
        const { loading, posts, onRefresh, navigation } = this.props;

        let itemClick = (item: any) => {
            navigation.navigate(Pages.CommunityPost, {localId: item.localId});
        };

        itemClick = this.props.itemClick || itemClick;


        const renderItem = (item: any) => {
            const description = `Comments: ${item.commentCount} | Up: ${item.upvotes} | Down: ${item.downvotes}`;
            return (<List.Item
                style={styles.listItem}
                title={`${item.subject}`}
                description={description}
                onPress={() => {itemClick(item)}}
                left={props => <List.Icon {...props} icon="forum-outline"/>}
            />);
        };
        const _items = posts || [];
        const _loading = loading || false;
        return (
            <FlatList
                data={_items}
                renderItem={({item}) => renderItem(item)}
                keyExtractor={(_item, index) => index.toString() }
                refreshing={_loading}
                onRefresh={onRefresh}
            />
        );
    }


}

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(Community));
