const apiConfig = {
    baseURL: process.env.REACT_APP_API_URL || "http://localhost:5001/api",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
};

export default apiConfig;