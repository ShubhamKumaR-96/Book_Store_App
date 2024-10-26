import React from "react";
import { useParams } from "react-router-dom";
import { useFetchByIdQuery } from "../../redux/features/bookApi";
import { getImgUrl } from "../../utils/getImgUrl";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";

const SingleBook = () => {
  const { id } = useParams();
  const { data: books, isLoading, isError } = useFetchByIdQuery(id);
  const dispatch=useDispatch();

  const handleAddToCart=(product)=>{
      dispatch(addToCart(product))
  }
  if (isLoading) return <div>Loading Data</div>;
  if (isError) return <div>Error happening to load data</div>;
  return (
    <div className="max-w-lg shadow-md p-5">
      <h1 className="text-2xl font-bold mb-6">{books?.title} </h1>
      <div>
        <div>
          <img
            src={`${getImgUrl(books?.coverImage)}`}
            alt={books?.title}
            className="mb-8"
          />
        </div>

        <div className="mb-5">
          <p className="text-gray-700 mb-2">
            <strong>Author:</strong>
            {books.author || "admin"}
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Published:</strong>
            {new Date(books?.createdAt).toLocaleDateString()}
          </p>
          <p className="text-gray-700 capitalize ">
            <strong>Category:</strong>
            {books?.category}
          </p>
          <p className="text-gray-700 ">
            <strong>Descriptions:</strong>
            {books?.description}
          </p>
        </div>
        <button onClick={()=>handleAddToCart(books)} className=" py-2 rounded-md text-base font-secondary font-bold bg-yellow-500 hover:bg-secondary hover:text-white transition-all duration-200 cursor-pointerpx-6 px-4 space-x-1 flex items-center gap-1">
          <FiShoppingCart /> Add to cart
        </button>
      </div>
    </div>
  );
};

export default SingleBook;
