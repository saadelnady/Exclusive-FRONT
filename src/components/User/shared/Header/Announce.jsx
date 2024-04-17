import Language from "./Language";
import Sale from "./Sale";

const Announce = () => {
  return (
    <div className="bg-black py-1">
      <div className="container text-light d-flex justify-content-evenly align-center flex-wrap">
        <Sale />
        <Language />
      </div>
    </div>
  );
};
export default Announce;
