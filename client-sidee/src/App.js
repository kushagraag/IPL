import Home from "./Home";
import LiveScore from "./LiveScore";
import PointsTable from "./PointsTable";
import Schedule from "./Schedule";
import Statistic from "./Statistic";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PublicRoute from "./components/PublicRoute";
import ProtectedRoute from "./components/ProtectedRoute";
import Userhome from "./pages/Userhome";
import Loader from "./components/Loader";
import { useSelector } from "react-redux";
import AdminHome from "./pages/Admin/AdminHome";
import AdminMatches from "./pages/Admin/AdminMatches";
import AdminUsers from "./pages/Admin/AdminUsers";
import BookNow from "./pages/BookNow";
import Bookings from "./pages/Bookings";
import Profile from "./pages/Profile";
function App() {
  const {loading} = useSelector(state => state.alerts);
  const theme = {
    color: {
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",
      bg: "rgb(249 249 255)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Header></Header>
          {loading && <Loader></Loader>}
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/livescore" element={<PublicRoute><LiveScore /></PublicRoute>}></Route>
            <Route path="/pointstable" element={<PublicRoute><PointsTable /></PublicRoute>}></Route>
            <Route path="/schedule" element={<PublicRoute><Schedule /></PublicRoute>}></Route>
            <Route path="/statistic" element={<PublicRoute><Statistic /></PublicRoute>}></Route>
            <Route path="/login" element={<PublicRoute><Login /></PublicRoute>}></Route>
            <Route path="/register" element={<PublicRoute><Register /></PublicRoute>}></Route>
            <Route path="/userhome" element={<ProtectedRoute><Userhome /></ProtectedRoute>}></Route>
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>}></Route>
            <Route path="/admin" element={<ProtectedRoute><AdminHome /></ProtectedRoute>}></Route>
            <Route path="/admin-matches" element={<ProtectedRoute><AdminMatches /></ProtectedRoute>}></Route>
            <Route path="/admin-users" element={<ProtectedRoute><AdminUsers /></ProtectedRoute>}></Route>
            <Route path="/book-now/:id" element={<ProtectedRoute><BookNow /></ProtectedRoute>}></Route>
            <Route path="/booking" element={<ProtectedRoute><Bookings /></ProtectedRoute>}></Route>
          </Routes>
          
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
