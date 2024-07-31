// store/useServicesStore.ts

import create from "zustand";
import { getRequest } from "../../services";

export interface Service {
  id: number;
  title: string;
  body: string;
  url?: string;
}

interface ServicesState {
  services: Service[];
  loading: boolean;
  error: string | null;
  fetchServices: () => Promise<void>;
}

export const useServicesStore = create<ServicesState>((set) => ({
  services: [],
  loading: false,
  error: null,
  fetchServices: async () => {
    set({ loading: true, error: null });
    try {
      const response = await getRequest<Service[]>(
        "https://jsonplaceholder.typicode.com/posts"
      );
      set({ services: response, loading: false });
    } catch (error) {
      set({ error: "Fetching Services Failed", loading: false });
    }
  },
}));
