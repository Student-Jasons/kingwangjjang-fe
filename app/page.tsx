import { BestBoard } from "./apollo/board";
import { BoardCard } from "./components/Board/BoardCard";
import { BoardList } from "./components/Board/BoardList";
import { boardData } from "./ testdata/bestboard";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
    <BoardList boardList={boardData} />
  </div>
  );
}
