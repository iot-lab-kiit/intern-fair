import Link from "next/link";

export default function Component() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <div className="mx-auto h-12 w-12 text-primary" />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Oops, page not found!
        </h1>
        <p className="mt-4 text-foreground">
          The page you're looking for doesn't exist. Let's get you back on
          track.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center rounded-md border border-gray-300 bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors duration-300 hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            prefetch={false}
          >
            <span className="text-base sm:text-lg md:text-xl">
              Go to Homepage
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
