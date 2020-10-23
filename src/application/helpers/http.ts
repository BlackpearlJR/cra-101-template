export default function getQuery(): any{
  if(typeof window === undefined) return null;
  const location = window.location;

  const queryStrings = location && location.search.replace('?', '');

  const queryParams: any = {};

  if (queryStrings){
    const params = queryStrings.split('&');
    for (let i = 0; i < params.length; i += 1){
      const pair = params[i].split('=');
      queryParams[pair[0]] = decodeURIComponent(pair[1]);
    }
    return queryParams;
  }

  return null;
}