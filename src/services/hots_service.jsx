import { BASE_URL } from "../utils/constants";

export const getAllHosts = async () => {
  const response = await fetch(BASE_URL + "people");
  if (response.ok) {
    const data = response.json();
    return data;
  } else {
    const errorMessage = response.text();
    throw new Error(errorMessage);
  }
};
