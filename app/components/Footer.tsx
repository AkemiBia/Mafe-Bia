import { Link } from "@remix-run/react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="py-6 text-center text-white">
      <div className="container flex items-center justify-center space-x-4">
        <div className="text-sm">

        </div>
      </div>
      <div className="mt-4 text-sm">
        ❤️ 
      </div>
    </div>
  );
}
