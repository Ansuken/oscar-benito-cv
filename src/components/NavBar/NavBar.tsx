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
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="material-symbols-outlined">
                    menu
                </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
                    
            </div>
        </nav>
    )
}