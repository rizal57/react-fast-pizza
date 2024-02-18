import { Link, useNavigate } from "react-router-dom";

export default function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const className =
    "text-red-500 transition-all duration-300 ease-out hover:text-red-600 hover:underline";

  if (to === "-1" || to === -1)
    return (
      <button onClick={() => navigate(-1)} className={className}>
        {children}
      </button>
    );

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}
