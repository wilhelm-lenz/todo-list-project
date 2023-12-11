import { createContext, useState } from "react";

const WishContext = createContext([]);

const WishContextProvider = ({ children }) => {
  const [wishItems, setWishItems] = useState([]);
  const [wishTerm, setWishTerm] = useState("");
  const [priority, setPriority] = useState("");

  return (
    <WishContext.Provider
      value={{
        wishItems,
        setWishItems,
        wishTerm,
        setWishTerm,
        priority,
        setPriority,
      }}
    >
      {children}
    </WishContext.Provider>
  );
};

export { WishContext, WishContextProvider };
