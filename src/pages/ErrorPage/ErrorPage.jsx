import { Link, useNavigate } from "react-router";


const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 px-6 text-white">
      {/* Glow background blobs */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-purple-600/30 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-blue-600/30 blur-3xl" />

      <div className="relative z-10 max-w-xl text-center">
        {/* Big 404 */}
        <h1 className="bg-linear-to-r from-purple-400 via-fuchsia-400 to-blue-400 bg-clip-text text-8xl font-extrabold text-transparent sm:text-9xl animate-pulse">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
          Page not found
        </h2>
        <p className="mt-3 text-slate-400">
          The page you're looking for doesn't exist, was moved, or the link is
          broken. Let's get you back on track.
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="rounded-xl bg-linear-to-r from-purple-600 to-blue-600 px-6 py-3 font-medium shadow-lg shadow-purple-600/20 transition hover:scale-105 hover:shadow-purple-600/40"
          >
            Back to Home
          </Link>
          <button
            onClick={() => navigate(-1)}
            className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-medium backdrop-blur transition hover:bg-white/10"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
