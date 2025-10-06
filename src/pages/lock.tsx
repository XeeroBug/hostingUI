import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { auth, db } from "@/Firebase/firebase.util";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { MapPin } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
export default function Lock() {
  const Navigate = useNavigate();
  const [email, setEmail] = React.useState<any>("");
  const [activeUser, setActiveUser] = React.useState<any>("");
  const [userInfo, setUserInfo] = React.useState<any>("");
  React.useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setEmail(user.email);
        setActiveUser(user.uid);
      } else {
        setActiveUser(null);
      }
    });
  }, []);
  const getUserInfo = async () => {
    const docRef = doc(db, "users", activeUser);
    const fetchData = await getDoc(docRef);
    setUserInfo(fetchData.data());
  };
  React.useEffect(() => {
    if (!activeUser) return;
    getUserInfo();
  }, [activeUser]);
  const [formFields, setFormFields] = React.useState({
    password: "",
  });
  function handleChange(e: any) {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(email);

    signInWithEmailAndPassword(auth, email, formFields.password);
  };

  return (
    <div className="flex flex-col gap-6 bg-white p-10 rounded-md shadow-md items-center justify-center h-screen">
      <form>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
          <div className="font-semibold text-xl flex items-center">
              <span className="text-blue-600">
                <MapPin className="rotate-180" />
              </span>
              sky<span className="text-blue-600">Vibe</span>
            </div>
            <h1 className="text-xl font-bold">
              Welcome back, {userInfo ? `${userInfo?.firstName} ` : "Ghost"}
            </h1>
          </div>
          <div className="flex flex-col gap-6">
            <div className="">
              <Label htmlFor="password">Password</Label>
              <Input
                name="password"
                type="password"
                placeholder="••••••••"
                required
              />
            </div>
            <Button type="submit" className="w-full" onClick={handleSubmit}>
              Login
            </Button>
            <Button
              type="submit"
              variant="secondary"
              className="w-full -mt-2 shadow-sm"
              onClick={() => {
                signOut(auth);
                Navigate("/");
              }}
            >
              Sign Out
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
