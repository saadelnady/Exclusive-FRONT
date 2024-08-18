const WishlistHeading = () => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-5">
      <h3 className="special-header ps-5">Wishlist (total)</h3>
      <button className="btn submit-reverse px-5 py-3 ">Move All To Bag</button>
    </div>
  );
};

export default WishlistHeading;
