import { json, error } from '@sveltejs/kit';
 

export function GET({ url }) {
  return json({'name': 'Dima'});
}
