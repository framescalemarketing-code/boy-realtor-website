const firstTimeBuyerGuideUrl =
  "https://shop.beacons.ai/listedbyjeff/259ca468-6575-4663-b0b1-f92531f99690?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnH5PR--p1M_7A3SfDTDHOzEHBjHai_TnIoeQv3rq7Rj36SIDqSUaQdE3j04Q_aem_7RjlJDIF5CT_7GysxeZu9A";

export function BuyersSection() {
  return (
    <section
      id="buyers"
      className="border-y border-[#7288ae]/20 bg-[#eae0cf]/20 py-12 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <h2 className="mb-3 text-2xl text-[#111844] sm:mb-4 sm:text-3xl">
            First-Time Buyer Guide
          </h2>
          <p className="mb-5 text-base leading-relaxed text-[#4b5694] sm:mb-6 sm:text-lg">
            Buying your first home in San Diego can feel overwhelming. Jeff
            specializes in guiding first-time buyers through every step - from
            pre-approval and neighborhood selection to closing day.
          </p>

          <ul className="space-y-4 text-[#111844]">
            <li className="flex items-start gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#111844] text-sm text-white">
                1
              </span>
              <span className="pt-0.5 text-sm sm:text-base">
                <strong className="text-[#111844]">Get pre-approved</strong>
                <span className="text-[#4b5694]">
                  {" "}
                  - Understand your budget before you fall in love with a home.
                </span>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#111844] text-sm text-white">
                2
              </span>
              <span className="pt-0.5 text-sm sm:text-base">
                <strong className="text-[#111844]">Explore neighborhoods</strong>
                <span className="text-[#4b5694]">
                  {" "}
                  - Pacific Beach, Ocean Beach, La Jolla, and more.
                </span>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#111844] text-sm text-white">
                3
              </span>
              <span className="pt-0.5 text-sm sm:text-base">
                <strong className="text-[#111844]">Make a confident offer</strong>
                <span className="text-[#4b5694]">
                  {" "}
                  - Jeff negotiates on your behalf with local market expertise.
                </span>
              </span>
            </li>
          </ul>

          <div className="mt-6 rounded-2xl border border-[#7288ae]/20 bg-white p-5 shadow-sm sm:mt-8 sm:p-6">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#7288ae]">
              Free Resource
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[#4b5694] sm:text-base">
              Want the full roadmap? Open Jeff&apos;s first-time home buyer guide
              for next steps, tips, and what to expect before you start making
              offers.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a
                href={firstTimeBuyerGuideUrl}
                target="_blank"
                rel="noreferrer"
                className="block w-full rounded-xl bg-[#111844] px-6 py-3 text-center text-white transition-colors hover:bg-[#4b5694] sm:w-auto sm:px-8"
              >
                Open Buyer Guide
              </a>
              <a
                href="#homes"
                className="block w-full rounded-xl border border-[#7288ae]/30 px-6 py-3 text-center text-[#111844] transition-colors hover:border-[#4b5694] hover:text-[#4b5694] sm:w-auto sm:px-8"
              >
                Browse Available Homes
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
