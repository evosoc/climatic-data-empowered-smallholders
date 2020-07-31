import config from "@config";
import client from "./client";

export const getProfile = async () => {
    try {
        const res = await client.get(config.api.profileEndpoints.get);
        return res.data;
    } catch (e) {
        if (e && e.response && e.response.data) {
            throw e.response.data;
        }
        throw e;
    }
};
