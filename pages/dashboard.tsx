/* eslint-disable @next/next/no-img-element */
import { configResponsive, useResponsive } from "ahooks";
import {
  Container,
  Content,
  ContentInfo,
  Header,
  HeaderButton,
  HeaderButtonParagraphLojas,
  HeaderButtonParagraphSair,
  HeaderContentButtons,
  HeaderContentLogo,
  HeaderLogo,
  Search,
  SearchButton,
  SearchIcon,
  SearchInput,
  SearchInputContent,
} from "./dashboard-styles";

configResponsive({
  small: 0,
  middle: 810,
});

const IconStyle = {
  height: 24,
  width: 24,
};

const SearchIconStyle = {
  margin: "12px 4px",
  height: 24,
  width: 24,
};

const HeaderButtonStyle = {
  background: "#fff",
};

const Dashboard = () => {
  const responsive = useResponsive();
  const showIcons = responsive?.middle ?? true;

  return (
    <Container>
      <Header>
        <HeaderContentLogo>
          <HeaderLogo
            src="/assets/marca_lojistas@2x.png"
            alt="Caffeine Army Lojistas"
          ></HeaderLogo>
        </HeaderContentLogo>
        {showIcons ? (
          <HeaderContentButtons>
            <HeaderButton>
              <img
                src="/assets/icone_lojas@2x.png"
                alt="Botão para Lojas"
                style={IconStyle}
              ></img>
              <HeaderButtonParagraphLojas>LOJAS</HeaderButtonParagraphLojas>
            </HeaderButton>
            <HeaderButton style={HeaderButtonStyle}>
              <img
                src="/assets/icone_sair@2x.png"
                alt="Botão para sair"
                style={IconStyle}
              ></img>
              <HeaderButtonParagraphSair>SAIR</HeaderButtonParagraphSair>
            </HeaderButton>
          </HeaderContentButtons>
        ) : (
          <p>Icons</p>
        )}
      </Header>
      <Content>
        <ContentInfo>
          <Search>
            <SearchInputContent>
              <SearchIcon>
                <img
                  src="/assets/icone_busca@2x.png"
                  alt="Botão para buscar"
                  style={SearchIconStyle}
                ></img>
              </SearchIcon>
              <SearchInput></SearchInput>
            </SearchInputContent>
            <SearchButton>Buscar Loja</SearchButton>
          </Search>
        </ContentInfo>
      </Content>
    </Container>
  );
};

export default Dashboard;
