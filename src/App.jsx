import "./App.css";
import Home from "./pages/Home";
import { WishContextProvider } from "./context/WishContext/";

function App() {
  return (
    <>
      <WishContextProvider>
        <div className="bg-zinc-900 h-screen overflow-y-auto overflow-hidden">
          <Home />
        </div>
      </WishContextProvider>
    </>
  );
}

export default App;
