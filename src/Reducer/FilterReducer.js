/** @format */

const filterReducer = (filterState, action) => {
  let filterStateCopy = { ...filterState };
  switch (action.type) {
    case "UPDATE_PRODUCTS":
      filterStateCopy = {
        ...filterStateCopy,
        product: action.payload.products,
        default: action.payload.products,
      };
      break;

    case "FETCH_SEARCH_NAME":
      console.log(action.payload);
      console.log(filterStateCopy.product[1]);
      filterStateCopy = {
        ...filterStateCopy,

        product: filterStateCopy.product.filter((value, i) => {
          if (
            filterStateCopy.product[i].name
              .toLowerCase()
              .includes(action.payload)
          ) {
            return value;
          } else {
            return false;
          }

          // console.log(action.payload.data[i].color);
        }),
      };
      return { ...filterStateCopy };

    case "RANGE_FILTER":
      filterStateCopy = {
        ...filterStateCopy,

        price: action.payload.maxPrice,
        product: filterStateCopy.product.filter(
          (item) => item.discountedPrice <= action.payload.maxPrice
        ),
      };
      break;

    case "TOGGLE_CATEGORY":
      filterStateCopy = {
        ...filterStateCopy,
        category: [
          ...(filterStateCopy.category.includes(action.payload.category)
            ? filterStateCopy.category.filter(
                (category) => category !== action.payload.category
              )
            : [...filterStateCopy.category, action.payload.category]),
        ],
      };
      filterStateCopy = {
        ...filterStateCopy,
        product: [
          ...(filterStateCopy.category.length
            ? filterStateCopy.default.filter((item) =>
                filterStateCopy.category.includes(item.category)
              )
            : filterStateCopy.default),
        ],
      };
      break;

    case "CLEAR_FILTER":
      filterStateCopy = {
        product: filterStateCopy.default,
        price: 30,
        category: [],
        rating: 5,
        sort: null,
        default: filterStateCopy.default,
      };
      break;

    case "ADD_TO_CART":
      filterStateCopy = {
        ...filterStateCopy,
        product: [
          ...filterStateCopy.product.map((item) =>
            item._id === action.payload.itemId
              ? { ...item, isAddedToCart: true }
              : item
          ),
        ],
      };
      filterStateCopy = {
        ...filterStateCopy,
        default: [...filterStateCopy.product],
      };
      break;

    case "REMOVE_FROM_CART":
      filterStateCopy = {
        ...filterStateCopy,
        product: [
          ...filterStateCopy.product.map((item) =>
            item._id === action.payload.itemId
              ? { ...item, isAddedToCart: false }
              : item
          ),
        ],
      };
      filterStateCopy = {
        ...filterStateCopy,
        default: [...filterStateCopy.product],
      };
      break;

    case "RATING_FILTER":
      filterStateCopy = {
        ...filterStateCopy,
        rating: action.payload.rating,
        product: filterStateCopy.default.filter(
          (item) => item.rating >= action.payload.rating
        ),
      };
      break;
    case "SORT_FILTER":
      filterStateCopy = {
        ...filterStateCopy,
        sort: action.payload.sort,
        product:
          action.payload.sort === "LOW_TO_HIGH"
            ? [...filterStateCopy.product].sort(
                (a, b) => b.discountedPrice - a.discountedPrice
              )
            : [...filterStateCopy.product].sort(
                (a, b) => a.discountedPrice - b.discountedPrice
              ),
      };
      break;
    default:
      break;
  }

  if (filterStateCopy.sort !== null && !action.payload.sort) {
    filterStateCopy = {
      ...filterStateCopy,
      product:
        action.payload.sort === "LOW_TO_HIGH"
          ? [...filterStateCopy.product].sort((a, b) => b.price - a.price)
          : [...filterStateCopy.product].sort((a, b) => a.price - b.price),
    };
  }

  if (filterStateCopy.category.length && !action.payload.category) {
    filterStateCopy = {
      ...filterStateCopy,
      product: [
        ...(filterStateCopy.category.length
          ? filterStateCopy.product.filter((item) =>
              filterStateCopy.category.includes(item.category)
            )
          : filterStateCopy.product),
      ],
    };
  }

  if (filterStateCopy.rating !== 5 && !action.payload.rating) {
    filterStateCopy = {
      ...filterStateCopy,
      rating: filterStateCopy.rating,
      product: filterStateCopy.product.filter(
        (item) => item.rating >= filterStateCopy.rating
      ),
    };
  }

  return { ...filterStateCopy };
};

export { filterReducer };
