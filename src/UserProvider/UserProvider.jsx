import React from 'react'
export const UserContext = React.createContext({ user: 'user' });

export const UserProvider = ({ children }) => {
  const changeUser = (photo) => {
    let oldData = JSON.parse(localStorage.getItem('userInfo'))
    oldData[0].foto = photo
    localStorage.setItem('userInfo',JSON.stringify(oldData))
    console.log(oldData);
  }

  const data = {
    user: JSON.parse(localStorage.getItem('userInfo')),
    update: changeUser
  }
  return (
    <UserContext.Provider value={data}>
      {children}
    </UserContext.Provider>
  )
}
