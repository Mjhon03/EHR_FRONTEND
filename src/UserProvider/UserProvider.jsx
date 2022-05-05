import React from 'react'
export const UserContext = React.createContext({ user : 'user'});

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={JSON.parse(localStorage.getItem('userInfo'))}>
        {children}
    </UserContext.Provider>
  )
}
