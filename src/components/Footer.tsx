const Footer = () => {
  const icons = [
    {
      icon: "/facebook.svg",
    },
    {
      icon: "/icon-instagram.svg",
    },
    {
      icon: "/icon-twitter.svg",
    },
    {
      icon: "/linkedin.svg",
    },
  ];

  const navLinks = [
    {
      link: "Pricing",
    },
    {
      link: "Service",
    },
    {
      link: "About Us",
    },
    {
      link: "Careers",
    },
    {
      link: "Community",
    },
  ];
  const Community = [
    {
      link: "Sponsoring",
    },
    {
      link: "Music Development",
    },
    {
      link: "Food Processing",
    },
    {
      link: "Business Internship",
    },
    {
      link: "Software Development",
    },
  ];
  const Sponsors = [
    {
      link: "Indi Manufacture",
    },
    {
      link: "Cimerwa",
    },
    {
      link: "Become a sponsor",
    },
  ];
  return (
    <footer className="">
      <div className=" flex flex-col md:justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        <div className="flex flex-col justify-between mb-8">
          <img
            src="/logo.svg"
            className="object-contain h-7 self-start mb-4"
            alt=""
          />
          <p className="md:max-w-[15rem] text-darkGrayishBlue leading-6">
            {" "}
            The top of better money management
          </p>
          <div className="flex gap-x-8 mt-8">
            {icons.map((icon) => (
              <a href="#" key={icon.icon}>
                <img src={icon.icon} alt="" className="h-5 object-contain" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-y-7 mt-32 md:flex-row justify-center md:justify-around md:space-x-32">
          <div className="flex flex-col space-y-3">
            <h2 className="font-semibold text-lg -ml-2 text-white/90">Links</h2>
            {navLinks.map((link) => (
              <a
                href="#"
                className="text-darkGrayishBlue hover:text-white/80"
                key={link.link}
              >
                {link.link}
              </a>
            ))}
          </div>
          <div className="flex flex-col space-y-3">
            <h2 className="font-semibold text-lg -ml-2 text-white/90">
              Community
            </h2>
            {Community.map((link) => (
              <a
                href="#"
                className="text-darkGrayishBlue hover:text-white/80"
                key={link.link}
              >
                {link.link}
              </a>
            ))}
          </div>
          <div className="flex flex-col space-y-3">
            <h2 className="font-semibold text-lg -ml-2 text-white/90">
              Sponsors
            </h2>
            {Sponsors.map((link) => (
              <a
                href="#"
                className="text-darkGrayishBlue hover:text-white/80"
                key={link.link}
              >
                {link.link}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto my-3 text-sm text-center text-white/30">
        Copyright &copy; 2023, All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
