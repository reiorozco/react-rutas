import React from "react";
import { Navigate, Outlet } from "react-router";

// export default function PrivateRoute(props) {
//   return <Route path={props.path} element={props.element} />;
// }

// export default function PrivateRoute(props) {
//   return <Route {...props} />;
// }

// export default function PrivateRoute({ element: Element, ...rest }) {
//   return (
//     <Route {...rest}>
//       {auth ? <Element /> : <Navigate replace to="/login" />}
//     </Route>
//   );
// }

export default function PrivateRoute({ auth }) {
  // const auth = null;

  return auth ? <Outlet /> : <Navigate replace to="login" />;
}
