import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 0 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #f3f2f2;

  @media (min-width: 1120px) {
    overflow: hidden;
  }

  @media (max-width: 1120px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Background = styled.div`
  background-color: pink;
  max-width: 862px;
  @media (max-width: 1120px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const BackgroundImage = styled.img`
  height: 100vh;
  @media (max-width: 1120px) {
    height: 30vh;
  }
`;

export const Content = styled.div`
  max-width: 408px;
  margin: 8% 14%;
  background-color: red;

  @media (max-width: 1500px) {
    margin: 8% 8%;
  }

  @media (max-width: 1380px) {
    margin: 8% 6%;
  }

  @media (max-width: 1300px) {
    margin: 8% 4%;
  }

  /**
  * TODO - ficar atento nessa parte
  */
  @media (max-width: 1120px) {
    margin-bottom: 60%;
    width: 408px;
  }

  @media (max-width: 408px) {
    max-width: 320px;
  }
`;

export const Form = styled.div``;

export const Footer = styled.div`
  text-align: center;
  color: var(--desativado);
  letter-spacing: 0.1px;
  color: #bfbfbf;
  opacity: 1;
  font-size: 10px;
  background-color: yellow;
  margin-top: 20vh;

  @media (max-width: 1120px) {
    display: none;
  }
`;

export const DescriptionTitle = styled.h1`
  text-align: center;
  font-size: 18px;
  margin-bottom: 40px;
  @media (max-width: 1120px) {
    display: none;
  }
`;

export const DescriptionInput = styled.p`
  font-size: 12px;
  margin-left: 16px;
  margin-bottom: 8px;
  color: #271718;
`;

export const ContentLogo = styled.div`
  max-width: 408px;
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 100%;
  @media (min-width: 1120px) and (max-width: 1250px) {
    max-width: 308px;
  }

  @media (max-width: 1120px) {
    width: 80%;
    margin-bottom: 5%;
  }
`;

export const Input = styled.input`
  background: #fff;
  height: 48px;
  border-radius: 4px;
  padding: 16px;
  width: 100%;

  border: 2px solid;
  border-color: #e2e2e2;
  color: #353f46;

  display: flex;
  align-items: center;

  margin-bottom: 32px;
`;

export const Button = styled.button`
  background: #fb637e;
  height: 48px;
  border-radius: 4px;
  border: 0;
  padding: 0 16px;
  color: #fff;
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  margin-top: 8px;
  cursor: pointer;
`;
