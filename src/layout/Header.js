import React from 'react';
import {Navbar, Container} from 'tenpines-bulma-react';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
    return <div className={'navbar-container'}>
        <Container>
            <Navbar>
                <Navbar.Brand>
                    <NavLink to={'/'} activeClassName={'is-active'} className={'navbar-item'}>L.P.F</NavLink>
                    <Navbar.Burguer className={'navbar-burger burger'}></Navbar.Burguer>
                </Navbar.Brand>
                <Navbar.Menu>
                    <Navbar.Start>
                        <NavLink to={'/runas'} activeClassName={'is-active'} className={'navbar-item'}>Runas</NavLink>
                        <NavLink to={'/gemas'} activeClassName={'is-active'} className={'navbar-item'}>Gemas</NavLink>
                        <NavLink to={'/palabras_runicas'} activeClassName={'is-active'} className={'navbar-item'}>Palabras Rúnicas</NavLink>
                        <NavLink to={'/cubo'} activeClassName={'is-active'} className={'navbar-item'}>Cubo Horádrico</NavLink>
                    </Navbar.Start>
                </Navbar.Menu>
            </Navbar>
        </Container>
  </div>
}

export default Header;