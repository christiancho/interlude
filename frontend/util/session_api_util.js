export const signup = (user, success, error) => {
  return $.ajax({
    method: 'post',
    url: '/api/users',
    data: { user: user },
    dataType: 'JSON',
    success,
    error,
  });
};

export const login = (user, success, error) => {
  return $.ajax({
    method: 'post',
    url: '/api/sessions',
    data: { user: user },
    dataType: 'JSON',
    success,
    error,
  });
};

export const logout = (success, error) => {
  return $.ajax({
    method: 'delete',
    url: '/api/sessions',
    success,
    error,
  });
};
