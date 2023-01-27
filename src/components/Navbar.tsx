import React from "react";
import styled from "styled-components";

const Bar = styled.nav`
  font-size: 18px;
  background-color: #fde3e9;
  border-radius: 3px;
  padding-bottom: 10px;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding-bottom: 0;
    height: 70px;
    align-items: center;
  }
`;
const MainNav = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    display: flex !important;
    margin-right: 30px;
    flex-direction: row;
    justify-content: flex-end;
  }
`;
const NavLi = styled.li`
  text-align: center;
  margin: 15px auto;
`;
const NavLink = styled.a`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    margin: 0px 10px;
  }
  color: #5a5a5a;
  font-family: Arial, Helvetica, sans-serif;
`;

const Navbar = () => {
  return (
    <div className="Navbar">
      <Bar>
        <MainNav>
          <NavLi>
            <NavLink href="home">Home</NavLink>
          </NavLi>
          <NavLi>
            <NavLink href="#">ABC</NavLink>
          </NavLi>
          <NavLi>
            <NavLink href="#">Avocados</NavLink>
          </NavLi>
          <NavLi>
            <NavLink href="#">Login</NavLink>
          </NavLi>
        </MainNav>
      </Bar>
    </div>
  );
};

export default Navbar;
