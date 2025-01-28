import { Layout } from "../components/Layout";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Layout>
      <div className="has-text-centered">
        <h1 className="title is-1 has-text-primary">404 - Page Not Found</h1>
        <p className="subtitle is-4">
          Oops! The page you're looking for doesn't exist.
        </p>
        <div className="buttons is-centered mt-5">
          <Link to="/" className="button is-primary is-outlined">
            Go Home
          </Link>
          <Link to="/dashboard" className="button is-link is-outlined">
            Visit Dashboard
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export { NotFound };
