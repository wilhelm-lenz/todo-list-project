import { useContext, useEffect } from "react";
import { WishContext } from "../context/wishContext";

const SelectMenus = () => {
  const { priority, setPriority } = useContext(WishContext);

  const handlePrioChange = (e) => {
    setPriority(e.target.value);
  };

  useEffect(() => {}, [priority]);

  return (
    <select
      className={`${
        priority === "high"
          ? "bg-red-600"
          : priority === "low"
          ? "bg-green-600"
          : "bg-rose-600"
      } rounded-md px-2 py-1 outline-0`}
      onChange={handlePrioChange}
    >
      <option value="">Select Priority</option>
      <option value="high" className="text-green-600">
        High
      </option>
      <option value="low">Low</option>
    </select>
  );
};

export default SelectMenus;
