import {Alert} from 'react-native';

export const getUserByID = async (u: any, setState: any) => {
  await fetch(`http://localhost:3000/api/user/${u.sub}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(responseData => {
      setState(responseData);
    });
};

export const getUserPictureByID = async (u: any) => {
  return await fetch(`http://localhost:3000/api/user/${u}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(responseData => {
      // Alert.alert(responseData.picture)
      return responseData.picture;
    });
};

export const createUser = (u: any) => {
  let user = {
    ...u,
  };

  fetch(`http://localhost:3000/api/user`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(u),
  })
    .then(response => response.json())
    .then(responseData => {
      return JSON.stringify(responseData);
    });
};

export const checkUserChallenges = async (id: any) => {
  return await fetch(`http://localhost:3000/api/user/${id}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(responseData => {
      return responseData?.challenges?.length;
    });
};

export const updateUser = (id: any, u: any) => {
  let user = {
    ...u,
  };
  fetch(`http://localhost:3000/api/user/info/${id}`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(u),
  })
    .then(response => response.json())
    .then(responseData => {
      return JSON.stringify(responseData);
    });
};
