import Link from 'next/link';

import FontAwesome from 'react-fontawesome';

const SideNavItems = () => {

    const items = [
        {
            type: "option",
            icon:'home',
            text:'Home',
            link:'/'
        },
        {
            type: "option",
            icon:'file-text-o',
            text:'About',
            link:'/about'
        },
        {
            type: "option",
            icon:'file-text-o',
            text:'Contact',
            link:'/contact'
        },
        {
            type: "option",
            icon:'play',
            text:'Videos',
            link:'/videos'
        }
    ]

    const showItems = () => {
        return items.map( (item,i) =>{
            return(
                <div key={i} className={item.type}>
                    <Link href={item.link}>
                        <FontAwesome name={item.icon}/>
                        {item.text}
                    </Link>
                </div>
            )
        })
    }

    return (
        <div>
            {/* Need to fix */}
            {/* {showItems()} */}

            <style jsx>{`
                 .option {
                    font-weight: 300;
                    font-size: 12px;
                    color: #bababa;
                    padding: 10px;
                    border-top: 1px solid #404040;
                }
                
                .option a {
                    color: inherit;
                    text-decoration: none;
                }
                
                .option span {
                    color:white;
                    margin-right: 10px;
                }
            `}</style>
        </div>
    )
}



export default SideNavItems;