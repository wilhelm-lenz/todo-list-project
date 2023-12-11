import "./App.css";
import Home from "./pages/Home";
import { WishContextProvider } from "./context/WishContext/";

function App() {
  return (
    <>
      <WishContextProvider>
        <div className="bg-zinc-900 h-screen">
          <Home />
        </div>
      </WishContextProvider>
    </>
  );
}

export default App;
