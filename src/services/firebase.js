import {FieldValue,Firebase} from '../lib/firebase'


 export const  doesUsernameExists=async (username)=>{
  const result =await Firebase.firestore().collection('users').where('username','==',username).get()
  return result.docs.map(user=> user.data().length > 0)

}