import { Asset } from 'expo-asset';

export default function cacheAssetsAsync({
  images = []
}) {
  return Promise.all([
    ...cacheImages(images)
  ]);
}

function cacheImages(images) {
  return images.map(image => Asset.fromModule(image).downloadAsync());
}
