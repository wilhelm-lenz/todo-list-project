import { useContext, useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import { WishContext } from "../context/wishContext";

const TodoList = () => {
  const { wishItems } = useContext(WishContext);

  return (
    <ul className="flex flex-col justify-center items-center my">
      {wishItems.map((wishItem) =>
        wishItem && wishItem.id ? (
          <TodoItem
            wishItem={wishItem}
            key={wishItem.id}
            // idItem={idItem}
            // setIdItem={setIdItem}
          />
        ) : null
      )}
    </ul>
  );
};

export default TodoList;
