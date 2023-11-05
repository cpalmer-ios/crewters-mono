import {faTrophy} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Text} from 'native-base';
import React from 'react';
import {useColorScheme} from 'react-native';

export const getAllTrophies = (sub: string | undefined, setState: any) => {
  fetch(`http://localhost:3000/api/trophies`, {
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

// GET ?sub
export const searchTrophyyUserSub = (
  sub: string | undefined,
  setState: any,
) => {
  fetch(`http://localhost:3000/api/trophy?sub=${sub}`, {
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
export const updateTrophy = async (id: any, req: any) => {
  return await fetch(
    `http://localhost:3000/api/trophy/info/${id}`,
    {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req),
    },
  );
};
// POST
export const createTrophy = (req: any) => {
  return fetch('http://localhost:3000/api/trophy', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req),
  });
};
// DELETE
export const deleteTrophyByID = (id: string | undefined) => {
  fetch(`http://localhost:3000/api/trophy/${id}`, {
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

export const Trophy = ({item, indx}: any) => {
  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';

  return (
    <Text key={indx} style={
      isDarkTheme ? 
      {color: '#FFF', marginTop: 20, marginLeft: 50} :
      {color: '#244c66', marginTop: 20, marginLeft: 50}
      }>
      <FontAwesomeIcon
        color={ isDarkTheme ? '#FFF': '#244c66'}
        style={{marginRight: 20, opacity: 1}}
        icon={faTrophy}
      />
      {item.title}
    </Text>
  );
};

export const trophySystem = (item: any, indx: any, events: any, isDarkTheme: any) => {
  // add switch case here
  
  switch (events?.length) {
    case 1:
      if (indx === 15 && events.length >= 1) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 2:
      if (indx === 15 && events.length >= 1) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 3:
      if (indx === 8 && events.length >= 3) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 3) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 4:
      if (indx === 8 && events.length >= 4) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 4) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 5:
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 6:
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 7:
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 8:
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 9:
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 10:
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 11:
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 12:
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 13:
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 14:
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 15:
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 16:
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 17:
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 18:
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 19:
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 20:
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 21:
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 22:
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 23:
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 24:
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 25:
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 26:
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 27:
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 28:
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 29:
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 30:
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 31:
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 32:
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 33:
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 34:
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 35:
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 36:
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 37:
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 38:
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 39:
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 40:
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 41:
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 42:
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 43:
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 44:
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 45:
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 46:
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 47:
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 48:
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 49:
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 50:
      if (indx === 3 && events.length >= 50) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 51:
      if (indx === 3 && events.length >= 50) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 52:
      if (indx === 3 && events.length >= 50) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 53:
      if (indx === 3 && events.length >= 50) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 54:
      if (indx === 3 && events.length >= 50) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 55:
      if (indx === 3 && events.length >= 50) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 56:
      if (indx === 3 && events.length >= 50) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 57:
      if (indx === 3 && events.length >= 50) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 58:
      if (indx === 3 && events.length >= 50) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 59:
      if (indx === 3 && events.length >= 50) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 60:
      if (indx === 2 && events.length >= 60) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 3 && events.length >= 50) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 61:
      if (indx === 2 && events.length >= 60) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 3 && events.length >= 50) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 62:
      if (indx === 2 && events.length >= 60) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 3 && events.length >= 50) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 63:
      if (indx === 2 && events.length >= 60) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 3 && events.length >= 50) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 64:
      if (indx === 2 && events.length >= 60) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 3 && events.length >= 50) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 65:
      if (indx === 2 && events.length >= 60) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 3 && events.length >= 50) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 66:
      if (indx === 2 && events.length >= 60) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 3 && events.length >= 50) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 67:
      if (indx === 2 && events.length >= 60) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 3 && events.length >= 50) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 68:
      if (indx === 2 && events.length >= 60) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 3 && events.length >= 50) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 69:
      if (indx === 2 && events.length >= 60) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 3 && events.length >= 50) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 70:
      if (indx === 2 && events.length >= 60) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 3 && events.length >= 50) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 71:
      if (indx === 2 && events.length >= 60) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 3 && events.length >= 50) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 72:
      if (indx === 2 && events.length >= 60) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 3 && events.length >= 50) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 73:
      if (indx === 2 && events.length >= 60) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 3 && events.length >= 50) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 74:
      if (indx === 2 && events.length >= 60) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 3 && events.length >= 50) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 75:
      if (indx === 1 && events.length >= 75) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 2 && events.length >= 60) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 3 && events.length >= 50) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 76:
      if (indx === 1 && events.length >= 75) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 2 && events.length >= 60) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 3 && events.length >= 50) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 77:
      if (indx === 1 && events.length >= 75) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 2 && events.length >= 60) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 3 && events.length >= 50) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 78:
      if (indx === 1 && events.length >= 75) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 2 && events.length >= 60) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 3 && events.length >= 50) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 79:
      if (indx === 1 && events.length >= 75) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 2 && events.length >= 60) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 3 && events.length >= 50) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 80:
      if (indx === 1 && events.length >= 75) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 2 && events.length >= 60) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 3 && events.length >= 50) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 81:
      if (indx === 1 && events.length >= 75) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 2 && events.length >= 60) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 3 && events.length >= 50) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 82:
      if (indx === 1 && events.length >= 75) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 2 && events.length >= 60) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 3 && events.length >= 50) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 83:
      if (indx === 1 && events.length >= 75) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 2 && events.length >= 60) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 3 && events.length >= 50) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 84:
      if (indx === 1 && events.length >= 75) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 2 && events.length >= 60) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 3 && events.length >= 50) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 85:
      if (indx === 1 && events.length >= 75) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 2 && events.length >= 60) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 3 && events.length >= 50) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 86:
      if (indx === 1 && events.length >= 75) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 2 && events.length >= 60) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 3 && events.length >= 50) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 87:
      if (indx === 1 && events.length >= 75) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 2 && events.length >= 60) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 3 && events.length >= 50) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 88:
      if (indx === 1 && events.length >= 75) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 2 && events.length >= 60) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 3 && events.length >= 50) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 89:
      if (indx === 1 && events.length >= 75) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 2 && events.length >= 60) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 3 && events.length >= 50) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 90:
      if (indx === 1 && events.length >= 75) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 2 && events.length >= 60) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 3 && events.length >= 50) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 91:
      if (indx === 1 && events.length >= 75) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 2 && events.length >= 60) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 3 && events.length >= 50) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 92:
      if (indx === 1 && events.length >= 75) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 2 && events.length >= 60) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 3 && events.length >= 50) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 93:
      if (indx === 1 && events.length >= 75) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 2 && events.length >= 60) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 3 && events.length >= 50) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 94:
      if (indx === 1 && events.length >= 75) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 2 && events.length >= 60) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 3 && events.length >= 50) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 95:
      if (indx === 1 && events.length >= 75) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 2 && events.length >= 60) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 3 && events.length >= 50) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 96:
      if (indx === 1 && events.length >= 75) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 2 && events.length >= 60) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 3 && events.length >= 50) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 97:
      if (indx === 1 && events.length >= 75) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 2 && events.length >= 60) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 3 && events.length >= 50) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 98:
      if (indx === 1 && events.length >= 75) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 2 && events.length >= 60) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 3 && events.length >= 50) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 99:
      if (indx === 1 && events.length >= 75) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 2 && events.length >= 60) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 3 && events.length >= 50) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    case 100:
      if (indx === 1 && events.length >= 75) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 2 && events.length >= 60) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 3 && events.length >= 50) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 4 && events.length >= 30) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 5 && events.length >= 20) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 6 && events.length >= 10) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 7 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 8 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
      if (indx === 15 && events.length >= 5) {
        return <Trophy indx={indx} item={item}></Trophy>;
      }
    default:
      return (
        <Text
          key={indx}
          style={
            isDarkTheme ? 
            {color: '#FFF', marginTop: 20, marginLeft: 50}
            :
            {color: '#244c66', marginTop: 20, marginLeft: 50}
            }>
          <FontAwesomeIcon   
            style={
              isDarkTheme ? 
              {color: '#FFF', marginRight: 20, opacity: 0.5}
              :
              {color: '#244c66', marginRight: 20, opacity: 0.5}
            }
            icon={faTrophy}
          />
          {item.title}
        </Text>
      );
  }
};
