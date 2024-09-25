import { ReactElement } from "react"

function Container({children}: {children: ReactElement}) {
  return <main className={`w-[80%] m-auto p-4`}>{children}</main>;
}

export default Container