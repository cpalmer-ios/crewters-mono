// GET ?sub
export const searchEventByUserSub = async (
  sub: string | undefined,
  setState: any,
) => {
  return await fetch(`http://localhost:3000/api/event?sub=${sub}`, {
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
// PATCH
export const updateEvent = async (id: any, req: any) => {
  return await fetch(`http://localhost:3000/api/event/info/${id}`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req),
  });
};
// POST
export const createEvent = (req: any) => {
  return fetch('http://localhost:3000/api/event', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req),
  });
};
// DELETE
export const deleteEventByID = (id: string | undefined) => {
  fetch(`http://localhost:3000/api/event/${id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(responseData => {
      return 'Event Deleted';
    });
};
