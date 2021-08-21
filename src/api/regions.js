import API from './';

export const getAllRegions = () => {
  return API.get('api.php?all');
};

export const getLocations = async (regions) => {
  const getAllObjects = regions.map((region) => {
    return API.get(`api.php?region=${region.title}`).then((res) => {
      const ans = { places: res.data.region, ...region };
      return ans;
    });
  });

  return await Promise.all(getAllObjects);
};

export const getCameras = async (id) => {
  return API.get(`api.php?object=${id}`);
};
