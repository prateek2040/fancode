import logo from '../../assets/fancode-fc.png';
import Button from '../button';
function Header()
{
    let genres = ["All","Action","Comedy","Horror","Drama","Sci-Fi"]
    return <div className="header">
        <div className="header__logo">
            <img src={logo} alt='logo'/>
        </div>
        <div className="header__tabs">
            {
                genres.map((item)=>{
                    return <Button>{item}</Button>

                })
            }
        </div>
    </div>
}


export default Header;