

const Buttons = (props) => {
    let template = null;

    switch(props.type) {
        case 'loadmore':
            template = (
                <div
                    className="blue_btn"
                    onClick={props.loadMore}                    
                >
                    {props.cta}

                    <style jsx>{`
                        .blue_btn {
                            text-align: center;
                            background: #f7941d;
                            border-bottom: 1px solid #d7d7d7;
                            font-weight: 500;
                            color: #eeeeee;
                            padding:9px;
                            cursor: pointer;
                            font-size: 15px;
                        }
                    `}</style>
                </div>
            );
            break;
        default:
            template = null;
    }

    
    return template;
}

export default Buttons;