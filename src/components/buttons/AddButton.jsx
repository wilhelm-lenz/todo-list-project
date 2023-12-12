import { useContext, useEffect } from "react";
import { WishContext } from "../../context/WishContext";
import { v4 as uuidv4 } from "uuid";

const AddButton = () => {
  const { wishTerm, setWishTerm, priority, wishItems, setWishItems } =
    useContext(WishContext);

  const handleClick = () => {
    if (wishTerm === "") {
      return;
    }
    const newWishItems = [
      ...wishItems,
      { id: uuidv4(), wish: wishTerm, done: false, priority: priority },
    ];
    localStorage.setItem("wishItems", JSON.stringify(newWishItems));
    setWishItems(newWishItems);
  };

  useEffect(() => {
    setWishTerm("");
  }, [wishItems]);

  return (
    <button
      className="bg-rose-600 w-full py-2 rounded-md mt-4 mb-10 sm:w-11/12 md:w-9/12 lg:w-6/12"
      onClick={handleClick}
    >
      Add wish
    </button>
  );
};

export default AddButton;
