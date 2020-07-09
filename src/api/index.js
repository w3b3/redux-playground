/* eslint-disable no-undef */
export async function callApi() {
  const response = await fetch(
    `${process.env.REACT_APP_D}/users/${process.env.REACT_APP_U}/photos`,
    {
      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_A}`,
      },
    }
  );
  return await response.json();
}
