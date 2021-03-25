import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { auth } from '../firebase'
import { login } from '../user/UserSlice'
import './Login.css'
function Login() {
    console.log()
    const [email , setEmail]= useState("")
    const [password , setPassword] = useState("")
    const [name ,  setName] = useState("")
    const [profilePic , setprofilePic] = useState("")
    const dispatch = useDispatch()
    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email,password)
        .then(userAuth => {
            dispatch(login({
                email:userAuth.user.email,
                uid:userAuth.user.uid,
                displayName: userAuth.user.displayName,
            }))
        }).catch(error => alert(error))
    }



    const register = () => {
        if(!name) {
            return alert("please enter your name")
        }
        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
               displayName: name,
               photoURL: profilePic, 
            })
            .then(() => {
                dispatch(
                    login({
                    displayName:userAuth.user.displayName,
                    email:userAuth.user.email,
                    uid: userAuth.user.uid,
                }))
            })
        }).catch(error => alert(error.messege))
    }
    return (
        <div className="login">
            <h1>Logo</h1>

            <form>
                <input
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="name" 
                type="text"/>

                <input 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                placeholder="email" 
                type="email"/>

                <input 
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="password" 
                type="password"/>
                
                <button type="submit" onClick={loginToApp}>Sign in</button>                
            </form>
            <p>Not a member yet?</p>
            <span className="login-register" onClick={register}>Register Now</span>
        </div>
    )
}

export default Login
