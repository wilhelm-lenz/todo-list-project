import { useContext, useEffect, useState } from "react";
import DeleteButton from "./buttons/DeleteButton";
import { WishContext } from "../context/wishContext";

const TodoItem = ({ wishItem }) => {
  const { wishItems, setWishItems } = useContext(WishContext);
  const [isChecked, setIsChecked] = useState(wishItem.done);
  const [bgColor, setBgColor] = useState("");

  console.log(wishItem);
  const handleCheckChange = () => {
    setIsChecked(!isChecked);

    const updatedWishItems = wishItems.map((item) =>
      item.id === wishItem.id ? { ...item, done: !isChecked } : item
    );

    setWishItems(updatedWishItems);
  };

  const showPriority = () => {
    let bgColorClass = "";
    if (wishItem.priority === "high") {
      bgColorClass = "bg-red-600";
    } else if (wishItem.priority === "low") {
      bgColorClass = "bg-green-600";
    } else {
      bgColorClass = "bg-rose-600";
    }
    setBgColor(bgColorClass);
  };

  useEffect(() => {
    showPriority();
  }, [wishItem, isChecked]);

  return (
    <li className="flex gap-x-3 mb-4 justify-center items-center">
      <input
        className="w-4 h-4 text-rose-700 bg-rose-700 border-rose-700 rounded focus:ring-rose-700 dark:focus:ring-red-600 dark:ring-offset-rose-700 focus:ring-2 dark:bg-rose-700 dark:border-rose-600"
        type="checkbox"
        name="checkTodo"
        checked={isChecked}
        value={wishItem.wish}
        onChange={handleCheckChange}
      />

      <p
        className={`bg-rose-600 py-1 px-2 w-52 ${
          isChecked ? "line-through" : ""
        } ${bgColor}`}
      >
        {wishItem.wish}
      </p>
      <DeleteButton wishItemId={wishItem.id} />
    </li>
  );
};

export default TodoItem;
