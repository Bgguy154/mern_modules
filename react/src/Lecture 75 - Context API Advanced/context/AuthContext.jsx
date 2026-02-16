import { createContext, useContext, useState } from "react"

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user,setUser]=useState();
    const [prevUser,setPrevUser]=useState();

    function SignUp({name,email,password,phone}){
        if(!name || !email || !password || !phone){
            return false;
        }
        setUser({name,email,password,phone});
        setPrevUser({name,email,password,phone});
        return true;
    }

   function Login({ email, password }) {
  if (!prevUser) return false;

  if (email !== prevUser.email || password !== prevUser.password) {
    return false;
  }

  setUser(prevUser);   // ✅ IMPORTANT
  return true;
}



    function Logout(){
       if(user){
        setUser(null);
        return true;
       }
       return false;
    }


    return (<AuthContext.Provider value={{ user,SignUp,Login,Logout }}>{children}</AuthContext.Provider>)
}

// export function useAuth(){
//     return useContext(AuthContext);
// }

