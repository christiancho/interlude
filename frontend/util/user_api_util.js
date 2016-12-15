export const fetchAllUsers = () => {
  return $.ajax({
    url: 'api/users'
  });
};

export const fetchUser = username => {
  return $.ajax({
    url: `api/users/${username}`
  });
};

export const updateUser = ( formData, username) => {
  return $.ajax({
    method: 'patch',
    url: `api/users/_`,
    data: formData,
    processData: false,
    contentType: false
  });
};
