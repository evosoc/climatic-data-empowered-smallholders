import * as React from 'react';
import {AppRegistry, I18nManager} from 'react-native';
import {DarkTheme, DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import App from './src/index';
import { Provider as StoreProvider } from 'react-redux';
import { store, persistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import {useColorScheme} from "react-native-appearance";
import {Updates} from "expo";
import {PreferencesContext} from "./src/PreferencesContext";

function Main() {
    const colorScheme = useColorScheme();
    const [theme, setTheme] = React.useState<'light' | 'dark'>(
        colorScheme === 'dark' ? 'dark' : 'light'
    );
    const [rtl] = React.useState<boolean>(I18nManager.isRTL);

    function toggleTheme() {
        setTheme(theme => (theme === 'light' ? 'dark' : 'light'));
    }

    const toggleRTL = React.useCallback(async () => {
        I18nManager.forceRTL(!rtl);
        await Updates.reloadFromCache();
    }, [rtl]);

    const preferences = React.useMemo(
        () => ({
            toggleTheme,
            toggleRTL,
            theme,
            rtl: (rtl ? 'right' : 'left') as 'right' | 'left',
        }),
        [rtl, theme, toggleRTL]
    );
    return (
        <StoreProvider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <PreferencesContext.Provider value={preferences}>
                    <PaperProvider theme={
                        theme === 'light' ? {
                            ...DefaultTheme,
                            colors: {
                                ...DefaultTheme.colors,
                                primary: "#04478a"
                            }
                        } : {
                            ...DarkTheme,
                            colors: { ...DarkTheme.colors }
                        }
                    }>
                        <App />
                    </PaperProvider>
                </PreferencesContext.Provider>
            </PersistGate>
        </StoreProvider>
    );
}

export default Main;
AppRegistry.registerComponent('main', () => Main);

