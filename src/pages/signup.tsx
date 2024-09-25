import Button from "../components/form/button";
import Input from "../components/form/input";
import SignupHeader from "../components/headers/signupHeader";

function Signup() {
  return (
    <>
      <SignupHeader />
      <div className="w-full h-full lg:w-[80%] m-auto p-8 flex flex-col items-center justify-center gap-10">
        <p className="max-md:text-3xl lg:text-4xl font-extrabold max-md:text-center max-sm:tracking-tighter lg:tracking-tight">
          Create your Traders Account
        </p>
        <div className="lg:w-[50%]">
          <Input type="text" label={"Email address"} onChange={() => {}} />
          <Input
            type="password"
            label={"Password"}
            onChange={() => {}}
            subText="Password must be 8 characters or longer and contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character."
          />
          <Input label={"Company details"} onChange={() => {}} />
          <Input label={"Industry"} type="textarea" onChange={() => {}} />
          <Input
            label={" I agree to the terms of service and privacy policy."}
            type="checkbox"
            onChange={() => {}}
          />
          <Button text="Create account" />
          <p className="max-md:text-xs lg:text-sm text-text_light m-2 text-center">By creating an account, you agree to our Terms of Service and Privacy Policy</p>
        </div>
      </div>
    </>
  );
}

export default Signup;
