import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { createUserWithEmailAndPassword as CreateUser } from "firebase/auth";
import { auth, db } from "@/Firebase/firebase.util";
import { doc, setDoc } from "@firebase/firestore";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const formFields = [
    {
      name: "firstName",
      label: "First Name",
      type: "text",
      placeholder: "John",
    },
    {
      name: "lastName",
      label: "Last Name",
      type: "text",
      placeholder: "Doe",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "example@example.com",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "••••••••",
    },
    {
      name: "phoneNumber",
      label: "Phone Number",
      type: "tel",
      placeholder: "123-456-7890",
    },
  ];
  const [inputs, setInputs] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const createUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userInfo = await CreateUser(auth, inputs.email, inputs.password);
      const user = userInfo.user;
      const docRef = doc(db, "users", user.uid);
      setDoc(docRef, {
        firstName: inputs.firstName,
        lastName: inputs.lastName,
        email: inputs.email,
        phoneNumber: inputs.phoneNumber,
        userId: user.uid,

      });
      console.log("User created successfully:", user);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };
  return (
    <div>
      <Card className="overflow-hidden">
        <CardContent className="grid p-0 md:grid-cols-2">
          <div className="relative hidden bg-muted md:block">
            <div className="absolute bottom-15 p-4 flex flex-col gap-4">
              <span className="font-bold text-xl text-muted-foreground">
                We're excited to have you on board!
              </span>
              <span className="hover:underline font-semibold" onClick={()=> navigate("/")}>Already have an Account? Sign In</span>
            </div>
          </div>
          <form className="p-6 md:p-8" onSubmit={createUser}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Welcome</h1>
                <p className="text-balance text-muted-foreground">
                  Create a SkyVibe Inc account
                </p>
              </div>
              {formFields.map((field) => (
                <div className="grid gap-2" key={field.name}>
                  <Label htmlFor={field.name}>{field.label}</Label>
                  <Input
                    name={field.name}
                    id={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    required
                    onChange={handleChange}
                  />
                </div>
              ))}
            </div>
            <Button type="submit" className="w-full mt-3 font-bold">
              Create Account
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default SignUp;
