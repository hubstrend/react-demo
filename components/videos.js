import React from "react";
import VideoList from '../components/videoList';

 
const Videos = ({videos}) => {
    
    const renderTitle = () => (
        <div 
            style={{
                textAlign: 'center',
                margin: '30px auto'
            }}
        >
            <h3>Lorem Ipsum</h3>
        </div>
    )

        return (
            <div>
                {renderTitle()}
                {videos.map((item,i) => (
                    <VideoList key={i} list={item}/>
                ))}
            </div>
        )
   
}


export default Videos;