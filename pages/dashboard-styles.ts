import styled from "@emotion/styled";

export const Header = styled.div`
  height: 8vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background: #fff;
  @media (max-width: 810px) {
    height: 4vh;
  }
`;

export const HeaderContentLogo = styled.div`
  max-width: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 750px) {
    margin: 10px 10px;
  }
`;

export const HeaderLogo = styled.img`
  width: 100%;
  bottom: 100%;
  @media (max-width: 750px) {
    width: 75%;
  }
`;

export const HeaderContentButtons = styled.div`
`;

export const HeaderButton = styled.button`
  height: 7vh;
  width: 112px;
  margin: 0 4px;
  background: #f3f2f2;
  border-radius: 8px 8px 0 0;
  border: 0;
  margin-top: 10px;
  cursor: pointer;
`;

export const HeaderButtonParagraphLojas = styled.p`
  margin: 0;
  color: #fb637e;
`;

export const HeaderButtonParagraphSair = styled.p`
  margin: 0;
`;

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 0 0;
  background: #f3f2f2;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 64px;
`;

export const ContentInfo = styled.div`
  width: 744px;
  height: 80vh;
  @media (max-width: 750px) {
    width: 100%;
  }
`;

export const Search = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100px;
  border-bottom: 2px solid;
  border-color: #e2e2e2;
  @media (max-width: 750px) {
    margin: 0 10px;
  }
`;

export const SearchInputContent = styled.div`
  border-radius: 4px;
  border: 2px solid;
  border-color: #e2e2e2;
  color: #353f46;
  display: flex;
  height: 48px;
  overflow: hidden;
  margin-right: 14px;
`;

export const SearchIcon = styled.div`
  height: 100%;
  background-color: #fff;
`;

export const SearchInput = styled.input`
  width: 576px;
  height: 100%;

  background: #fff;
  padding: 16px;

  border: 0;

  display: flex;
  align-items: center;
`;

export const SearchButton = styled.button`
  width: 152px;
  height: 48px;
  background: #fb637e;
  border-radius: 4px;
  border: 0;
  padding: 0 16px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  @media (max-width: 750px) {
    width: 48px;
    background: #bfbfbf;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Info = styled.div`
  margin-top: 26px;
`;

export const InfoHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  @media (max-width: 750px) {
    background: #fff;
    height: 80px;
    align-items: center;
  }
`;

export const InfoHeaderIcon = styled.div`
  border-radius: 100%;
  background: #edecf5;
  width: 78px;
  height: 78px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 750px) {
    width: 50px;
    height: 50px;
  }
`;

export const InfoHeaderTitle = styled.div`
  margin: 10px 20px;
  font-weight: bold;
`;

export const InfoTextContent = styled.div``;

export const InfoText = styled.div`
  text-align: left;
  padding: 30px 40px;
  background: #fff;
  border-radius: 16px;
  border: 2px solid;
  border-color: #e2e2e2;
`;

export const InfoData = styled.div``;

export const InfoDataColapsable = styled.div`
  margin: 0 0 50px 0;
  border-radius: 16px 16px 0 0;
`;

export const InfoDataColapsableHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 16px 16px 0 0;
  border: 2px solid;
  border-color: #e2e2e2;
  background: #fff;
  box-shadow: 0 5px 0 0 #e2e2e2;
`;

export const InfoDataColapsableContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 25px 0 40px 0;
  border-radius: 0 0 16px 16px;
  border: 2px solid;
  border-color: #e2e2e2;
  background: #fbfbfb;
  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const InfoDataColapsableContentColumn = styled.div`
  min-width: 300px;
`;

export const HeaderContentIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const HeaderContentIcon = styled.div`
  margin: 0 10px;
  cursor: pointer;
`;
