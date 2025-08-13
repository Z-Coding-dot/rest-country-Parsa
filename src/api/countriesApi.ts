import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { CountryDTO } from '../types/Country'

export const countriesApi = createApi({
  reducerPath: 'countriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v3.1/' }),
  endpoints: (builder) => ({
    getAllCountries: builder.query<CountryDTO[], void>({
      query: () => 'all?fields=name,flags,population,region,capital,borders,cca3,translations',
    }),
    getCountryByCode: builder.query<CountryDTO, string>({
      query: (code) => `alpha/${code}?fields=name,flags,population,region,capital,borders,cca3,translations`,
    }),
  }),
})

export const { useGetAllCountriesQuery, useGetCountryByCodeQuery } = countriesApi
