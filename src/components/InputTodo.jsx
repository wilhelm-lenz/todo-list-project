import { useContext, useEffect } from "react";
import { WishContext } from "../context/WishContext/";

const InputTodo = () => {
  const { wishTerm, setWishTerm } = useContext(WishContext);

  return (
    <input
      className="rounded-md px-2 py-1 w-full text-rose-600"
      type="text"
      placeholder="Type in your wish..."
      value={wishTerm}
      onChange={(e) => setWishTerm(e.target.value)}
    />
  );
};

export default InputTodo;
