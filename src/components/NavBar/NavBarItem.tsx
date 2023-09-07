import { NavLink } from 'react-router-dom';
import { MenuItem } from '../../interfaces/MenuItem';

interface Props {
    item: MenuItem
}
export const NavBarItem = ({item}: Props) => {
    return (
        <li className="nav-item">
            <NavLink className="nav-link" to={`/${item.path}`}>
                {item.name}
            </NavLink>
        </li>
    )
}
