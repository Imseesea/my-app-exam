//컴포넌트 생성

import { Reset } from "styled-reset";
import Article from "./components/Article";
import Header from "./components/Header";
import styled from "styled-components";

function App() {
  return (
    <>
      <Reset />
      <div className="root">
        <Header />
        <MainStyle className="main">
          <Article />
          <Article />
          <Article />
        </MainStyle>
      </div>
    </>
  );
}
const MainStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(100% - 4rem);
  margin: 20px auto 0;
  article {
    width: 30%;
  }
`;
export default App;
