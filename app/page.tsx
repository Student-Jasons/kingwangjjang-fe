import Image from "next/image";
import { PostSummarizer } from "@/components/PostSummarizer";
import { GPT } from "@/components/GPT";

export default function Home() {
  
  return (
    <>
      {/* <GPT text={"test"}/> */}
      <PostSummarizer boardUrl={"https://gall.dcinside.com/board/view/?id=dcbest&no=212790/"}/>
    </>
    
  );
}
