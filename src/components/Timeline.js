import React, {useEffect, useState} from 'react'
import './Timeline.css'
import Timelineicon from './Timelineicon'
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import VideocamIcon from '@material-ui/icons/Videocam';
import Post from './Post';
import {db} from '../firebase'
import firebase from 'firebase'
import { selectUser } from '../user/UserSlice';
import { useSelector } from 'react-redux';

function Timeline({Icon , color}) {
    const user = useSelector(selectUser)
    const [input , setInput] = useState('')
    const [posts , setPosts] = useState([]);
    const [imgUrl , setImage] = useState("")
    const mystyle={background: 'linear-gradient(to right, #C4E4F7, #FFFFFF)'}
   
    useEffect(() => {
        db.collection("posts")
        .orderBy("timestamp" , "desc")
        .onSnapshot((snapshot) => 
            setPosts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        )
    }, []);
    
    const makePost = e => {
        e.preventDefault()

        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            messege: input,
            photoUrl : imgUrl,
            timestamp : firebase.firestore.FieldValue.serverTimestamp()
    
        })

        setInput("");
        setImage();

    }
   

    return (
            <div className="timeline">
                <div className="timeline-input-content" style={mystyle}>
                    <div className="timeline-input">
                        <form>
                            <input
                            value={input} 
                            onChange={e => setInput(e.target.value)} 
                            type="text"/>

                            <input
                            value={imgUrl}
                            onChange={(e) => setImage(e.target.value)}
                            type="file"/>

                            <button onClick={makePost} type="submit">Post</button>
                        </form>
                    </div>
                    <div className="timeline-input-op">
                        <Timelineicon Icon={AudiotrackIcon} color ="#242424"/>
                        <Timelineicon Icon={PhotoLibraryIcon} color ="#242424"/>
                        <Timelineicon Icon={VideocamIcon} color ="#242424"/>
                    </div>
                </div>
                
                {posts.map(({id, data: {name , description, messege , imgUrl ,comment}}) => (
                    <Post
                    key={id}
                    name= {name}
                    description={description}
                    messege={messege}
                    photoUrl={imgUrl}
                    comment = {comment}
                    />
                ))}

            </div>
           
        
    )
}

export default Timeline
