import { stats } from "@/constants";

const Stats = () => {
  return (
    <div
      id="stats"
      className="flex flex-row flex-wrap items-center justify-center w-full mt-6 mb-6 sm:mb-24 sm:mt-20"
    >
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="flex flex-row items-center justify-center flex-1 m-3"
        >
          <h4 className="text-xl font-bold md:text-4xl text-primary">
            {stat.value}
          </h4>
          <p className="ml-3 font-semibold uppercase md:text-lg text-primary/90">
            {stat.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
