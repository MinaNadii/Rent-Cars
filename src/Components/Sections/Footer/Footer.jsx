import FbIcon from "../../../assets/footer/facebook.png";
import InsIcon from "../../../assets/footer/instagram.png";
import YtIcon from "../../../assets/footer/youtube.png";
import Call from "../../../assets/footer/call.png";
import Pin from "../../../assets/footer/location.png";
import Email from "../../../assets/footer/sms.png";
import Logo from "../../../assets/footer/logo-footer.png";

const ourPorducts = [
  {
    name: "Carrers",
    link: "#",
  },
  {
    name: "Cars",
    link: "#",
  },
  {
    name: "Packages",
    link: "#",
  },
  {
    name: "Features",
    link: "#",
  },
  {
    name: "Priceline",
    link: "/#",
  },
];

const About = [
  {
    name: "why choose us",
    link: "#",
  },
  {
    name: "our story",
    link: "#",
  },
  {
    name: "investor relations",
    link: "#",
  },
  {
    name: "press center",
    link: "#",
  },
  {
    name: "advertise",
    link: "#",
  },
];
const Resources = [
  {
    name: "download",
    link: "#",
  },
  {
    name: "help center",
    link: "#",
  },
  {
    name: "partner network",
    link: "#",
  },
  {
    name: "cruises",
    link: "#",
  },
  {
    name: "developer",
    link: "#",
  },
];

const Socials = [
  {
    name: "facebook",
    link: "#",
    icon: FbIcon,
  },
  {
    name: "Instagram",
    link: "#",
    icon: InsIcon,
  },
  {
    name: "Youtube",
    link: "#",
    icon: YtIcon,
  },
];

const contact = [
  {
    name: "25566 Hc 1,Glenallen,Alaska, 99588, USA",
    icon: Pin,
    href: "#",
  },

  {
    name: "+603 4784 273 12",
    icon: Call,
    href: "#",
  },
  {
    name: "rentcars@gmail.com",
    icon: Email,
    href: "#",
  },
];

const Footer = () => {
  return (
    <>
      <section className="bg-[#051C34]">
        <div className="max-md:myContianer mx-auto">
          <div className="grid grid-cols-2   gap-y-10 justify-items-start lg:grid-cols-5 py-10">
            <div>
              <img src={Logo} alt="" />
              <ul className="mt-5  space-y-4">
                {contact.map((item, index) => (
                  <li className="flex items-center gap-4 text-white ">
                    <img src={item.icon} alt={item.icon} />
                    <a href={item.href} key={index}>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">Our Products</h3>
              <ul className="mt-5  space-y-1">
                {ourPorducts.map((item, index) => (
                  <li className="text-white">
                    <a href={item.link} key={index}>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg ">About Rent Cars</h3>
              <ul className="mt-5  space-y-1">
                {About.map((item, index) => (
                  <li className="text-white capitalize">
                    <a href={item.link} key={index}>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg ">About Rent Cars</h3>
              <ul className="mt-5  space-y-1">
                {Resources.map((item, index) => (
                  <li className="text-white capitalize">
                    <a href={item.link} key={index}>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg ">Follow Us</h3>
              <ul className="mt-5 flex gap-3 space-y-1">
                {Socials.map((item, index) => (
                  <li className="text-white capitalize">
                    <a href={item.link} key={index}>
                      <img src={item.icon} alt="" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
{
  /*
            <div className="grid-span-6 gap-4">
            <h3 className="text-white font-bold text-2xl">Our Products</h3>
            <ul>
              {ourPorducts.map((item, index) => (
                <li>
                  {" "}
                  <a href={item.link} key={index}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid-span-6 gap-4">
            <h3 className="text-white font-bold text-2xl">Our Products</h3>
            <ul>
              {ourPorducts.map((item, index) => (
                <li>
                  {" "}
                  <a href={item.link} key={index}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
    
    */
}
