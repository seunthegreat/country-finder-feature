import { AxiosError } from 'axios';

export type CountryData = {
  success: boolean;
  country: string | null;
  error: Error | AxiosError | null
}