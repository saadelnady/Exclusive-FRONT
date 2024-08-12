import { categoriesBrowsingData } from "../../../../static/data";
import SpecialHeading from "../../../Shared/SpecialHeading";
 
import "../styles/CategouriesBrowse.css";

const CategoriesBrowse = () => {
  return (
    <div className="border-bottom pb-5">
      <SpecialHeading title="Categories" SectionTitle="Browse By Category" />

      <div className="browse-by-category d-flex justify-content-between mt-4 overflow-hidden">
        {categoriesBrowsingData.map((categoryData, index) => {
          return (
            <div
              className="category p-4 text-center border rounded"
              key={index}
            >
              <img
                src={categoryData.categoryImg}
                alt="categoryImg"
                className="   "
              />

              <p className="mt-3">{categoryData.categoryTitle}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CategoriesBrowse;
