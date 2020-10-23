import { useLocation, useHistory, useParams, useRouteMatch } from 'react-router-dom';
import getQuery from '@/application/helpers/http';
import RouterInterface from '../interfaces/RouterInterface.d';

function useRouter(): RouterInterface{
  const router = useLocation();
  const history = useHistory();
  const query = getQuery();
  const params = useParams();
  const match = useRouteMatch();
  console.log({
    router,
    history
  });

  return (
    {
      ...router,
      pathname: match.path,
      asPath: router.pathname,
      history: {
        action: history.action,
        length: history.length,
        location: history.location
      },
      query: {
        ...query,
        ...params
      },
      goBack: history.goBack,
      goForward: history.goForward,
      push: history.push,
      replace: history.replace,
      isExact: match.isExact
    }
  );
}

export default useRouter;