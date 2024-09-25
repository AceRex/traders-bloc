import { Oval } from "react-loader-spinner";

function Loading() {
  return (
    <div className="fixed w-full h-[100vh]">
      <div className="w-[80%] h-[100vh] m-auto flex items-center justify-center">
        <Oval
          visible={true}
          height="170"
          width="170"
          color="#1A1A1A"
          secondaryColor="#ededed"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </div>
  );
}

export default Loading;
