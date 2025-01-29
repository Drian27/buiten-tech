const PIcon = (props) => {
  const PIconFile = props.PIcon; 
  const Language = props.Language;

  const imagePath = `/images/tools/${PIconFile}`;

  return (
    <div
      className="flex h-auto w-auto flex-col items-center justify-center rounded-xl p-5"
      id="CardIcon"
    >
      <img src={imagePath} alt={Language} className="h-16 w-16 md:h-20 md:w-20" />
      <div className="pt-2 text-center font-bold text-[#ced4d7]" id="TextIcon">
        {Language}
      </div>
    </div>
  );
};

export default PIcon;
