import React from 'react'

const VideoList = ({list}) => {
	return (
        <div className="container">
            <div className="colFour">
                <div className="videoWrapper">
                    <iframe
                        title="videoplayer"
                        width="600px"
                        height="300px"
                        src={`https://www.youtube.com/embed/${list.url}`}
                        // allowfullscreen="allowfullscreen"
                        // mozallowfullscreen="mozallowfullscreen" 
                        // msallowfullscreen="msallowfullscreen" 
                        // oallowfullscreen="oallowfullscreen" 
                        // webkitallowfullscreen="webkitallowfullscreen"
                    >

                    </iframe>
                    <h2>{list.title}</h2>
                    <p>{list.price}</p>

                    <style jsx>{`   
                    
                `}</style>
            </div> 
        </div>
        </div>
        
	)
}

export default VideoList;
