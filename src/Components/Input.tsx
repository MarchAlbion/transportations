type Props = {
  zindex?: string;
  label: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};

export const Input = ({ zindex, label, type, onChange, value }: Props) => {
  return (
    <div className="">
      <label htmlFor={label} className="block text-sm/6 font-medium text-white">
        {label}
      </label>
      <div className="mt-1">
        <input
          id={label}
          value={value}
          onChange={onChange}
          name={label}
          type={type ? type : "text"}
          placeholder="you@example.com"
          className={`block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900   outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#96908d] sm:text-sm/6 ${
            zindex ? zindex : ""
          }`}
        />
      </div>
    </div>
  );
};
