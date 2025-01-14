import React, { createContext, useState } from 'react'

export const userContext = createContext()

export const UserProvider = ({children}) => {
    const [userData,setUserData] = useState([])

  return (
 <userContext.Provider value={{userData,setUserData}}>
    {children}
 </userContext.Provider>
  )
}

export default UserProvider