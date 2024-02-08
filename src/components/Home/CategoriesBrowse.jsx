import arrow_left from "../../assets/images/pngs/ic-arrow-left.png";
import arrow_right from "../../assets/images/pngs/ic-arrow-right.png";
import { categoriesBrowsingData } from "../../static/data";
import "./styles/CategouriesBrowse.css";
export const CategoriesBrowse = () => {
  return (
    <div className="border-bottom pb-5">
      <h5 className="special-header ps-5 py-2 mb-5">Categories</h5>
      <div className="d-flex justify-content-between flex-wrap">
        <h1 className="fw-bold text-center text-md-start">
          Browse By Category
        </h1>

        <div className="buttons mb-3 mb-md-0">
          <img
            src={arrow_left}
            alt=""
            className="rounded-pill bg-light p-3 me-3 cursor-pointer"
          />
          <img
            src={arrow_right}
            alt=""
            className="rounded-pill bg-light p-3 cursor-pointer"
          />
        </div>
      </div>
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
