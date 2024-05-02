import { Box, Container } from "@mui/material";
import { Header } from "@/components/Header/Header";
import { ContentWrapper } from "@/app/components/ContentWrapper";
import { green } from "@mui/material/colors";
import { theme } from "../styles/theme";

export default function Home() {
  return (
    <Container>
      <Header />
      <ContentWrapper />
    </Container>
  );
}
