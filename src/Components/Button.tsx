type Props = {
  title: string;
  onClick: () => void;
  color?: string;
};

export const Button = ({ title, onClick, color }: Props) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`rounded-md ${
        color ? color : "bg-amber-950"
      } px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-900  cursor-pointer transition-colors `}
    >
      {title}
    </button>
  );
};
