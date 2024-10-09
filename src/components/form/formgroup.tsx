import { ReactNode } from "react";

function FormGroup({ children }: { children: ReactNode }) {
  return <div className="grid grid-flow-col w-full gap-3 overflow-x-auto scrollbar-hide">{children}</div>;
}

export default FormGroup;
