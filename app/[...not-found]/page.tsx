import Link from "next/link";
import { Action } from "../_components/action/action.component";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-gray-600 bg-gray-100">
      <h1 className="text-6xl font-semibold">404</h1>
      <h2 className="mt-2 text-3xl">Page Not Found</h2>
      <p className="my-2">Sorry, the page you requested could not be found.</p>
      <Action
        styleType="primary"
        className="mt-6"
        href="/"
        as='link'
      >
        Return Home
      </Action>
    </div>
  );
}
