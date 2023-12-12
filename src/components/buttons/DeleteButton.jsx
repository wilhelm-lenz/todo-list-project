import { useContext, useEffect, useState } from "react";
import { WishContext } from "../../context/wishContext";

const DeleteButton = ({ wishItemId }) => {
  const { wishItems, setWishItems } = useContext(WishContext);

  const handleClick = () => {
    const afteDeleteItem = wishItems?.filter(
      (wishItem) => wishItemId !== wishItem.id
    );
    setWishItems(afteDeleteItem);
  };
  console.log(wishItems);
  useEffect(() => {}, [wishItems]);

  return (
    <button
      className="border-2 border-rose-600 py-0.5 px-2"
      onClick={handleClick}
    >
      Delete
    </button>
  );
};

export default DeleteButton;
