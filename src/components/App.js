import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter";

const App = ({ context }) => {

  return (
    <BrowserRouter>
      <AppRouter context={context} />
    </BrowserRouter>
  );
}

export default App;
