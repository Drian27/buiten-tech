const PIcon = (props) => {
  const PIconFile = props.PIcon; 
  const Language = props.Language;

  const imagePath = `/images/tools/${PIconFile}`;

  return (
    <div
      className="flex h-[100px] w-[100px] flex-col items-center justify-center rounded-xl p-5 bg-primary bg-opacity-10 text-primary"
      id="CardIcon"
    >
      <img src={imagePath} alt={Language} className="w-full h-auto" />
      <div className="pt-2 text-center font-bold text-[#ced4d7]" id="TextIcon">
        {Language}
      </div>
    </div>
  );
};

export default PIcon;
