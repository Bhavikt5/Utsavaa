import axios from "axios";
import { productConstant } from "../constants/productConstants";

// Get All Products
export const getProduct =
  (keyword = "", currentPage = 1, price = [0, 5000], category, ratings = 0) =>
  async (dispatch) => {
    try {
      dispatch({ type: productConstant.ALL_PRODUCT_REQUEST });

      let link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`;

      if (category) {
        link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${ratings}`;
      }

      const { data } = await axios.get(link);

      dispatch({
        type: productConstant.ALL_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: productConstant.ALL_PRODUCT_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Crystals Products
export const getAllCrystalsProducts = () => async (dispatch) => {
  try {
    dispatch({ type: productConstant.ALL_CRYSTALS_REQUEST });

    const { data } = await axios.get("/api/v1/products/crystals");

    dispatch({
      type: productConstant.ALL_CRYSTALS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: productConstant.ALL_CRYSTALS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Bracelets Products
export const getAllBracelets = () => async (dispatch) => {
  try {
    dispatch({ type: productConstant.ALL_BRACELETS_REQUEST });

    const { data } = await axios.get("/api/v1/products/bracelets");

    dispatch({
      type: productConstant.ALL_BRACELETS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: productConstant.ALL_BRACELETS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Malas Products
export const getAllMalas = () => async (dispatch) => {
  try {
    dispatch({ type: productConstant.ALL_MALAS_REQUEST });

    const { data } = await axios.get("/api/v1/products/malas");

    dispatch({
      type: productConstant.ALL_MALAS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: productConstant.ALL_MALAS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All Products -- HOME
export const getAllProductsList = () => async (dispatch) => {
  try {
    dispatch({ type: productConstant.ALL_PRODUCTS_LISTS_REQUEST });

    const { data } = await axios.get("/api/v1/products/lists");

    dispatch({
      type: productConstant.ALL_PRODUCTS_LISTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: productConstant.ALL_PRODUCTS_LISTS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All Products For Admin
export const getAdminProduct = () => async (dispatch) => {
  try {
    dispatch({ type: productConstant.ADMIN_PRODUCT_REQUEST });

    const { data } = await axios.get("/api/v1/admin/products");

    dispatch({
      type: productConstant.ADMIN_PRODUCT_SUCCESS,
      payload: data.products,
    });
  } catch (error) {
    dispatch({
      type: productConstant.ADMIN_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Create Product
export const createProduct = (productData) => async (dispatch) => {
  try {
    dispatch({ type: productConstant.NEW_PRODUCT_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v1/admin/product/new`,
      productData,
      config
    );

    dispatch({
      type: productConstant.NEW_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: productConstant.NEW_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Product
export const updateProduct = (id, productData) => async (dispatch) => {
  try {
    dispatch({ type: productConstant.UPDATE_PRODUCT_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/api/v1/admin/product/${id}`,
      productData,
      config
    );

    dispatch({
      type: productConstant.UPDATE_PRODUCT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: productConstant.UPDATE_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Product
export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: productConstant.DELETE_PRODUCT_REQUEST });

    const { data } = await axios.delete(`/api/v1/admin/product/${id}`);

    dispatch({
      type: productConstant.DELETE_PRODUCT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: productConstant.DELETE_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get Product Details
export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: productConstant.PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v1/product/${id}`);

    dispatch({
      type: productConstant.PRODUCT_DETAILS_SUCCESS,
      payload: data.product,
    });
  } catch (error) {
    dispatch({
      type: productConstant.PRODUCT_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// NEW REVIEW
export const newReview = (reviewData) => async (dispatch) => {
  try {
    dispatch({ type: productConstant.NEW_REVIEW_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(`/api/v1/review`, reviewData, config);

    dispatch({
      type: productConstant.NEW_REVIEW_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: productConstant.NEW_REVIEW_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All Reviews of a Product
export const getAllReviews = (id) => async (dispatch) => {
  try {
    dispatch({ type: productConstant.ALL_REVIEW_REQUEST });

    const { data } = await axios.get(`/api/v1/reviews?id=${id}`);

    dispatch({
      type: productConstant.ALL_REVIEW_SUCCESS,
      payload: data.reviews,
    });
  } catch (error) {
    dispatch({
      type: productConstant.ALL_REVIEW_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Review of a Product
export const deleteReviews = (reviewId, productId) => async (dispatch) => {
  try {
    dispatch({ type: productConstant.DELETE_REVIEW_REQUEST });

    const { data } = await axios.delete(
      `/api/v1/reviews?id=${reviewId}&productId=${productId}`
    );

    dispatch({
      type: productConstant.DELETE_REVIEW_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: productConstant.DELETE_REVIEW_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: productConstant.CLEAR_ERRORS });
};
