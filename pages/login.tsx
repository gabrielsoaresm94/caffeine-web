/* eslint-disable @next/next/no-img-element */
import {
  Background,
  BackgroundImage,
  Button,
  Container,
  Content,
  ContentLogo,
  DescriptionInput,
  DescriptionTitle,
  Footer,
  Form,
  Input,
  Logo,
} from "./login-styles";

const Login = () => {
  return (
    <Container>
      <Background>
        <BackgroundImage
          src="/assets/desk_login_background@2x.png"
          alt="Produto Super Coffee"
        />
      </Background>
      <Content>
        <ContentLogo>
          <Logo
            src="/assets/marca_lojistas@2x.png"
            alt="Caffeine Army Lojistas"
          />
        </ContentLogo>
        <Form>
          <DescriptionTitle>
            Acesse com seu e-mail e senha abaixo
          </DescriptionTitle>
          <DescriptionInput>Seu e-mail</DescriptionInput>
          <Input
            style={{ borderColor: "#E2E2E2" }}
            placeholder="Digite"
          ></Input>
          <DescriptionInput>Senha</DescriptionInput>
          <Input
            style={{ borderColor: "#00000040" }}
            placeholder="Digite"
          ></Input>
          <Button>Entrar</Button>
        </Form>
        <Footer>
          <p>© 2021 Caffeine Army. CNPJ: 27.403.527/0001-13</p>
          <p>
            Endereço: Rua Rubens Guelli, 68, Itaigara, Salvador - BA, 41815-135
          </p>
          <p>
            E-mail: contato@caffeinearmy.com.br | Telefone: +55 11 91106-4910
          </p>
        </Footer>
      </Content>
    </Container>
  );
};

export default Login;
