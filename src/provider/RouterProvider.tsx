import { createBrowserRouter } from 'react-router';
import { RouterProvider as Provider } from 'react-router/dom';
import Home from '../pages/Home/Home';
import { PAGE_PATHS } from '../shared/config/paths';

export default function RouterProvider() {
  const router = createBrowserRouter([
    {
      path: PAGE_PATHS.HOME,
      Component: Home,
    },
  ]);
  return <Provider router={router} />;
}
