import { useEffect } from "react";
import { useItemsStore } from "../store";
import { SingleItem } from "./Item";
import { motion } from "framer-motion";

type Props = {
  onBlur: () => void;
  onEdit: (boolean: boolean) => void;
};

export const ItemsList = ({ onBlur, onEdit }: Props) => {
  const { items, fetchItems } = useItemsStore();
  useEffect(() => {
    fetchItems();
  }, []);

  console.log(items);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-4  w-full justify-items-center items-center p-3"
    >
      {items.map((item) => (
        <SingleItem key={item.id} item={item} onBlur={onBlur} onEdit={onEdit} />
      ))}
    </motion.div>
  );
};
