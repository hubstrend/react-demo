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
            icon:'cookie-bite',
            text:'Our Snacks',
            link:'/'
        },
        {
            type: "option",
            icon:'person-booth',
            text:'Refer an Office',
            link:'/'
        },
        {
            type: "option",
            icon:'cookie',
            text:'Get a free sample',
            link:'/'
        },
        {
            type: "option",
            icon:'phone',
            text:'Request a call',
            link:'/'
        }
    ]

    const showItems = () => {
        return items.map( (item,i) =>{
            return(
                <div key={i} className={item.type}>
                    <FontAwesome name={item.icon}/>
                    <Link href={item.link}>                        
                        <a>{item.text}</a>
                    </Link>
                </div>
            )
        })
    }

    return (
        <div>
            {showItems()}

            <style jsx>{`
            `}</style>
        </div>
    )
}



export default SideNavItems;