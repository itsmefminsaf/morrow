import { FaFire } from "react-icons/fa";

const Steaks = () => {
  const steak = 13;
  return (
    <section className="col-span-2 flex justify-between gap-2">
      <div className="flex aspect-square w-1/3 flex-col items-center justify-center rounded-full bg-amber-950/50 p-5">
        <FaFire className="text-6xl text-orange-500 shadow-2xl" />
        <h3 className="text-center text-4xl text-orange-400 shadow-2xl">
          Steak
        </h3>
        <h2 className="text-5xl font-extrabold text-orange-300">{steak}</h2>
      </div>
    </section>
  );
};

export default Steaks;
