import { Avatar } from '@material-ui/core'
import React from 'react'
import moment from 'moment';
import './Post.css'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import Timelineicon from './Timelineicon';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
function Post({name , description , messege ,imgUrl , comment}) {
   
    return (
        
        <div className="post">
            <div className="post-header">
                <Avatar/>
                <div className="post-info">
                    <h2>{name}</h2>
                    <p>{moment().startOf('hour').fromNow()}</p>
                </div>
            </div>
            <div className="post-body">
                <p>{messege}</p>

                <div className="action-area">
                    <div className="comment-area">
                    <Timelineicon Icon={ThumbUpAltIcon} color ="#3ab4fb"/>
                    <textarea placeholder="Comment Here" cols="30" rows="2"></textarea>
                    <Timelineicon Icon={ChatBubbleIcon} color ="#3ab4fb"/>
                    </div>
                </div>
            </div>
            

            
            <div className="comment-are">
                <p>{comment}</p>
            </div>
        </div>
    )
}

export default Post
