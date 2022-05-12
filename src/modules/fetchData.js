const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

const addGameToEndPoint = async (game) => {
  let result;
  try {
    const res = await fetch(baseUrl, {
      method: 'POST',
      body: JSON.stringify({
        name: game,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    result = await res.json();
    localStorage.setItem('game_id', result.result.split(' ')[3]);
  } catch (err) {
    return err;
  }
  return result;
};

const addScoreToEndPoint = async (user, score) => {
  const gameId = localStorage.getItem('game_id');
  let result;
  try {
    const res = await fetch(`${baseUrl}${gameId}/scores/`, {
      method: 'POST',
      body: JSON.stringify({
        user,
        score,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    result = await res.json();
  } catch (err) {
    return err;
  }
  return result;
};

const getScoreList = async () => {
  const gameId = localStorage.getItem('game_id');
  let result;
  try {
    const res = await fetch(`${baseUrl}${gameId}/scores/`);
    result = await res.json();
  } catch (err) {
    return err;
  }
  return result;
};

export { addGameToEndPoint, addScoreToEndPoint, getScoreList };