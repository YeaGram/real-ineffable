export default function InputItem({ type, placeholder, title, name }) {
  return (
    <div className="mt-4 flex flex-col justify-center">
      <label
        htmlFor={name}
        className="min-w-[5rem] font-OpenSans font-bold text-gray-700"
      >
        {title}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className="px-2 py-2 block w-full rounded-sm"
      />
    </div>
  );
}
