import { Routes, Route } from "react-router-dom";
import { LoginForm } from "./login-form";
import SignUp from "./signUp";
import React from "react";
import { auth } from "@/Firebase/firebase.util";
import Page from "@/pages/page";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const Navigate = useNavigate()
  const [activeUser, setActiveUser] = React.useState("");
  React.useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setActiveUser(user.uid);
        Navigate("/")
      } else {
        setActiveUser("");
      }
    });
    return unSubscribe;
  }, []);
  return (
    <>
      {activeUser.trim() !== "" ? (
        <Routes>
          <Route path="/" element={<Page />} />
        </Routes>
      ) : (
        <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
          <div className="w-full max-w-sm md:max-w-3xl">
            <Routes>
              <Route path="/" element={<LoginForm />} />
              <Route path="/signUp" element={<SignUp />} />
            </Routes>
          </div>
        </div>
      )}
    </>
  );
}
