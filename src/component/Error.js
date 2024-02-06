import { useRouteError } from "react-router-dom";

const Error = () => {
  const routeError = useRouteError();
  return (
    <div className="error">
      <h1>Something Went wrong 🤯</h1>
      <p>
        {routeError.status}: {routeError.statusText}
      </p>
    </div>
  );
};

export default Error;
