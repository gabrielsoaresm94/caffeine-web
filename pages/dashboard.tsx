import {
  Button,
  Container,
  Content,
  Data,
  Header,
  Information,
  Input,
  Search,
} from "./dashboard-styles";

const Dashboard = () => {
  return (
    <Container>
      <Header></Header>
      <Content>
        <Search>
          <Input></Input>
          <Button>Buscar</Button>
        </Search>
        <Information>Informações Adicionais</Information>
        <Data>Dados Cadastrais</Data>
      </Content>
    </Container>
  );
};

export default Dashboard;
