

const NBvideo = () => (
    <div className="container">
        <div className="row ">
            <div className="NBvideo-wrapper align-vert">
                <iframe title="NatureBox Office Snacks" src="https://www.youtube.com/embed/y7BBRZJEUkg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </div>
        </div>  

        <style jsx>{`
            .NBvideo-wrapper {  
                margin: 40px auto;
            }
            .NBvideo-wrapper iframe{
                -webkit-background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                width: 320px;
                height: 180px;
            }

            @media(min-width:560px){
                .NBvideo-wrapper iframe{
                    width: 560px;
                    height: 315px;
                }
            }
        `}</style>
              
    </div>
)

export default NBvideo;