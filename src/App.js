import "./App.css";
import Home from "./components/pages/home/Home";
import styled from "styled-components";
function App() {
  return (
    <DivPreHome>
      <Home />
    </DivPreHome>
  );
}

const DivPreHome = styled.div`
  transform: translateY(20px);
  animation: animeUp 0.3s forwards;

  @keyframes animeUp {
    to {
      opacity: 1;
      transform: initial;
    }
  }
`;

export default App;
