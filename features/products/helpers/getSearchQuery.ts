import type { Route } from 'next';
import { createSerializer, parseAsString } from 'nuqs/server';

export const searchQueryParsers = {
  category: parseAsString,
  search: parseAsString,
  sort: parseAsString,
  page: parseAsString
};

const serialize = createSerializer(searchQueryParsers);

const getSearchQuery = (key: string, value: string | number, searchParams: object) => {
  const href = serialize('/products', { ...searchParams, [key]: value });

  return href as Route;
};

export default getSearchQuery;
