import { gql } from "@/gql/gql";

const REALTIME = gql(`
query BoardContentsByDate($index: String!) {
  boardContentsByDate(index: $index) {
    boardId
    site
    rank
    title
    url
    createTime
    GPTAnswer
}
}`);

const SUMMARY_BOARD = gql(`
  mutation SummaryBoard($boardId: String!, $site: String!) {
      summaryBoard(boardId: $boardId, site: $site) {
          boardSummary
      }
  }
`);
