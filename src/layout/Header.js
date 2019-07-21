import React, {useState} from 'react';
import {Navbar, Container} from 'tenpines-bulma-react';
import {NavLink} from 'react-router-dom';

const Link = ({to, children, onClick}) => <Navbar.Item to={to} activeClassName={'is-active'} component={NavLink} onClick={onClick}>{children}</Navbar.Item>;

const Header = (props) => {
    const [menuOpened, setMenuOpened] = useState(false);
    const toggleMenuOpened = () => setMenuOpened((currentMenuOpened) => !currentMenuOpened);
    const closeMenu = () => setMenuOpened(false);

    return <div className={'navbar-container'}>
        <Container>
            <Navbar>
                <Navbar.Brand>
                    <Navbar.Item to={'/'} activeClassName={'is-active'} component={NavLink}>L.P.F</Navbar.Item>
                    <Navbar.Burger onClick={toggleMenuOpened}/>
                </Navbar.Brand>
                <Navbar.Menu active={menuOpened}>
                    <Navbar.Start>
                        <Link to={'/runas'} onClick={closeMenu}>Runas</Link>
                        <Link to={'/gemas'} onClick={closeMenu}>Gemas</Link>
                        <Link to={'/palabras_runicas'} onClick={closeMenu}>Palabras Rúnicas</Link>
                        <Link to={'/cubo'} onClick={closeMenu}>Cubo Horádrico</Link>
                    </Navbar.Start>
                </Navbar.Menu>
            </Navbar>
        </Container>
  </div>
}

export default Header;