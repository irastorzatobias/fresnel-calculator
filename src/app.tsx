import About from "./components/About/About";
import FresnelForm from "./components/FresnelForm/FresnelForm";

export function App() {
  return (
    <div
      className="h-full min-h-screen bg-gradient-to-b from-gray-900
    to-slate-800 flex flex-col text-white p-4 sm:p-8 md:p-20"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-2">
        Zona Fresnel
      </h1>
      <FresnelForm />
      <About />
    </div>
  );
}
