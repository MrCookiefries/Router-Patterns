import { NavLink } from "react-router-dom";

type NavBarProps = {
    names?: string[];
}

const NavBar = ({
    names = ["whiskey", "duke", "perry", "tubby"]
}: NavBarProps) => (
    <nav className="NavBar">
        <ul>
            <li>
                <NavLink exact to="/dogs">
                    Home
                </NavLink>
            </li>
            {names.map(n => (
                <li key={n}>
                    <NavLink exact to={`/dogs/${n}`}>
                        {n}
                    </NavLink>
                </li>
            ))}
        </ul>
    </nav>
);

export default NavBar;
