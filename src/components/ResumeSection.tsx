
import Link from "next/link"

const Resume = () => {
    return (
        <div className="text-[1rem] pb-6 md:pb-0">
              <Link
                href={"/resume1.pdf"}
                target="_blank"
                className="flex items-center hover:text-teal-300"
              >
                {" "}
                View Full Resume{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 hover:transform hover:scale-150 hover:transition-all hover:duration-100 hover:ease-in-out"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </Link>
            </div>
    )
}

export default Resume