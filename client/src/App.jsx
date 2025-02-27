import Login from "./auth/components/Login"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./auth/context/Authcontext"
import Admin from "./admin/Admin"
import SuperAdmin from "./admin/super_admin/SuperAdmin"

const App = () => {
  return (
    <Router>
      <AuthProvider>
      {/* <Login/> */}
      <Routes>
        <Route path="" element={<></>}/>
        <Route path="/admin" element={<><Admin/></>}/>
        <Route path="/super_admin" element={<><SuperAdmin/></>}/>
        <Route path="" element={<></>}/>
        <Route path="" element={<></>}/>
        <Route path="" element={<></>}/>
        <Route path="" element={<></>}/>
        <Route path="" element={<></>}/>
        <Route path="" element={<></>}/>
        <Route path="" element={<></>}/>
      </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App