import create from "zustand";
import { getRequest } from "../../services";

export interface Image {
  id: string;
  author: string;
  url: string;
  download_url?: string;
}

interface GalleryState {
  images: Image[];
  loading: boolean;
  error: string | null;
  fetchImages: () => Promise<void>;
}

export const useGalleryStore = create<GalleryState>((set) => ({
  images: [],
  loading: false,
  error: null,
  fetchImages: async () => {
    set({ loading: true, error: null });
    try {
      const response = await getRequest<Image[]>(
        "https://picsum.photos/v2/list"
      );
      set({ images: response, loading: false });
    } catch (error) {
      set({ error: "Fetching Images Failed", loading: false });
    }
  },
}));
