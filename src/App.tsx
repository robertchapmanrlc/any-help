import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Welcome from "./routes/Welcome";
import Main from "./routes/Main";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" Component={Welcome}/>
        <Route path="/main" Component={Main} />
      </Routes>
    </Router>
  );
}

export default App;
