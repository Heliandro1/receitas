import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getFavorites(key) {
  const favorites = await AsyncStorage.getItem(key)
  return JSON.parse(favorites) || [];
}

export async function saveFavorite(key, newItem) {
  const myFavorites = await getFavorites(key);

  const hasItem = myFavorites.some(item => item.id === newItem.id);
  if (hasItem) {
    return;
  }

  myFavorites.push(newItem)
  await AsyncStorage.setItem(key, JSON.stringify(myFavorites))

}

export async function removeItem(id) {
  const receipes = await getFavorites('@appreceitas');
  const myFavorites = receipes.filter(item => item.id !== id);
  await AsyncStorage.setItem('@appreceitas', JSON.stringify(myFavorites));
  return myFavorites;
}

export async function isFavorite(receipe) {
  const myReceipes = await getFavorites('@appreceitas');
  const favorite = myReceipes.find(item => item.id === receipe.id);
  if (favorite) {
    return true;
  }
  return false;
}
