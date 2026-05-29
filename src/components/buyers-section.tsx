export function BuyersSection() {
  return (
    <section
      id="buyers"
      className="bg-[#eae0cf]/20 border-y border-[#7288ae]/20 py-12 sm:py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl text-[#111844] mb-3 sm:mb-4">
            First-Time Buyer Guide
          </h2>
          <p className="text-base sm:text-lg text-[#4b5694] mb-5 sm:mb-6 leading-relaxed">
            Buying your first home in San Diego can feel overwhelming. Jeff
            specializes in guiding first-time buyers through every step — from
            pre-approval and neighborhood selection to closing day.
          </p>
          <ul className="space-y-4 text-[#111844]">
            <li className="flex gap-3 items-start">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#111844] text-white text-sm">
                1
              </span>
              <span className="text-sm sm:text-base pt-0.5">
                <strong className="text-[#111844]">Get pre-approved</strong>
                <span className="text-[#4b5694]">
                  {" "}
                  — Understand your budget before you fall in love with a home.
                </span>
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#111844] text-white text-sm">
                2
              </span>
              <span className="text-sm sm:text-base pt-0.5">
                <strong className="text-[#111844]">Explore neighborhoods</strong>
                <span className="text-[#4b5694]">
                  {" "}
                  — Pacific Beach, Ocean Beach, La Jolla, and more.
                </span>
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#111844] text-white text-sm">
                3
              </span>
              <span className="text-sm sm:text-base pt-0.5">
                <strong className="text-[#111844]">Make a confident offer</strong>
                <span className="text-[#4b5694]">
                  {" "}
                  — Jeff negotiates on your behalf with local market expertise.
                </span>
              </span>
            </li>
          </ul>
          <a
            href="#homes"
            className="block sm:inline-block w-full sm:w-auto text-center mt-6 sm:mt-8 px-6 sm:px-8 py-3 bg-[#111844] text-white rounded-xl hover:bg-[#4b5694] transition-colors"
          >
            Browse Available Homes
          </a>
        </div>
      </div>
    </section>
  );
}
