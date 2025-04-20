import Link from "next/link";

export default function HomeAbout() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 max-w-screen-xl mx-auto bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Text Content */}
        <div className="pr-0 lg:pr-8">
          <p className="text-gray-500 uppercase text-sm font-medium text-center lg:text-start tracking-wider mb-2  py-1 px-4 rounded-full inline-block">
            WHO WE ARE Hello
          </p>

          <h2 className="text-3xl md:text-2xl font-bold leading-tight mb-6">
            Passion for bilingual education
          </h2>

          <div className="space-y-4 text-gray-700">
            <p>
              Together with the IVS Alliance we open new doors for our students
              in the Netherlands. We offer them bilingual education in sectors
              like business, hospitality, fashion, wholesale, management etc.
              The bilingual program ensures a diploma (equivalent to A-level).
            </p>
          </div>

          <div className="flex justify-center lg:justify-start">
            <Link href="/about-Us">
              <button className="bg-[#0c3458] text-sm  text-white items-center px-6 py-3 mt-8 rounded-md hover:bg-blue-700 transition">
                About Us{" "}
                <span className="text-sm ps-[2px] font-bold">&gt;</span>
              </button>
            </Link>
          </div>
        </div>

        {/* Right Column - Stats with Icons */}
        <div className="space-y-10">
          {/* Stat Item 1 */}
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 rounded-full border-2 border-[#0c3458] flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-blue-500"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M12 6L12 18M6 12L18 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-lg uppercase font-bold mb-1">
                communication
              </h3>
              <p className="text-gray-600">
                Four times per year we come together to meet, share knowledge
                and further develop our programs
              </p>
            </div>
          </div>

          {/* Stat Item 2 */}
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 rounded-full border-2 border-[#0c3458] flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-blue-500"
                >
                  <path
                    d="M12 2L20 7V17L12 22L4 17V7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 9L12 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M16 11L16 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M8 11L8 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold uppercase mb-1">
                New developments
              </h3>
              <p className="text-gray-600">
                Together with entrepreneurs the IVS Alliance teachers develop
                new content for the BTEC programs
              </p>
            </div>
          </div>

          {/* Stat Item 3 */}
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 rounded-full border-2 border-[#0c3458] flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-blue-500"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="6"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="2"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold uppercase mb-1">the future</h3>
              <p className="text-gray-600">
                In the future the IVS Alliance teachers also want to co-create
                content for the BTEC program with our students
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Light gray line at the bottom */}
      <div className="w-full h-px bg-gray-200 mt-16"></div>
    </section>
  );
}
