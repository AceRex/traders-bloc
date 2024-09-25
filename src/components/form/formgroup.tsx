import { ReactElement } from "react";

function FormGroup({ children }: { children: ReactElement }) {
  return <div className="flex flex-row w-full justify-between">{children}</div>;
}

export default FormGroup;
