import "./Header.css";
import Container from "../Container/Container";

function Header() {
  return (
    <header className="header">

      <Container>

        <div className="header-content">

          <div className="logo">

            📚

            <span>Lecturia Clone</span>

          </div>

          <div className="search">

            <input
              type="text"
              placeholder="Buscar cuentos..."
            />

          </div>

        </div>

      </Container>

    </header>
  );
}

export default Header;