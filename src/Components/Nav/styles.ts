import styled from "styled-components";

export const NavContainer = styled.nav`
  background: #fff;
  height: 75px;
  display: flex;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
  @media screen and (max-width: 960px) {
    transition: 0.9s all ease;
    height: 60px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 10px 80px;
  @media screen and (max-width: 960px) {
    padding: 0 20px;
  }
`;

export const Logo = styled.img`
  width: 90px;
  height: 30px;
`;
