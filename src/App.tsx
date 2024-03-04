import { Provider } from "react-redux";
import { store } from "./store";
import { Navigation, Products } from "./components";
import { AppStructure } from "./components";

function App() {
  return (
    <Provider store={store}>
      <AppStructure
        navigation={<Navigation />}
        content={<Products />}
        filters={<h1>filters</h1>}
      />
    </Provider>
  );
}

export default App;
