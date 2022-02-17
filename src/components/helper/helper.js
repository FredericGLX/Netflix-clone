export const getRandomNumber = () => {
  return Math.floor(Math.random() * 10);
};

export const reduceText = (text, number) => {
  return text?.length > number ? text.substr(0, number - 1) + '...' : text;
};

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const handleWatchlist = (objectData) => {
  let result = [];
  let storageArray = JSON.parse(localStorage.getItem('currentWatchlist'));
  if (!storageArray) {
    result.push(objectData);
    localStorage.setItem('currentWatchlist', JSON.stringify(result));
  }
  if (storageArray) {
    let existingItem = storageArray.find((item) => item.id === objectData.id);
    if (existingItem) {
      result = storageArray.filter((item) => item.id !== objectData.id);
    } else {
      result = [...storageArray, objectData];
    }
  }

  localStorage.setItem('currentWatchlist', JSON.stringify(result));
};
