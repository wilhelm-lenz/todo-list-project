import { useContext, useEffect, useState } from "react";
import DeleteButton from "./buttons/DeleteButton";
import { WishContext } from "../context/wishContext";

const TodoItem = ({ wishItem }) => {
  // Fallback, wenn wishItem oder wishItem.done nicht definiert ist
  if (!wishItem || wishItem.done === undefined) {
    console.error("TodoItem wurde ohne gültiges wishItem aufgerufen");
    return null; // Oder eine Fehlermeldung rendern
  }
  const { wishItems, setWishItems } = useContext(WishContext);
  const [isChecked, setIsChecked] = useState(wishItem.done);

  console.log(wishItem);
  const handleCheckChange = () => {
    setIsChecked(!isChecked);

    const updatedWishItems = wishItems.map((item) =>
      item.id === wishItem.id ? { ...item, done: !isChecked } : item
    );

    setWishItems(updatedWishItems);
  };

  useEffect(() => {}, [wishItem, isChecked]);

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
        }`}
      >
        {wishItem.wish}
      </p>
      <DeleteButton />
    </li>
  );
};

export default TodoItem;
