export function SiteFooter() {
  return (
    <footer id="contact" className="bg-[#111844] text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h3 className="text-xl sm:text-2xl mb-2 sm:mb-3 px-2">
          Ready to Find Your Dream Home?
        </h3>
        <p className="text-[#eae0cf] text-base sm:text-lg mb-5 sm:mb-6 max-w-2xl mx-auto px-2 leading-relaxed">
          As a San Diego specialist, I&apos;m here to help first-time buyers
          navigate the journey to homeownership with confidence.
        </p>
        <a
          href="mailto:"
          className="inline-block w-full sm:w-auto max-w-xs sm:max-w-none mx-auto px-8 sm:px-10 py-3.5 sm:py-4 bg-[#4b5694] text-white rounded-xl hover:bg-[#7288ae] transition-colors text-base sm:text-lg"
        >
          Contact Jeff
        </a>
      </div>
    </footer>
  );
}
