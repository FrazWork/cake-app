

import {ICake} from '../../models';
const baseURL = 'http://ec2-34-243-153-154.eu-west-1.compute.amazonaws.com/api/';

const mapToCakes = (cakesResponse: any[]):ICake[] => {
  return cakesResponse.map(mapCake);
};

const mapCake = (cake:any):ICake => {
  return {
    id: cake.id,
    name: cake.name,
    comment: cake.comment,
    imageUrl: cake.imageUrl,
    yumFactor: cake.yumFactor
  };
};

export const fetchCakes = ():Promise<ICake[]> => {
  const URL = baseURL + 'cakes';
  return fetch(URL, { method: 'GET'})
     .then( (response) => (response.json()))
     .then(mapToCakes);
};

export function addCake(requestBody:any){
  const URL = baseURL + 'cakes';  
  return fetch(URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),})
      .then((response) => response.json());        
  
}

