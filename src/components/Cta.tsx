import Button from "./Button";

const Cta = () => {
  return (
    <section id="cta" className=" my-14">
      <div className="flex flex-col items-center justify-between px-12 py-24 mx-auto space-y-12 rounded-lg bg-primary md:py-12 md:flex-row md:space-y-0">
        <div className="flex flex-col space-y-6 text-center md:text-left">
          <h2 className="text-5xl font-bold text-center text-white md:text-4xl md:text-left">
            Simplify how your team works today
          </h2>
          <p className="leading-7 md:max-w-xl text-darkGrayishBlue">
            {" "}
            Summit has supercharged our team’s workflow. The ability to maintain
            visibility on larger milestones at all times keeps everyone
            motivated.
          </p>
        </div>
        <Button outlined>Get Started</Button>
      </div>
    </section>
  );
};

export default Cta;
