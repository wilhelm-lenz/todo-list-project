import { useContext, useEffect } from "react";
import { WishContext } from "../context/WishContext/";

const InputTodo = () => {
  const { wishTerm, setWishTerm } = useContext(WishContext);

  const handleWishTermChange = (e) => {
    setWishTerm(e.target.value);
  };

  useEffect(() => {}, [wishTerm]);

  return (
    <input
      className="rounded-md px-2 py-1 text-rose-600 w-full"
      type="text"
      placeholder="Type in your wish..."
      value={wishTerm}
      onChange={handleWishTermChange}
    />
  );
};

export default InputTodo;
