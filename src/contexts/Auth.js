import React, {createContext , useState, useContext, useEffect} from 'react';
import authService from "../services/authService";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const UserAuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [authData, setAuthData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadStorageData();
    }, []);

    const loadStorageData = async () => {
        try {
            const authToken = await AsyncStorage.getItem("auth_token");
            const _authData = authService.checkToken({token:JSON.parse(authToken)});

            if (_authData.auth) {
              setAuthData(_authData.data);
            }
          } catch (error) {
              console.warn(error);
          } finally {
            setLoading(false);
          }
    };

    const signIn = async (credentials) => {
        const _authData = await authService.signIn(credentials);
        setAuthData(_authData.data);
        AsyncStorage.setItem("auth_token", JSON.stringify(_authData.token));
    };

    const signOut = async () => {
        await AsyncStorage.removeItem("auth_token");
        setAuthData(undefined);
    };

    const signUp = async (credentials) => {
        await authService.signUp(credentials);
    }

    return (
        <UserAuthContext.Provider value={{
            authData,
            loading,
            signIn,
            signOut,
            signUp,
        }}>
            {children}
        </UserAuthContext.Provider>
    );
};

export function useAuth() {
    const context = useContext(UserAuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
