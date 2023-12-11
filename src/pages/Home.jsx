import { useContext, useEffect } from "react";
import InputTodo from "../components/InputTodo";
import SelectMenus from "../components/SelectMenus";
import TodoList from "../components/TodoList";
import AddButton from "../components/buttons/AddButton";
import { WishContext } from "../context/wishContext";

const Home = () => {
  const { setWishItems } = useContext(WishContext);

  useEffect(() => {
    const wishItemsArr = localStorage.getItem("wishItems");

    if (wishItemsArr) {
      const parsedWishItems = JSON.parse(wishItemsArr);
      if (Array.isArray(parsedWishItems)) {
        setWishItems(parsedWishItems);
      }
    }
  }, [setWishItems]);

  return (
    <main className="text-center text-white px-5">
      <h1 className="text-4xl text-rose-600 py-8">My Wishlist</h1>
      <section className="flex justify-center gap-2">
        <InputTodo />
        <SelectMenus />
      </section>
      <section>
        <AddButton />
      </section>
      <section>
        <TodoList />
      </section>
    </main>
  );
};

export default Home;
