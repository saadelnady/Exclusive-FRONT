const Size = ({ options, activeSize, handleSizeActive }) => {
  return (
    <div className="size d-flex align-items-center mb-4 ">
      <p className="me-4 fs-4">Size :</p>
      <ul className="select-size d-flex justify-content-start flex-wrap w-75">
        {options?.map((option) => (
          <li
            key={option}
            className={`me-2 ${
              activeSize === option?.size
                ? "active cursor-pointer"
                : "cursor-pointer"
            }`}
            onClick={() => {
              handleSizeActive(option?.size);
            }}
          >
            {option?.size}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Size;
