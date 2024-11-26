import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import store from "./store/store"
import {Provider} from "react-redux"
import EditImage from "./pages/EditImage"
import SingleImage from "./pages/SingleImage"

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/singleImage/:id" element={<SingleImage/>}/>
          <Route path="/editImage/:id" element={<EditImage/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
