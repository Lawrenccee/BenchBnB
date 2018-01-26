export const signup = user => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user: user },
    dataType: 'json'
  })
);

export const login = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user: user },
    dataType: 'json'
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session',
    dataType: 'json'
  })
);
