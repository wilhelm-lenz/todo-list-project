import { createContext, useState } from "react";

const WishContext = createContext([]);

const WishContextProvider = ({ children }) => {
  const [wishTerm, setWishTerm] = useState("");
  const [priority, setPriority] = useState("");
  const [wishItems, setWishItems] = useState([]);
  const [bgColor, setBgColor] = useState("");

  return (
    <WishContext.Provider
      value={{
        wishTerm,
        setWishTerm,
        priority,
        setPriority,
        wishItems,
        setWishItems,
        bgColor,
        setBgColor,
      }}
    >
      {children}
    </WishContext.Provider>
  );
};

export { WishContext, WishContextProvider };
