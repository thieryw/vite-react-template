import { Home } from "./pages/Home";
import { useRoute } from "./router";


export function App() {
  const route = useRoute();

  return (
    <>
      {route.name === "home" && <Home />}
      {route.name === "page1" && <h1>Page 1</h1>}
    </>
  )
}

