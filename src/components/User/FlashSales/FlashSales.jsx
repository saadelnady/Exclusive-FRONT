import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFlashSalesProducts } from "../../../store/actions/product/productActions";
import { productStatus } from "../../../helpers/options";
import Card from "../../Shared/Card";
import { Pagination } from "../../Shared/Pagination";
import Loading from "../../Shared/Loading";

const FlashSales = () => {
  const dispatch = useDispatch();
  const { flashSalesProducts, total, isLoading } = useSelector(
    (state) => state.productReducer
  );
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    dispatch(
      fetchFlashSalesProducts({
        limit: 10,
        page: currentPage,
        status: productStatus.ACCEPTED,
        type: "flashSale",
      })
    );
  }, [dispatch, currentPage]);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="container py-3">
          <h5 className="special-header ps-5 py-2 mb-5"> Flash Sales</h5>
          <div className="d-flex flex-wrap justify-content-center justify-content-md-evenly align-items-center">
            {flashSalesProducts && flashSalesProducts.length > 0 ? (
              flashSalesProducts.map((product, index) => (
                <Card product={product} key={index} />
              ))
            ) : (
              <>There is no products to show</>
            )}
          </div>
          {flashSalesProducts?.length > 0 && (
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

export default FlashSales;
