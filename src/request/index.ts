import axios from "axios";

const customAxios = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

export const request = async (method: string, url: string, data?: any) => {
  try {
    const pin = localStorage.getItem("pin");
    const token = localStorage.getItem("token");
    const response = await customAxios({
      method,
      url,
      data,
      headers: {
        Authorization: `Bearer ${token}`,
        "User-Pin": pin,
      },
    });

    const responseData = response.data;

    return responseData;
  } catch (error) {
    console.log("Request failed:", error);
     throw error;
  }
};
