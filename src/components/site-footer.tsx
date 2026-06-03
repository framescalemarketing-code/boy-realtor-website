export function SiteFooter() {
  return (
    <footer id="contact" className="bg-[#111844] text-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <p className="eyebrow text-[#eae0cf]/80 mb-4">Let&apos;s Connect</p>
        <h3 className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-5 px-2 text-white">
          Ready to find your dream home?
        </h3>
        <div className="mx-auto mb-5 sm:mb-6 h-px w-16 bg-[#eae0cf]/40" />
        <p className="text-[#eae0cf] text-base sm:text-lg mb-7 sm:mb-9 max-w-2xl mx-auto px-2 leading-relaxed font-light">
          As a San Diego specialist, I&apos;m here to help first-time buyers
          navigate the journey to homeownership with confidence.
        </p>
        <a
          href="mailto:"
          className="inline-block w-full sm:w-auto max-w-xs sm:max-w-none mx-auto px-9 sm:px-12 py-3.5 sm:py-4 bg-[#eae0cf] text-[#111844] rounded-full hover:bg-white transition-colors text-base sm:text-lg tracking-wide"
        >
          Contact Jeff
        </a>

        <div className="mt-12 sm:mt-16 border-t border-white/10 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-[#7288ae]">
          <span className="font-(family-name:--font-playfair) text-base text-[#eae0cf]">
            listedbyjeff
          </span>
          <span>
            &copy; {2026} listedbyjeff.com &middot; San Diego Real Estate
          </span>
        </div>
      </div>
    </footer>
  );
}
