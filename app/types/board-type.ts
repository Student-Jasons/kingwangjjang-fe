export interface PostCardType {
  id: String;
  site: "dcinside" | "ygosu" | "ppomppu";
  title: String;
  url: string;
  createTime: Date;
  GPTAnswer: String;
}
