import { FiSearch } from "react-icons/fi";
import * as S from "./index.styles";
import { useState, useEffect, useRef } from "react";
import useApiFetch from "../../hooks/useApiFetch";
import { useNavigate } from "react-router-dom";

function SearchField() {
  const [value, setValue] = useState("");
  const { data, loading, error } = useApiFetch(`products/`);
  const navigate = useNavigate();
  const wrapperRef = useRef(null); // Ref for the search wrapper

  useEffect(() => {
    // Function to check if click is outside the ref
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setValue(""); // Clear value or hide the list as needed
      }
    }

    // Add event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Clean up event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  const getFilteredProducts = () => {
    if (!value) return [];
    return data.filter((product) =>
      product.title.toLowerCase().includes(value.toLowerCase())
    );
  };

  const handleItemClick = (id) => {
    navigate(`/products/${id}`);
    setValue("");
  };

  const renderFilteredProducts = () => {
    const filteredProducts = getFilteredProducts();
    return filteredProducts.map((product) => (
      <li key={product.id} onClick={() => handleItemClick(product.id)}>
        <S.SearchThumbnail src={product.image.url} alt="" /> {product.title}
      </li>
    ));
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <S.SearchWrapper ref={wrapperRef}>
      <S.SearchInput
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search..."
        aria-label="Search Field"
      />
      {value && <S.SearchList>{renderFilteredProducts()}</S.SearchList>}
      <S.IconWrapper>
        <FiSearch />
      </S.IconWrapper>
    </S.SearchWrapper>
  );
}

export default SearchField;
