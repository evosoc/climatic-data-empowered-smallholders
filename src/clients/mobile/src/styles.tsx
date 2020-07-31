import {StyleSheet} from "react-native";
import {theme} from "./core/theme";

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
    },
    complexLayout: {
        flex: 1,
        height: '100%'
    },
    listItem: {
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },
    screen: {
        padding: 10,
        height: 100
    },
    layout: {
        flexDirection: 'column',
        flex: 1,
    },
    page: {
        position: "relative",
        flex: 1,
        width: '100%',
        alignContent: 'center',
        marginTop: 30
    },
    center: {
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 20,
        bottom: 50,
    },
    key: {

    },
    value: {
        fontWeight: 'bold',
        color: theme.colors.primary,
        padding: 5,
        marginLeft: 5,
        marginBottom: 5,
        fontSize: 14,
    },
    frame: {
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        borderColor: "#ccc",
        marginBottom: 10,
    },

    header: {
        fontSize: 36,
        color: theme.colors.primary,
        fontWeight: 'bold',
        paddingVertical: 14,
    },
    header2: {
        fontSize: 20,
        color: theme.colors.primary,
        fontWeight: 'bold',
        paddingVertical: 14,
    },
    header3: {
        fontSize: 16,
        color: theme.colors.primary,
        fontWeight: 'bold',
        paddingVertical: 14,
    },
    button: {
        margin: 10,
        padding: 8,
        borderRadius: 8,
        width: '80%',
        alignSelf: 'center',
    },
    drawerContent: {
        flex: 1,
        height: '100%',
        backgroundColor: 'green'
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        marginTop: 20,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        marginRight: 3,
        marginBottom: 10,
    },
    drawerSection: {
        marginTop: 15,
    },
    issuerDrawerSection: {
    },
    patientDrawerSection: {
    },
    relyingPartySection: {
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    drawerItem: {
        backgroundColor: theme.colors.surface,
        marginHorizontal: 23,
        borderWidth: 1,
        borderColor: '#f0f0f0'
    },
    card: {
        marginTop: 10
    },
    cell: {
        padding: 2,
        borderColor: '#d9d9d9',
        borderBottomWidth: 0.5
    },
    successHeader: {
        fontSize: 50,
        color: theme.colors.primary
    },
    paragraphText: {
        fontSize: 16,
        lineHeight: 26,
        color: theme.colors.text,
        textAlign: 'center',
        marginBottom: 14,
    },
    otp: {
        fontSize: 20,
        borderRadius: 8,
        fontWeight: 'bold',
        borderWidth: 1,
        backgroundColor: theme.colors.surface,
        padding: 15,
        elevation: 10
    }, narrative: {
        color: theme.colors.primary,
        fontSize: 16,
        fontWeight: "bold"
    },
    cardAlert: {
        backgroundColor: theme.colors.accent

    }

});

export default styles;
