import ProtectedRoute from "../pages/common/components/ProtectedRoute";

function mappedAuthRoutes(routes) {
  return routes.map((route) => {
    if (route?.auth)
      route.element = <ProtectedRoute>{route.element}</ProtectedRoute>;

    if (route?.children) mappedAuthRoutes(route.children);

    return route;
  });
}

export default mappedAuthRoutes;
