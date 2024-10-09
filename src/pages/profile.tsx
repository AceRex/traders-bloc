import Input from "../components/form/input";
import MainHeader from "../components/headers/mainHeader";
import Tab from "../components/tab";
import FormGroup from "../components/form/formgroup";
import Button from "../components/form/button";
import { useSelector } from "react-redux";

function Profile() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const userDetails = useSelector((state) => state.auth.userDetails);

  const tabs = [
    {
      title: "Your Profile",
    },
    {
      title: "company",
    },
    {
      title: "password",
    },
    {
      title: "two-factor authentication",
    },
  ];
  return (
    <main>
      <MainHeader />
      <section className="w-[60%] m-auto p-8">
        <p className="max-md:text-2xl lg:text-3xl font-extrabold max-md:text-center max-sm:tracking-tighter lg:tracking-tight">
          Profile settings{" "}
        </p>
        <Tab tabs={tabs} />
        <div className="flex flex-col">
          <FormGroup>
            <div className="w-2/4">
              <Input
                type="text"
                label="First Name"
                placeholder="John"
                onChange={() => {}}
              />
            </div>
            <div className="w-2/4">
              <Input
                type="text"
                label="Last Name"
                placeholder="Doe"
                onChange={() => {}}
              />
            </div>
          </FormGroup>
          <FormGroup>
            <div className="w-2/4">
              <Input
                type="email"
                label="Email"
                value={userDetails?.email}
                placeholder="john.doe@company.com"
                onChange={() => {}}
              />
            </div>{" "}
            <div className="w-2/4">
              <Input
                type="number"
                label="Phone number"
                placeholder="Phone number"
                onChange={() => {}}
              />
            </div>
          </FormGroup>
        </div>
        <div className="flex flex-row items-end place-content-end justify-end">
          <div className=" w-[20%]">
            <Button
              text={"Save changes"}
              color="secondary"
              onClick={() => {}}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Profile;
