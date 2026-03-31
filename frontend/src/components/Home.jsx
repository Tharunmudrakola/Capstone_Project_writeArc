import { Link } from "react-router";

function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6">
      {/* Hero Section */}
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Welcome to <span className="text-blue-600">WriteArc</span>
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          A modern platform to read, write, and share insightful articles.
          Discover stories across technology, design, security, and more.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4">
          <Link
            to="/user-profile"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Explore Articles
          </Link>

          <Link
            to="/author-profile"
            className="bg-white border border-blue-600 text-blue-600 px-6 py-3 rounded-lg shadow hover:bg-blue-50 transition"
          >
            Write an Article
          </Link>
        </div>
      </div>

      
      
    </div>
  );
}

export default Home;