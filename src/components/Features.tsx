import { features } from "@/constants";
import Button from "./Button";

const Features = () => {
  return (
    <section id="features">
      <div className=" flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
        <div className="flex flex-col space-y-8 md:w-1/2">
          <h2 className="max-w-md text-3xl md:text-5xl font-bold text-center md:text-left md:leading-[65px]">
            What's different about Summit?
          </h2>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left leading-7">
            Summit provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>

        <div className="flex flex-col space-y-8 md:w-1/2">
          {features.map(({ title, description }, index) => (
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <Button small>{`0${index + 1}`}</Button>
                  <h3 className="md:text-lg font-bold md:mb-4 md:hidden">
                    {title}
                  </h3>
                </div>
              </div>

              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  {title}
                </h3>
                <p className="text-darkGrayishBlue leading-7 text-sm md:text-base">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
