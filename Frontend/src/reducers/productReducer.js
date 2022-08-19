import { productConstant } from "../constants/productConstants";

export const productsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case productConstant.ALL_PRODUCT_REQUEST:
    case productConstant.ADMIN_PRODUCT_REQUEST:
      return {
        loading: true,
        products: [],
      };

    case productConstant.ALL_PRODUCT_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        productsCount: action.payload.productsCount,
        resultPerPage: action.payload.resultPerPage,
      };

    case productConstant.ADMIN_PRODUCT_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };

    case productConstant.ALL_PRODUCT_FAIL:
    case productConstant.ADMIN_PRODUCT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case productConstant.CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const productsListReducer = (
  state = { totalProductsList: [] },
  action
) => {
  switch (action.type) {
    case productConstant.ALL_PRODUCTS_LISTS_REQUEST:
      return {
        loading: true,
        totalProductsList: [],
      };

    case productConstant.ALL_PRODUCTS_LISTS_SUCCESS:
      return {
        loading: false,
        totalProductsList: action.payload.totalProductsList,
        totalProductsCount: action.payload.totalProductsCount,
      };

    case productConstant.ALL_PRODUCTS_LISTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case productConstant.CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const productsByCategoryReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case productConstant.ALL_CRYSTALS_REQUEST:
      return {
        loading: true,
        products: [],
      };

    case productConstant.ALL_CRYSTALS_SUCCESS:
      return {
        loading: false,
        productCrystals: action.payload.productCrystals,
        productsCount: action.payload.productsCount,
      };

    case productConstant.ALL_CRYSTALS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case productConstant.CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const productsBraceletsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case productConstant.ALL_BRACELETS_REQUEST:
      return {
        loading: true,
        products: [],
      };

    case productConstant.ALL_BRACELETS_SUCCESS:
      return {
        loading: false,
        productBracelets: action.payload.productBracelets,
        productsCount: action.payload.productsCount,
      };

    case productConstant.ALL_BRACELETS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case productConstant.CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
export const productMalasReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case productConstant.ALL_MALAS_REQUEST:
      return {
        loading: true,
        products: [],
      };

    case productConstant.ALL_MALAS_SUCCESS:
      return {
        loading: false,
        productMalas: action.payload.productMalas,
        productsCount: action.payload.productsCount,
      };

    case productConstant.ALL_MALAS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case productConstant.CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const productDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case productConstant.PRODUCT_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case productConstant.PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };
    case productConstant.PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case productConstant.CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const productReducer = (state = {}, action) => {
  switch (action.type) {
    case productConstant.DELETE_PRODUCT_REQUEST:
    case productConstant.UPDATE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case productConstant.DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

    case productConstant.UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case productConstant.DELETE_PRODUCT_FAIL:
    case productConstant.UPDATE_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case productConstant.DELETE_PRODUCT_RESET:
      return {
        ...state,
        isDeleted: false,
      };
    case productConstant.UPDATE_PRODUCT_RESET:
      return {
        ...state,
        isUpdated: false,
      };
    case productConstant.CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const newReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case productConstant.NEW_REVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case productConstant.NEW_REVIEW_SUCCESS:
      return {
        loading: false,
        success: action.payload,
      };
    case productConstant.NEW_REVIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case productConstant.NEW_REVIEW_RESET:
      return {
        ...state,
        success: false,
      };
    case productConstant.CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const newProductReducer = (state = {}, action) => {
  switch (action.type) {
    case productConstant.NEW_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case productConstant.NEW_PRODUCT_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        product: action.payload.product,
      };
    case productConstant.NEW_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case productConstant.NEW_PRODUCT_RESET:
      return {
        ...state,
        success: false,
      };
    case productConstant.CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const productReviewsReducer = (state = { reviews: [] }, action) => {
  switch (action.type) {
    case productConstant.ALL_REVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case productConstant.ALL_REVIEW_SUCCESS:
      return {
        loading: false,
        reviews: action.payload,
      };
    case productConstant.ALL_REVIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case productConstant.CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const reviewReducer = (state = {}, action) => {
  switch (action.type) {
    case productConstant.DELETE_REVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case productConstant.DELETE_REVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };
    case productConstant.DELETE_REVIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case productConstant.DELETE_REVIEW_RESET:
      return {
        ...state,
        isDeleted: false,
      };
    case productConstant.CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
