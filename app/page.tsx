import { Header } from "./components/Header/Header";
import { ContentWrapper } from "./components/ContentWrapper";
import { Container } from "@mui/material";

export default function Home() {
  return (
    <Container>
      <Header></Header>
      <ContentWrapper />
    </Container>
  );
}
