import { RouterProvider } from "react-router-dom";
import router from "./router/router.tsx";
import { Provider } from "react-redux";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import store from "./redux/store.js";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
