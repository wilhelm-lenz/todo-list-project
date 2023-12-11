import { useContext, useEffect } from "react";
import { WishContext } from "../../context/wishContext";
import { v4 as uuidv4 } from "uuid";

const AddButton = () => {
  const { wishTerm, setWishTerm, wishItems, setWishItems } =
    useContext(WishContext);

  const handleClick = () => {
    if (wishTerm === "") {
      return;
    }
    const newWishItems = [
      ...wishItems,
      { id: uuidv4(), wish: wishTerm, done: false },
    ];
    setWishItems(newWishItems);
    setWishTerm("");
  };

  useEffect(() => {
    if (wishItems.length > 0) {
      localStorage.setItem("wishItems", JSON.stringify(wishItems));
    }
  }, [wishItems]);

  return (
    <button
      className="bg-rose-600 w-full py-2 rounded-md mt-4 mb-10"
      onClick={handleClick}
    >
      Add wish
    </button>
  );
};

export default AddButton;
