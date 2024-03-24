import { BASE_URL } from "../utils/constants";

export const getAllPlanets = async (nextURL) => {
  const response = await fetch(nextURL || BASE_URL + "planets");
  if (response.ok) {
    const data = response.json();
    return data;
  } else {
    const errorMessage = response.text();
    throw new Error(errorMessage);
  }
};
