export const setTokens = (data) => {
    return {
        type: "SET_TOKENS",
        payload: data,
    };
};

export default setTokens;