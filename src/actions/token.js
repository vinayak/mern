export const login = (token) =>{
  console.log("logging in... ", token)
  return {
    type: 'login',
    token: token
  }
}

export const logout = () =>{
  console.log("loggin out .....")
  return {
    type: 'logout'
  }
}
