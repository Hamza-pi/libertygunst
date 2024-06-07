import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/Signup";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import ProfileLayout from "./components/ProfileLayout";
import AdvanceSearch from "./pages/AdvanceSearch";
import SingleProduct from "./pages/SingleProduct";
import User from "./pages/User";
import Profile from "./pages/Profile";
import Listings from "./pages/Listings";
import ListingForm from "./pages/ListingForm";
import ChatLayout from "./components/ChatLayout";
import Chat from "./pages/Chat";
import Ffl from "./pages/Ffl";
import AdminLayout from "./components/AdminLayout";
import Admin from "./pages/Admin";
import AdminUsers from "./pages/AdminUsers";
import Notifications from "./pages/Notifications";
import AdminChat from "./pages/AdminChat"
import AdminListings from "./pages/AdminListings"

function App() {
  return (
    <>
      <Router basename="/">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/ffl" element={<Ffl />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="search" element={<AdvanceSearch />} />
            <Route path="product" element={<SingleProduct />} />
          </Route>
          <Route path="/user" element={<ProfileLayout />}>
            <Route index element={<User />} />
            <Route path="profile" element={<Profile />} />
            <Route path="listings" element={<Listings />} />
            <Route path="add" element={<ListingForm />} />
            <Route path="edit/:id" element={<ListingForm />} />
          </Route>
          <Route path="/chat" element={<ChatLayout />}>
            <Route index element={<Chat />} />
          </Route>
          <Route path="/admin-panel" element={<AdminLayout />}>
            <Route index element={<Admin />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="chat" element={<AdminChat />} />
            <Route path="listings" element={<AdminListings />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
