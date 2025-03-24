import { useItemsStore } from "../store";
import { Item } from "../types/types";
import { Button } from "./Button";

type Props = {
  item: Item;
  onBlur: () => void;
  onEdit: (boolean: boolean) => void;
};

export const SingleItem = ({ item, onBlur, onEdit }: Props) => {
  const { deleteItem, setItemToEdit } = useItemsStore();

  const onEditClicked = () => {
    onEdit(true);
    setItemToEdit(item.id);
    onBlur();
  };
  return (
    <div className="bg-[#8d807a]     bg-center bg-no-repeat px-5 shadow-2xl rounded-xl flex flex-col w-full h-full gap-1.5 justify-center items-center p-5">
      <div className="flex flex-row justify-between items-center gap-5 w-full">
        <div className="flex  flex-col justify-center items-center">
          <div className="text-white text-lg font-semibold">{item.from}</div>
        </div>
        <div className="w-10 h-7">
          <img src="/car.png" className="w-full h-full" />
        </div>
        <div className="flex  flex-col justify-center items-center">
          <div className="text-white text-lg font-semibold">{item.to}</div>
        </div>
      </div>
      <div className="text-gray-800 font-bold flex self-start">{item.type}</div>
      <div className="text-gray-800 text-sm font-bold flex self-start">Dispatch: {item.date}</div>
      <div className="bg-black/20 text-white overflow-scroll no-scrollbar h-20 shadow-2xl p-2 rounded-lg w-full">
        {item.description}
      </div>
      <div className="flex justify-between items-center gap-2 w-full">
        <div className="text-gray-800 font-bold text-sm">Created: {item.createdAt}</div>
        <div className="flex gap-2">
          <Button
            title="Delete"
            color="bg-red-800"
            onClick={() => deleteItem(item.id)}
          />
          <Button
            title="Edit"
            color="bg-amber-600"
            onClick={() => onEditClicked()}
          />
        </div>
      </div>
    </div>
  );
};
