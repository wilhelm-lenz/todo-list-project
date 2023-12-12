import { useContext, useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import { WishContext } from "../context/WishContext";

const TodoList = () => {
  const { wishItems } = useContext(WishContext);

  return (
    <ul className=" w-full">
      {wishItems.length === 0 ? (
        <li className="text-pink-600 text-2xl">
          🎅 🦌 Santa's Inbox is empty!
        </li>
      ) : (
        wishItems.map((wishItem) => (
          <TodoItem wishItem={wishItem} key={wishItem.id} />
        ))
      )}
    </ul>
  );
};

export default TodoList;
