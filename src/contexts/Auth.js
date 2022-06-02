import React, { createContext , useState, useContext, useEffect } from 'react';
import { checkToken, userSignIn } from "../services/authService";
import { userSignUp, updateUserInfo, userAddMeal } from "../services/userService";
import AsyncStorage from "@react-native-async-storage/async-storage";

const UserAuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [authData, setAuthData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadStorageData();
    }, []);

    const loadStorageData = async () => {
        try {
            const authToken = await AsyncStorage.getItem("auth_token");
            const _authData = await checkToken({token:JSON.parse(authToken)});

            if (_authData.auth) {
                setAuthData(_authData.data);
            } else {
                setAuthData(null);
                await AsyncStorage.removeItem("auth_token");
            }
          } catch (error) {
              console.warn("Parse error");
          } finally {
            setLoading(false);
          }
    };

    const updateUser = async (info) => {
        const _check = await updateUserInfo(info);
        return _check ? _check.response : false;
    };

    const addMeal = async (info) => {
        return await userAddMeal(info);
    }

    const signIn = async (credentials) => {
        const _authData = await userSignIn(credentials);
        if (_authData.auth) {
            setAuthData(_authData.data);
            AsyncStorage.setItem("auth_token", JSON.stringify(_authData.data.token));
        } 
        
    };

    const signOut = async () => {
        await AsyncStorage.removeItem("auth_token");
        setAuthData(null);
    };

    const signUp = async (credentials) => {
        return await userSignUp(credentials);
    }

    return (
        <UserAuthContext.Provider value={{
            authData,
            loading,
            signIn,
            signOut,
            signUp,
            updateUser,
            addMeal,
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

export default UserAuthContext;