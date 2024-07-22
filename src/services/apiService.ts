import axios from "axios";

const API_BASE_URL = "https://api.artic.edu/api/v1";

export const fetchArtworks = async (page: number) => {
  const response = await axios.get(`${API_BASE_URL}/artworks`, {
    params: {
      page,
      limit: 12,
    },
  });
  return response.data;
};

export const fetchArtworkDetail = async (id: string) => {
  const response = await axios.get(`${API_BASE_URL}/artworks/${id}`);
  return response.data;
};

export const searchArtworks = async (
  query: string,
  category: string,
  page: number
) => {
  const params: {
    q?: string;
    "query[term][category_ids]"?: string;
    fields: string;
    limit: number;
    page: number;
  } = {
    fields: "id,title,image_id,category_ids,category_titles",
    limit: 12,
    page,
  };
  if (query) params.q = query;
  if (category && category !== "all")
    params["query[term][category_ids]"] = category;

  const response = await axios.get(`${API_BASE_URL}/artworks/search`, {
    params,
  });
  return response.data;
};

export const fetchCategories = async () => {
  const response = await axios.get(`${API_BASE_URL}/artworks`, {
    params: {
      limit: 100,
    },
  });

  const categories = new Map<string, string>();
  response.data.data.forEach((artwork: any) => {
    if (artwork.category_ids && artwork.category_titles) {
      artwork.category_ids.forEach((id: string, index: number) => {
        categories.set(id, artwork.category_titles[index]);
      });
    }
  });

  return Array.from(categories, ([id, title]) => ({ id, title }));
};
