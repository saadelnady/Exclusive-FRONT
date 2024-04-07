import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../store/actions/product/productActions";
import { productStatus } from "../../../helpers/options";
import Card from "../../Shared/Card";
import { Pagination } from "../../Shared/Pagination";
import Loading from "../../Shared/Loading";
const Products = () => {
  const dispatch = useDispatch();
  const { products, total, isLoading } = useSelector(
    (state) => state.productReducer
  );
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    dispatch(
      fetchProducts({
        limit: 10,
        page: currentPage,
        status: productStatus.ACCEPTED,
        type: "notFlashSale",
      })
    );
  }, [dispatch, currentPage]);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="container py-3">
          <h5 className="special-header ps-5 py-2 mb-5"> Our Products</h5>
          <div className="d-flex flex-wrap justify-content-center justify-content-md-evenly align-items-center">
            {products && products.length > 0 ? (
              products.map((product, index) => (
                <Card product={product} key={index} />
              ))
            ) : (
              <>There is no products to show</>
            )}
          </div>
          {products?.length > 0 && (
            <Pagination
              itemsPerPage={limit}
              paginate={handlePageChange}
              currentPage={currentPage}
              totalItems={total}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Products;
