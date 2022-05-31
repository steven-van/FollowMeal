import React, {createContext} from 'react';

const UserAuthContext = createContext();

// const AuthProvider = ({children}) => {

//     const [token, setToken] = useState(null);
//     const [userData, setUserData] = useState(null);
//     const [loading, setLoading] = useState(true);

//     const signIn = async () => {

//         const _userData;

//         setUserData();
//     };

//     const signOut = async () => {
//         setUserData(undefined);
//     };

//     return (
//         <AuthContext.Provider value={{
//             userData,
//             token,
//             loading,
//             signIn,
//             signOut
//         }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };