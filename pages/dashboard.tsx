/* eslint-disable @next/next/no-img-element */
import { configResponsive, useResponsive } from "ahooks";
import { useState } from "react";
import { ICompany, listCompaniesApi } from "../utils/api";
import useUser from "../utils/useUser";
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
  const [input, setInput] = useState("");
  const [content, setContent] = useState<ICompany | null>(null);
  const [loading, setLoading] = useState(false);

  const user = useUser();

  async function fetchCompany() {
    setLoading(true);
    const result = await listCompaniesApi(input, user.user?.data?.token!);
    if (result.data.length > 0 && result.data.length <= 1) {
      setContent(result.data[0]);
    } else {
      setContent(null);
    }
    setLoading(false);
  }

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
              <SearchInput
                value={input}
                onChange={(e) => setInput(e.target.value)}
              ></SearchInput>
            </SearchInputContent>
            <SearchButton onClick={fetchCompany}>
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
          {loading === true ? (
            <h1 style={{ textAlign: "center", width: "100%" }}>
              Carregando...
            </h1>
          ) : content !== null ? (
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
                    {`${content.name} `}
                    <span>{`- ${content.socialreason}.`}</span>
                  </p>
                </InfoHeaderTitle>
              </InfoHeader>
              <InfoTextContent>
                <p style={{ textAlign: "center", fontWeight: "bold" }}>
                  INFORMAÇÕES ADICIONAIS
                </p>
                <InfoText>
                  {content.information}
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
                        <p>Nome: {content?.shopman.name}</p>
                        <p>E-mail: {content?.shopman.email}</p>
                      </InfoDataColapsableContentColumn>
                      <InfoDataColapsableContentColumn>
                        <p>Telefone 1: {content?.shopman.phone1}</p>
                        <p>Telefone 2: {content?.shopman.phone2}</p>
                      </InfoDataColapsableContentColumn>
                    </InfoDataColapsableContent>
                  )}
                </InfoDataColapsable>
                <InfoDataColapsable>
                  <InfoDataColapsableHeader
                    onClick={() => setIsOpen2(!isOpen2)}
                  >
                    <p style={{ marginLeft: 50 }}>DADOS DA LOJA</p>
                    <p style={{ marginRight: 50, cursor: "pointer" }}>ÍCONE</p>
                  </InfoDataColapsableHeader>
                  {isOpen2 && (
                    <InfoDataColapsableContent>
                      <InfoDataColapsableContentColumn>
                        <p>CNPJ: {content.cnpj}</p>
                        <p>Nome Fantasia: {content.name}</p>
                        <p>Razão Social: {content.socialreason}.</p>
                      </InfoDataColapsableContentColumn>
                      <InfoDataColapsableContentColumn>
                        <p>E-mail: {content.email}</p>
                        <p>Telefone: {content.phone}</p>
                      </InfoDataColapsableContentColumn>
                    </InfoDataColapsableContent>
                  )}
                </InfoDataColapsable>
              </InfoData>
            </Info>
          ) : <></>}
        </ContentInfo>
      </Content>
    </Container>
  );
};

export default Dashboard;
