import { Button } from "./Button";
import { Logo } from "./Logo";

type Props = {
  onBlur: () => void;
  onEdit: (boolean: boolean,) => void;
};

export const Header = ({ onBlur, onEdit }: Props) => {
  const handleClick = () => {
    onEdit(false);
    onBlur();
  };
  return (
    <header className="w-full h-[170px] bg-[url('/box.jpg')] bg-cover bg-center bg-no-repeat flex flex-row px-10 justify-between items-center fixed">
      <Logo />
      <div>
        <Button title="CREATE" onClick={handleClick} />
      </div>
    </header>
  );
};
