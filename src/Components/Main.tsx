import { ItemsList } from "./ItemsList";

type Props = {
  blur: boolean;
  onBlur: () => void;
  onEdit: (boolean: boolean) => void;
};

export const Main = ({ blur, onBlur, onEdit }: Props) => {
  return (
    <main
      className={`flex justify-center items-center px-1 sm:px-8 md:px-12  lg:px-30 pt-[170px] flex-1 w-full ${
        blur ? "hidden" : ""
      }`}
    >
      <ItemsList onBlur={onBlur} onEdit={onEdit} />
    </main>
  );
};
