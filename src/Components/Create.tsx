import { motion } from "framer-motion";
import { Input } from "./Input";
import { Button } from "./Button";
import { useEffect, useState } from "react";
import { isEmpty } from "../utils/utils";
import { useItemsStore } from "../store";
import { v4 as uuidv4 } from "uuid";
import { getItemById } from "../api/api";
import { format } from "date-fns";

type Props = {
  onBlur: () => void;
  isEdit: boolean;
};

export const Create = ({ onBlur, isEdit }: Props) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [createdAt, setCreatedAt] = useState("");

  const { addItem, itemToEdit, updateItem } = useItemsStore();

  useEffect(() => {
    if (isEdit && itemToEdit) {
      const fetchItem = async () => {
        const item = await getItemById(itemToEdit);
        setFrom(item.from);
        setTo(item.to);
        setType(item.type);
        setDescription(item.description);
        setDate(item.date);
        setCreatedAt(item.createdAt);
      };
      fetchItem();
    }
  }, [itemToEdit, isEdit]);

  const onCreate = () => {
    console.log("create");

    const isEmptyValue = isEmpty(from, to, type, description, date);
    if (isEmptyValue) {
      setErrorMessage("Please fill all the fields");
      return;
    }

    if (isEdit && itemToEdit) {
      const item = {
        id: itemToEdit,
        from,
        to,
        type,
        description,
        date,
        createdAt: createdAt,
      };
      updateItem(item);
    } else {
      const newItem = {
        id: uuidv4(),
        from,
        to,
        type,
        description,
        date,
        createdAt: format(new Date(), "yyyy-MM-dd HH:mm"),
      };
      addItem(newItem);
    }
    onBlur();
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setErrorMessage("");
    console.log(name);
    if (name === "From") {
      setFrom(value.trimStart());
    } else if (name === "To") {
      setTo(value.trimStart());
    } else if (name === "Type of parcel") {
      setType(value.trimStart());
    } else if (name === "Description") {
      setDescription(value.trimStart());
    } else if (name === "Date of dispatch") {
      console.log(value);
      setDate(value.trimStart());
    }
  };
  return (
    <motion.div
      initial={{ y: -600 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 15, mass: 2 }}
      className={`flex flex-col 2xl:w-[30%] 2xl:h-[65%] xl:w-[40%]  xl:h-[65%] p-4  lg:w-[40%] lg:h-[65%] md:w-[50%] md:h-[70%]  sm:w-[80%] sm:h-[70%] xs:w-[100%] xs:h-[100%] bg-gradient-to-br  ${
        isEdit ? "from-amber-800" : "from-[#FFFAF6]"
      }  to-[#7F7671]  shadow-2xl sm:rounded-2xl  absolute bg-cover bg-center bg-no-repeat m-auto inset-0 z-30`}
    >
      <div
        className="cursor-pointer p-3 shadow-md flex self-start rounded-xl text-lg font-bold hover:scale-110 transform transition-all duration-300"
        onClick={onBlur}
      >
        🠔
      </div>
      <div className="flex flex-col justify-center items-center w-full h-full relative gap-2">
        <motion.img
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50, damping: 15, delay: 1 }}
          className=" absolute bottom-0 left-0 w-[50%] h-[50%] object-contain -z-1"
          src="/delivery.png"
          alt="delivery"
        />

        <h1 className="text-lg text-white bold flex justify-center">
          {isEdit ? "Update" : "Create"}
        </h1>
        <Input label="From" onChange={onInputChange} value={from} />
        <Input label="To" onChange={onInputChange} value={to} />
        <Input label="Type of parcel" onChange={onInputChange} value={type} />
        <Input
          label="Description"
          onChange={onInputChange}
          value={description}
        />
        <div className="mr-13 sm:mr-12">
          <Input
            label="Date of dispatch"
            type="date"
            onChange={onInputChange}
            value={date}
          />
        </div>
        <span className="text-red-700 text-sm font-bold h-3.5 flex pr-8">
          {errorMessage}
        </span>
      </div>
      <div>
        <Button title={isEdit ? "Update" : "Create"} onClick={onCreate} />
      </div>
    </motion.div>
  );
};
