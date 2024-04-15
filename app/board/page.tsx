import { Container } from "@mui/material";
import { Header } from "@/components/Header/Header";
import { ContentWrapper } from "@/app/components/ContentWrapper";

export default function Home() {
  return (
    <Container>
      <Header />
      <ContentWrapper />
    </Container>
  );
}