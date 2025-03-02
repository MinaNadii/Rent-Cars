import LogoImg from "../../assets/Logo.png";

const Logo = () => {
  return (
    <>
      <div className="w-[170px] px-4 ">
        <img src={LogoImg} alt="Logo" className="w-full" />
      </div>
    </>
  );
};

export default Logo;
