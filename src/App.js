import CreateProfileForm from "./components/CreateProfileForm";
import MailVerification from "./components/MailVerification";
import Role from "./components/Role";
import SignupForm from "./components/SignupForm";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="w-full">
      <Routes>
        <Route path="/" element={<Navigate to={"/signup"} />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/createProfile" element={<CreateProfileForm />} />
        <Route path="/role" element={<Role />} />
        <Route path="/verification" element={<MailVerification />} />
      </Routes>
    </div>
  );
}

export default App;
