const Billing = () => {
  return (
    <section
      id="billing"
      className=" flex justify-center flex-col-reverse gap-y-12 items-center px-6 mt-16 md:flex-row-reverse md:gap-x-5 "
    >
      <div className="flex flex-col mb-16 md:mb-32 space-y-12 md:w-1/2">
        {/*  */}
        <h1
          className="max-w-md text-4xl md:text-5xl  font-bold text-center  md:text-left
          md:leading-[65px]"
        >
          Easily control your billing & invoicing
        </h1>
        <p className=" text-center text-darkGrayishBlue md:text-left max-w-sm leading-7">
          Summit makes it easier to pay money and it facilitates its transaction
          with high and sophisticated technology and proffessional personnel
        </p>
        {/* <div className="flex gap-2 justify-center md:justify-start items-center">
            <Button>Get Started</Button>
          </div> */}
      </div>
      <div className="md:w-1/2">
        <img src="/bill.png" alt="" />
      </div>
    </section>
  );
};

export default Billing;
