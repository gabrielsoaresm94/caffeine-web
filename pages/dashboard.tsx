/* eslint-disable @next/next/no-img-element */
import { configResponsive, useResponsive } from "ahooks";
import { useState } from "react";
import {
  Container,
  Content,
  ContentInfo,
  Header,
  HeaderButton,
  HeaderButtonParagraphLojas,
  HeaderButtonParagraphSair,
  HeaderContentButtons,
  HeaderContentIcon,
  HeaderContentIcons,
  HeaderContentLogo,
  HeaderLogo,
  Info,
  InfoData,
  InfoDataColapsable,
  InfoDataColapsableContent,
  InfoDataColapsableContentColumn,
  InfoDataColapsableHeader,
  InfoHeader,
  InfoHeaderIcon,
  InfoHeaderTitle,
  InfoText,
  InfoTextContent,
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

const InfoIconStyle = {
  height: 46,
  width: 46,
};

const HeaderButtonStyle = {
  background: "#fff",
};

const Dashboard = () => {
  const responsive = useResponsive();
  const showIcons = responsive?.middle ?? true;

  const [isOpen, setIsOpen] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);

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
          <HeaderContentIcons>
            <HeaderContentIcon>
              <img
                src="/assets/icone_lojas@2x.png"
                alt="Botão para Lojas"
                style={IconStyle}
              ></img>
            </HeaderContentIcon>
            <HeaderContentIcon>
              <img
                src="/assets/icone_sair@2x.png"
                alt="Botão para sair"
                style={IconStyle}
              ></img>
            </HeaderContentIcon>
          </HeaderContentIcons>
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
            <SearchButton>
              {showIcons ? (
                "Buscar Loja"
              ) : (

                  <img
                    src="/assets/icone_seta_branca@2x.png"
                    alt="Ícone de Informação"
                    style={{
                      width: 24,
                      height: 24,
                    }}
                  ></img>
              )}
            </SearchButton>
          </Search>
          <Info>
            <InfoHeader>
              <InfoHeaderIcon>
                <img
                  src="/assets/icone_loja_roxo@2x.png"
                  alt="Ícone de Informação"
                  style={InfoIconStyle}
                ></img>
              </InfoHeaderIcon>
              <InfoHeaderTitle>
                <p>
                  {`LOJA DE SUPLEMENTOS `}
                  <span>{`- LOJA DE SUPLEMENTOS LTDA.`}</span>
                </p>
              </InfoHeaderTitle>
            </InfoHeader>
            <InfoTextContent>
              <p style={{ textAlign: "center", fontWeight: "bold" }}>
                INFORMAÇÕES ADICIONAIS
              </p>
              <InfoText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </InfoText>
            </InfoTextContent>
            <InfoData>
              <p style={{ textAlign: "center", fontWeight: "bold" }}>
                DADOS CADASTRAIS
              </p>
              <InfoDataColapsable>
                <InfoDataColapsableHeader onClick={() => setIsOpen(!isOpen)}>
                  <p style={{ marginLeft: 50 }}>LOJISTA</p>
                  <p style={{ marginRight: 50, cursor: "pointer" }}>ÍCONE</p>
                </InfoDataColapsableHeader>
                {isOpen && (
                  <InfoDataColapsableContent>
                    <InfoDataColapsableContentColumn>
                      <p>Nome: Carlos Almeida</p>
                      <p>E-mail: carlos.almeida@caffeine.com.br</p>
                    </InfoDataColapsableContentColumn>
                    <InfoDataColapsableContentColumn>
                      <p>Telefone 1: (21) 982589324</p>
                      <p>Telefone 2:</p>
                    </InfoDataColapsableContentColumn>
                  </InfoDataColapsableContent>
                )}
              </InfoDataColapsable>
              <InfoDataColapsable>
                <InfoDataColapsableHeader onClick={() => setIsOpen2(!isOpen2)}>
                  <p style={{ marginLeft: 50 }}>DADOS DA LOJA</p>
                  <p style={{ marginRight: 50, cursor: "pointer" }}>ÍCONE</p>
                </InfoDataColapsableHeader>
                {isOpen2 && (
                  <InfoDataColapsableContent>
                    <InfoDataColapsableContentColumn>
                      <p>CNPJ: 04.646.343/0001-89</p>
                      <p>Nome Fantasia: Loja de suplementos</p>
                      <p>Razão Social: LOJA DE SUPLEMENTOS LTDA.</p>
                    </InfoDataColapsableContentColumn>
                    <InfoDataColapsableContentColumn>
                      <p>E-mail: roberto.baptista@caffeine.com.br</p>
                      <p>Telefone: (21) 981589321</p>
                    </InfoDataColapsableContentColumn>
                  </InfoDataColapsableContent>
                )}
              </InfoDataColapsable>
            </InfoData>
          </Info>
        </ContentInfo>
      </Content>
    </Container>
  );
};

export default Dashboard;
