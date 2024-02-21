import { useDispatch } from "react-redux";
import { fetchFail, fetchStart } from "../features/stockSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import useAxios from "./useAxios";
import { getStocksSuccess, getProPurBranFirmSuccess } from "../features/stockSlice";

const useStockCalls = () => {
  const dispatch = useDispatch();
  const { axiosWithToken } = useAxios();

  // const getFirms = async () => {
  //   dispatch(fetchStart());
  //   try {
  //     const { data } = await axiosWithToken("/firms/");
  //     dispatch(firmsSuccess(data));
  //     console.log(data);
  //   } catch (error){
  //     dispatch(fetchFail())

  //   }
  // };

  // const getSales = async () => {
  //   dispatch(fetchStart());
  //   try {
  //     const { data } = await axiosWithToken("/sales/");
  //     dispatch(salesSuccess(data));
  //     console.log(data);
  //   } catch (error){
  //     dispatch(fetchFail())
  //       console.log(error)
  //   }
  // };

  const getStocks = async (url="firms") => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`/${url}/`);
      const apiData = data.data;
      dispatch(getStocksSuccess({ apiData, url }));
      // console.log(data);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${url} bilgisi cekilemedi`);
    }
  };

  const deleteStock = async (url = "firms", id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`/${url}/${id}`);
      toastSuccessNotify(`${url} bilgisi silinmitir`);
      getStocks(url);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${url} silinemedi`);
    }
  };

  const postStock = async (url = "firms", data) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`/${url}/`, data);
      toastSuccessNotify(`${url} bilgisi eklenmistir`);
      getStocks(url);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${url} eklenemedi`);
    }
  };

  const putStock = async (url = "firms", data) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`/${url}/${data._id}`, data);
      toastSuccessNotify(`${url} bilgisi degismistir`);
      getStocks(url);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${url} degistirilemedi`);
    }
  };

  const getProPurBranFirm = async () => {
    dispatch(fetchStart())
    try {
      const [products, purchases, brands, firms] = await Promise.all([
        axiosWithToken("/products/"),
        axiosWithToken("/purchases/"),
        axiosWithToken("/brands/"),
        axiosWithToken("/firms/"),
      ])
      dispatch(
        getProPurBranFirmSuccess([
          products?.data?.data,
          purchases?.data?.data,
          brands?.data?.data,
          firms?.data?.data,
        ])
      )
    } catch (error) {
      dispatch(fetchFail())
    }
  }

  return { deleteStock, getStocks, postStock, putStock, getProPurBranFirm };
};

export default useStockCalls;
