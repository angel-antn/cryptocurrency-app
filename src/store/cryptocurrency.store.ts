import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { TopCryptoCurrency } from "../interfaces/top_crypto_currency.interface";
import {
  getCryptos,
  getCurrentCryptoPrice,
} from "../services/cryptocurrency_service";
import { CryptoCurrencyData } from "../interfaces/crypto_currency_data.interface";
import { Pair } from "../interfaces/pair.interface";

interface CryptoStore {
  cryptocurrencies: TopCryptoCurrency["Data"];
  cryptocurrencyData?: CryptoCurrencyData;
  isLoading: boolean;
  fetchCryptos: () => Promise<void>;
  fetchCryptoData: (pair: Pair) => Promise<void>;
}

export const useCryptoStore = create<CryptoStore>()(
  devtools((set) => ({
    cryptocurrencies: [],
    cryptocurrencyData: undefined,
    isLoading: false,
    fetchCryptos: async () => {
      const data = await getCryptos();
      set(() => ({
        cryptocurrencies: data.Data,
      }));
    },
    fetchCryptoData: async (pair) => {
      set(() => ({
        isLoading: true,
      }));
      const data = await getCurrentCryptoPrice(pair);
      set(() => ({
        cryptocurrencyData: data,
        isLoading: false,
      }));
    },
  }))
);
