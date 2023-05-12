import { Avatar } from '@mui/material'
import React from 'react'

function PostCard(props) {
  return (
    <div className='card '>
        {/* user info */}
        <div class="flex items-center space-x-4">
        <Avatar image = {props.image}/>
        <div class="font-medium dark:text-white">
            <div>{props.name}</div>
            <div class="text-sm text-gray-500 dark:text-gray-400">{props.timeStamp}</div>
        </div>
       
        </div>
         {/* post info */}
        <div className='post-info'>
            <div>

            </div>
            <img></img>
            
        </div>
        {/* post interaction buttton */}
        <div className='post-interaction'>

        </div>
        {/* comments */}
        <div className='comments'>

        </div>

    </div>
  )
}

export default PostCard