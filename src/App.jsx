import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <>
      <BrowserRouter>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </BrowserRouter>
    </>
  );
}

export default App;
