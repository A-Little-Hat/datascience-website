const Footer = () => {
  return (
    <>
      <div className="h-min-[5vh] flex items-center justify-center bg-slate-950 text-white">
        <p className="text-sm sm:text-base py-6">
          Copyright &#xa9; {new Date().getFullYear()} | AKCSIT, University of
          Calcutta
        </p>
      </div>
    </>
  );
};

export default Footer;
