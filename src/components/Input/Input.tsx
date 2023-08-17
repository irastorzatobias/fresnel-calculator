import { forwardRef } from "preact/compat";

interface InputProps {
  label: string;
  placeholder?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <div className="relative mt-2 rounded-md shadow-sm">
      <input
        ref={ref}
        type="number"
        step="any"
        className="block w-full rounded-md border-0 py-1.5 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder={props.placeholder || "0.00"}
        required
      />
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
        <span className="text-gray-900 sm:text-sm">{props.label}</span>
      </div>
    </div>
  );
});

export default Input;
