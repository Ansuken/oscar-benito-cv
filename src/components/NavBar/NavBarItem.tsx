export const NavBarItem = ({item}: {item: string}) => {
    return (
        <li className="nav-item">
            <a className="nav-link" aria-current="page" href={`#${item}`}>{item}</a>
        </li>
    )
}
