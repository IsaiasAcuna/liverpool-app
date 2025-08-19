interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  value: string | number;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = "text",
  value,
  required = false,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block mb-1 font-sans font-bold">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        required={required}
        onChange={onChange}
        className={`w-full border border-gray-300 rounded px-3 py-2 font-sans font-light `}
      />
    </div>
  );
};

export default InputField;
