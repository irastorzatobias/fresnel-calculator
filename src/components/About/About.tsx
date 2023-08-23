import formula from "../../assets/formula.png";

const About = () => {
  return (
    <section className="bg-gray-800 rounded-lg p-6 mt-8 shadow-lg w-full sm:w-[600px] mx-auto">
      <div className="flex flex-col md:flex-row items-center md:space-x-6 justify-center">
        <div className="text-md flex flex-col justify-center items-center ">
          <h2 className="font-semibold text-2xl mb-4">Formula utilizada</h2>
          <img
            src={formula}
            alt="Fresnel"
            className="w-[300px] shadow-lg mb-2"
          />
          <p>
            La Zona Fresnel describe cómo las ondas de radio se propagan en el
            espacio entre dos puntos, como una antena transmisora y una
            receptora. La "Zona" es una región elipsoidal alrededor de la línea
            directa entre estos dos puntos. Los obstáculos dentro de esta zona
            pueden causar difracciones e interferencias que afectan la calidad
            de la señal.
          </p>
        </div>
      </div>
      <p class="font-bold mt-4 text-right">Tobias Irastorza Rossia</p>
    </section>
  );
};

export default About;
