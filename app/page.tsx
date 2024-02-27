import Image from "next/image";
import { BestBoard } from "./apollo/board";
import { BoardCard } from "./components/Board/BoardCard";

export default function Home() {
  return (
    <BoardCard
    site={"dcinside"}
    title={"Sample Title"}
    url={"https://example.com"}
    createTime={new Date()} // 현재 시간으로 createTime을 설정
  />
  );
}
