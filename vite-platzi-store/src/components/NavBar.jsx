
import storeLogo from "../assets/images/store.png";
import { Link } from "react-router-dom";
import { MagnifyingGlass } from "phosphor-react";
import { Navbar, Button } from "keep-react";

export const NavbarComponent = () => {
  return (
    <Navbar fluid={true}>
      <Navbar.Container className="flex items-center justify-between">
        <Navbar.Container className="flex items-center">
          <Navbar.Brand>
            <img src={storeLogo} alt="Store Logo" width={50} height={50}/>
          </Navbar.Brand>
          <Navbar.Divider></Navbar.Divider>
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-8"
          >
            <Link to="/">Inicio</Link>
            <Link to="/products">Productos</Link>
            <Link to="/about">Sobre nosotros</Link>
            <Link to="/prueba-tecnica">Prueba Tecnica</Link>
          </Navbar.Container>
          <Navbar.Collapse collapseType="sidebar">
            <Navbar.Container tag="ul" className="flex flex-col gap-5">
            <Link to="/">Inicio</Link>
            <Link to="/products">Productos</Link>
            <Link to="/about">Sobre nosotros</Link>
            <Link to="/prueba-tecnica">Prueba Tecnica</Link>
            </Navbar.Container>
          </Navbar.Collapse>
        </Navbar.Container>

        <Navbar.Container className="flex gap-2">
          <Button size="sm" type="link">
            <span>
              <MagnifyingGlass size={20} color="#444" />
            </span>
            <span className="ml-2 text-metal-600">Busqueda</span>
          </Button>
          <Button size="sm" type="primary">
            Contacta
          </Button>

          <Navbar.Toggle />
        </Navbar.Container>
      </Navbar.Container>

    </Navbar>
  );
}
