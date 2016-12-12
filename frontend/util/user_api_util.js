export const fetchUser = username => {
  return $.ajax({
    url: `api/users/${username}`
  })
};
