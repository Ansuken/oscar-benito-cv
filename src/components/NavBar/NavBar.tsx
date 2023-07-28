import { NavBarItem } from "..";
import './navbar-styles.scss';

interface Props {
    menuItems: string[]
}

export const NavBar = ( {menuItems}: Props) => {

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <ul className="navbar-nav mx-auto">
                    {
                        menuItems.map( item => (
                            <NavBarItem 
                                key={item}
                                item={item}
                            />
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
}