import { useContext } from "react";
import { WishContext } from "../context/wishContext";

const SelectMenus = () => {
  const { priority, setPriority } = useContext(WishContext);

  const handlePrioChange = (e) => {
    setPriority(e.target.value);
    console.log(priority);
  };

  return (
    <div>
      <select
        className="text-pink-600 rounded-md px-2 py-1"
        onChange={handlePrioChange}
      >
        <option value="">Select Priority</option>
        <option value="high">High</option>
        <option value="low">Low</option>
      </select>
    </div>
  );
};

export default SelectMenus;
