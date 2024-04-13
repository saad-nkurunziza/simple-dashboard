import { testimonials } from "@/constants";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
        <h2 className="text-4xl font-bold text-center">
          What are people sayin'?
        </h2>
        <div className="flex flex-col mt-24 md:flex-row gap-y-14 md:gap-y-0 md:space-x-6">
          {testimonials.map(({ name, image, testimonial }) => (
            <div className="flex flex-col items-center p-6 space-y-6 border rounded-lg border-zinc-200 md:w-1/3">
              <img src={image} className="w-16 -mt-14" alt="" />
              <h5 className="text-lg font-bold">{name}</h5>
              <p className="text-sm leading-6 text-darkGrayishBlue">
                {testimonial}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
