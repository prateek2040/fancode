import logo from '../../assets/fancode-fc.png';
import Button from '../button';
import useFetchGenre from "../../hooks/useFetchGenre";
import Search from '../Search/Search';
function Header(props)
{
    const  genres  = useFetchGenre();
    return <div className="header">
        <div className="header__logo">
            <img src={logo} alt='logo' width="168" height="36"/>
        </div>
        <div className="header__tabs">
            {
                props.render(genres)
            }
        </div>
    </div>
}


export default Header;