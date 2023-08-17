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
          <ul className="list-disc list-inside mt-4">
            <li>
              <strong>Ver Televisión:</strong> Si un edificio alto está
              bloqueando parte de la Zona Fresnel entre las antenas, la señal
              podría ser débil.
            </li>
            <li>
              <strong>Usar Wi-Fi:</strong> Las paredes u otros obstáculos pueden
              interferir con la Zona Fresnel y reducir la velocidad de Internet.
            </li>
            <li>
              <strong>Hablar por Teléfono Celular:</strong> Una montaña entre la
              torre de telefonía móvil y tu teléfono podría causar mala
              recepción.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
