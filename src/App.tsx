import { useState } from "react";
import { Create } from "./Components/Create";
import { Header } from "./Components/Header";
import { Main } from "./Components/Main";

function App() {
  const [blur, setBlur] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  console.log("11")

  const onBlur = () => {
    setBlur((prev) => !prev);
  };

  const onEdit = (boolean: boolean) => {
    setIsEdit(boolean);
  };

  return (
    <>
      {blur && (
        <Create onBlur={onBlur} isEdit={isEdit}  />
      )}
      <div
        className={`flex-col flex bg-gradient-to-b from-[#7F7671] to-[#FFFAF6] relative h-screen ${
          blur ? "blur-2xl" : ""
        } `}
      >
        <Header onBlur={onBlur} onEdit={onEdit} />
        <Main blur={blur} onBlur={onBlur} onEdit={onEdit} />
      </div>
    </>
  );
}

export default App;
