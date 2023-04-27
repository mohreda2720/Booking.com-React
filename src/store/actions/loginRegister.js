import axiosConfig from "../../axiosConfig/axiosConfig"

export function register(userData) {
    return (dispatch) => {
        axiosConfig.post(`/users`, userData).then((res) => {
            console.log(res)
            dispatch({ type: "REGISTER_USER", payload: res.data })
        })
            .catch((err) => {
                console.log(err);
            })
    }
}

export function loginUser(user) {
    return {
        type: "LOGIN_USER",
        payload: user,
    };
}


export function getAllUser() {
    return (dispatch) => {
        return axiosConfig.get(`/users`,).then((res) => {
            dispatch({ type: "GET_USER", payload: res.data })
        })
            .catch((err) => {
                console.log(err);
            })
    }
}

export function logoutUser() {
    return {
        type: "LOGOUT_USER",
    }

}

