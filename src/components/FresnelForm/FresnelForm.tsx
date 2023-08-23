import { useRef, useState } from "preact/hooks";
import Input from "../Input/Input";
import Result from "../Result/Result";

const FresnelForm = () => {
  const kmRef = useRef<HTMLInputElement>(null);
  const ghzRef = useRef<HTMLSelectElement>(null);
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const DValue = kmRef.current?.value;
    const FValue = ghzRef.current?.value;

    if (DValue && FValue) {
      const D = parseFloat(DValue);
      const F = parseFloat(FValue);
      const radius = 8.657 * Math.sqrt(D / F);
      setResult(radius.toFixed(2));
    }
  };

  const resetValues = () => {
    kmRef.current!.value = "";
    setResult(null);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex justify-center flex-col items-center"
    >
      <div className="w-full sm:w-[600px] bg-gray-700 flex flex-col px-2 py-2 rounded-md">
        <h1 class="font-semibold">Calcular el radio de la Zona Fresnel</h1>
        <Input kmRef={kmRef} ghzRef={ghzRef} />
        <div class="w-full flex justify-between gap-2">
          <button type="submit" class="bg-indigo-500 rounded-md p-2 mt-2 w-1/2">
            Calculate
          </button>
          <button
            onClick={resetValues}
            class="bg-red-500 rounded-md p-2 mt-2 w-1/2"
          >
            Limpiar
          </button>
        </div>

        {result && <Result result={result} />}
      </div>
    </form>
  );
};

export default FresnelForm;
