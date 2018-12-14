// export const login = user => (
//   $.ajax({
//     method: 'POST',
//     url: '/api/session',
//     data: { user },
//   })
// );

export const login = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: {
      user: {
        email_address: user.emailAddress,
        password: user.password,
        username: user.username,
      },
    },
  })
);

export const signup = user => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: {
      user: {
        email_address: user.emailAddress,
        password: user.password,
        username: user.username,
      },
    },
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session',
  })
);
