import React, {useState} from 'react';
import {Navbar, Container} from 'tenpines-bulma-react';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
    const [menuOpened, setMenuOpened] = useState(false);
    const toggleMenuOpened = () => setMenuOpened((currentMenuOpened) => !currentMenuOpened);

    return <div className={'navbar-container'}>
        <Container>
            <Navbar>
                <Navbar.Brand>
                    <Navbar.Item to={'/'} activeClassName={'is-active'} component={NavLink}>L.P.F</Navbar.Item>
                    <Navbar.Burger onClick={toggleMenuOpened}/>
                </Navbar.Brand>
                <Navbar.Menu active={menuOpened}>
                    <Navbar.Start>
                        <Navbar.Item to={'/runas'} activeClassName={'is-active'} component={NavLink}>Runas</Navbar.Item>
                        <Navbar.Item to={'/gemas'} activeClassName={'is-active'} component={NavLink}>Gemas</Navbar.Item>
                        <Navbar.Item to={'/palabras_runicas'} activeClassName={'is-active'} component={NavLink}>Palabras Rúnicas</Navbar.Item>
                        <Navbar.Item to={'/cubo'} activeClassName={'is-active'} component={NavLink}>Cubo Horádrico</Navbar.Item>
                    </Navbar.Start>
                </Navbar.Menu>
            </Navbar>
        </Container>
  </div>
}

export default Header;