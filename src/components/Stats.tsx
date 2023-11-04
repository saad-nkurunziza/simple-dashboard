import { stats } from "@/constants";

const Stats = () => {
  return (
    <div
      id="stats"
      className=" flex justify-center items-center flex-row flex-wrap w-full sm:mb-24 sm:mt-20 mt-6 mb-6"
    >
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="flex-1 flex justify-center items-center flex-row m-3"
        >
          <h4 className="font-bold text-4xl text-white">{stat.value}</h4>
          <p className=" font-semibold text-lg text-primary uppercase ml-3">
            {stat.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
