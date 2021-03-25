import './App.css';
import React, {useEffect} from 'react'
import Header from './components/Header';
import Login from './components/Login';
import Sidebar from './components/Sidebar-left';
import Timeline from './components/Timeline';
import { login, logout, selectUser } from './user/UserSlice';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import RightSidebar from './components/Right-sidebar';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        // user logged in
        dispatch(login({
          email: userAuth.email,
          uid:userAuth.uid,
          displayName: userAuth.displayName,
          photoURL:userAuth.photoURL,

        }))
      }
      else{
        //user not logged in
        dispatch(logout())
      }
    })
  },[])
  return (
    <div className="App">
          <Header/>
          {!user ? <Login/> : (
            <div className="app-body">
            <Sidebar/>
            <Timeline/>
            <RightSidebar/>
          </div>
          )}
          
    </div>
  );
}

export default App;
