import { NavBarItem } from "..";
import { MenuItem } from "../../interfaces/MenuItem";
import './navbar-styles.scss';

interface Props {
    menuItems: MenuItem[]
}

export const NavBar = ( {menuItems}: Props) => {

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <ul className="navbar-nav mx-auto">
                    {
                        menuItems.map( item => (
                            <NavBarItem 
                                key={item.path}
                                item={item}
                            />
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
}