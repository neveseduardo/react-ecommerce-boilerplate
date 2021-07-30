import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import Icon from 'components/GeneralUI/Icon'
import { TransitionGroup, CSSTransition } from "react-transition-group";

function Header() {

    const [showSidebar, setShowsidebar] = useState(false)

    useEffect(() => {
        console.log('show', showSidebar)
    }, [])

    const toggleSidebar = (e) => {
        e.stopPropagation()
        setShowsidebar(!showSidebar)
    }

    return (
        <header className="homepage-header">
            <nav className="homepage-nav">
                <h1><a onClick={toggleSidebar} className="homepage-bars-icon"><Icon name="bars" /></a> <a>ESHOES</a></h1>
                <form>
                    <input name="search" placeholder="Pesquisar..." />
                    <Icon name="search" />
                </form>
                <div className="homepage-right-icons">
                    <ul>
                        <li><NavLink to={"/home"}><Icon prefix="far" name="heart" /></NavLink></li>
                        <li><NavLink to={"/home/contact"}><Icon name="shopping-bag" /></NavLink></li>
                        <li><NavLink to={"/home/product/1"}><Icon prefix="far" name="user" /></NavLink></li>
                    </ul>
                </div>

                <div onClick={toggleSidebar} className={showSidebar ? 'homepage-sidebar show' : 'homepage-sidebar'}>
                    <ul onClick={e => e.stopPropagation()}>
                        <a onClick={toggleSidebar} className="homepage-sidebar-toggle"><Icon name="times" className="mr-1" />FECHAR</a>
                        <form>
                            <input name="search" placeholder="Pesquisar..." />
                            <Icon name="search" />
                        </form>
                        <li><NavLink onClick={toggleSidebar} to={"/home"}><Icon name="home" className="mr-1" />Loja</NavLink></li>
                        <li><NavLink onClick={toggleSidebar} to={"/home/about"}><Icon prefix="far" name="heart" className="mr-1" />Favoritos</NavLink></li>
                        <li><NavLink onClick={toggleSidebar} to={"/home/contact"}><Icon prefix="far" name="user" className="mr-1" />Login/registro</NavLink></li>
                    </ul>
                </div>


            </nav>
        </header>
    )
}

export default Header;