import {Profile} from "@models";

export interface PageProps {
    navigation?: any;
    user?: any;
    route?: any;
    params?: any;
    logout?: () => void;
    loading: boolean;
    getProfile: () => void;
    profile?: Profile;
    loadingStarted?: () => void;
    loadingEnded?: () => void;
}
