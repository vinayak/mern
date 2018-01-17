export default(state='', payload)=>{
  switch(payload.type){
    case 'login':
      return payload.token
    case 'logout':
      return ''
    default:
      return state;
  }
}
