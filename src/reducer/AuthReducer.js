const AuthReducer = (state, action) => {
    switch (action.type) {
        case "signIn":
            return ({
                ...state,
                signedIn: true,
                user: action.payload,
            });
        case "signOut":
            return ({
                ...state,
                signedIn: false,
                user: null,
            });
        case "error":
            return ({
                ...state,
                error: action.payload
            });
        default:
            return ({ ...state });
    }
}

export default AuthReducer;