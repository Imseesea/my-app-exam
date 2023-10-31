import Nav from "./Nav";
import styled from "styled-components";

function Header() {
  return (
    <HeaderStyle>
      <h1 id="logo">
        <a href="/">logo</a>
      </h1>
      <Nav />
    </HeaderStyle>
  );
}

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 2rem;
  border-bottom: 1px solid #ddd;
  #logo {
    font-size: 2rem;
    a {
      display: block;
      text-decoration: none;
      color: blue;
    }
  }
`;

export default Header;
