/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import fetchJson, { FetchError } from "../utils/fetchJson";
import useUser from "../utils/useUser";
import { User } from "./api/user";
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
  const { mutateUser } = useUser({
    redirectTo: "/dashboard",
    redirectIfFound: true,
  });

  const [errorMsg, setErrorMsg] = useState("");

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
        <Form
          onSubmit={async function handleSubmit(event) {
            event.preventDefault();

            const body = {
              email: event.currentTarget.email.value,
              password: event.currentTarget.password.value,
            };

            try {
              const result: User = await fetchJson("/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
              });
              mutateUser({ok: true, data: result});
            } catch (error) {
              if (error instanceof FetchError) {
                setErrorMsg(error.data.message);
              } else {
                console.error("An unexpected error happened:", error);
              }
            }
          }}
        >
          <DescriptionTitle>
            Acesse com seu e-mail e senha abaixo
          </DescriptionTitle>
          <DescriptionInput>Seu e-mail</DescriptionInput>
          <Input
            style={{ borderColor: "#E2E2E2" }}
            placeholder="Digite"
            name="email"
          ></Input>
          <DescriptionInput>Senha</DescriptionInput>
          <Input
            style={{ borderColor: "#00000040" }}
            placeholder="Digite"
            name="password"
            type="password"
          ></Input>
          {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
          <Button type="submit">Entrar</Button>
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
