import "bootstrap/dist/css/bootstrap.min.css"
import './css/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginForm from "./component/Auth"


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginForm />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;
