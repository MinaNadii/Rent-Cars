const HeaderCards = ({ h2, p }) => {
  return (
    <>
      <h2 className="uppercase font-bold rounded-md text-sm px-3 py-2 text-mainColor mt-5 bg-blue-400/20">
        {h2}
      </h2>
      <p className="text-[19px] capitalize font-medium">{p}</p>
    </>
  );
};

export default HeaderCards;
