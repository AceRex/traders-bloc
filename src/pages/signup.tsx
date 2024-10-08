import Button from "../components/form/button";
import Input from "../components/form/input";
import SignupHeader from "../components/headers/signupHeader";
import Checkbox from "../components/checkbox";
import { useDispatch, useSelector } from "react-redux";
import { authSignup } from "../redux/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [company_details, setCompany_details] = useState();
  const [industry, setIndustry] = useState();
  
  const [isTerms] = useState(true);
 // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  });
  const handleSignUp = () => {
    const data = {
      email,
      password,
      company_details,
      industry,
      isTerms,
    };
     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
    dispatch(authSignup(data));
  };
  return (
    <>
      <SignupHeader />
      <div className="w-full h-full lg:w-[80%] m-auto p-8 flex flex-col items-center justify-center gap-10">
        <p className="max-md:text-3xl lg:text-4xl font-extrabold max-md:text-center max-sm:tracking-tighter lg:tracking-tight">
          Create your Traders Account
        </p>
        <div className="lg:w-[50%]">
          <Input
            type="email"
            value={email}
            label={"Email address"}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            label={"Password"}
            value={password}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            onChange={(e) => setPassword(e.target.value)}
            subText="Password must be 8 characters or longer and contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character."
          />
          <Input
            label={"Company details"}
            value={company_details}
            onChange={(e) => {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              setCompany_details(e.target.value);
            }}
          />
          <Input
            label={"Industry"}
            value={industry}
            type="textarea"
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            onChange={(e) => setIndustry(e.target.value)}
          />

          <div className="flex flex-row gap-3 my-3">
            <Checkbox />
            <p className="text-text_light">
              I agree to the terms of service and privacy policy.
            </p>
          </div>
          <Button text="Create account" onClick={handleSignUp} />
          <p className="max-md:text-xs lg:text-sm text-text_light m-2 text-center">
            By creating an account, you agree to our Terms of Service and
            Privacy Policy
          </p>
        </div>
      </div>
    </>
  );
}

export default Signup;
