import { useContext, useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import { WishContext } from "../context/wishContext";

const TodoList = () => {
  const { wishItems } = useContext(WishContext);

  return (
    <ul className="flex flex-col justify-center items-center my">
      {wishItems.length === 0 ? (
        <li className="text-pink-600">Santa's Inbox is empty!</li>
      ) : (
        wishItems.map((wishItem) => (
          <TodoItem wishItem={wishItem} key={wishItem.id} />
        ))
      )}
    </ul>
  );
};

export default TodoList;
