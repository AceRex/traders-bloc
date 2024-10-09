import { ReactElement } from "react";

function Container({ children }: { children: ReactElement }) {
  return (
    <main className={`lg:w-[80%] w-[98%] m-auto p-4`}>
      <>{children}</>
    </main>
  );
}

export default Container;
