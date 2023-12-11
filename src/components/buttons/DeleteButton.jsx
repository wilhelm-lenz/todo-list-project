import { useContext } from "react";
import { WishContext } from "../../context/wishContext";

const DeleteButton = () => {
  const { checkedItem, setCheckedItem } = useContext(WishContext);

  const handleClick = (e) => {
    const deleteItem = e.target;
    setCheckedItem;
  };

  return (
    <button
      className="border-2 border-rose-600 py-1 px-2"
      onClick={handleClick}
    >
      Delete
    </button>
  );
};

export default DeleteButton;
