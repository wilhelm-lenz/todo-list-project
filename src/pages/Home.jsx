import { useContext, useEffect } from "react";
import InputTodo from "../components/InputTodo";
import SelectMenus from "../components/SelectMenus";
import TodoList from "../components/TodoList";
import AddButton from "../components/buttons/AddButton";
import { WishContext } from "../context/WishContext";

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
    <main className="text-center text-white px-5 flex flex-col justify-center py-2">
      <h1 className="text-3xl text-rose-600 pt-16 pb-10">
        🎄 My Wishlist 🏂 ❄
      </h1>
      <section className="flex justify-center gap-2 sm:w-11/12 md:w-9/12 lg:w-6/12 mx-auto">
        <InputTodo />
        <SelectMenus />
      </section>
      <section className="">
        <AddButton />
      </section>
      <section className="mx-auto">
        <TodoList />
      </section>
    </main>
  );
};

export default Home;
