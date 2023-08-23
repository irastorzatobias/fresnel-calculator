import { Ref } from "preact/compat";

type InputProps = {
  kmRef: Ref<HTMLInputElement>;
  ghzRef: Ref<HTMLSelectElement>;
};

const Input = (props: InputProps) => {
  return (
    <div>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          type="number"
          step="any"
          ref={props.kmRef}
          className="block w-full rounded-md border-0 py-1.5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300
          placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="0.00"
          min="0"
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <select className="h-full rounded-md border-0 bg-transparent py-0 pr-7 text-gray-500 focus:ring-2
          focus:ring-inset focus:ring-indigo-600 sm:text-sm"
          ref={props.ghzRef}
          >
            <option value="2.4">2.4 GHz</option>
            <option value="5.8">5.8 GHz</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Input;
