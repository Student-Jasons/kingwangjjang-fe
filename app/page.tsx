import { PostList } from "./components/Post/PostList";
import { boardData } from "./ testdata/bestboard";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Header } from "./components/Header/Header";
import { SideBar } from "./components/Side/SideBar";
import { ContentWrapper } from "./components/ContentWrapper";

export default function Home() {
  return (
    <>
      <Header></Header>
      <ContentWrapper />
    </>
  );
}
