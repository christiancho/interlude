export const sendSearchQuery = searchQuery => {
  return $.ajax({
    url: `api/searches?search_query=${searchQuery}`
  });
};
