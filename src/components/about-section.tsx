import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
        <div className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[380px] mx-auto lg:mx-0 order-1 lg:order-none">
          <div className="relative aspect-[2/3] overflow-hidden rounded-[1.75rem] border-[6px] border-white bg-[#f4efe5] shadow-luxe-lg">
            <Image
              src="/listedbyjeff-about.svg"
              alt="Professional photo of Jeff"
              fill
              priority
              sizes="(min-width: 1024px) 360px, (min-width: 640px) 320px, 280px"
              className="scale-[1.06] object-cover object-[56%_40%]"
            />
          </div>
        </div>
        <div className="text-center lg:text-left order-2">
          <p className="eyebrow text-[#7288ae] mb-3">Meet Your Agent</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#111844] mb-4 sm:mb-5">
            About Jeff
          </h2>
          <p className="text-base sm:text-lg text-[#4b5694] mb-4 leading-relaxed font-light">
            Jeff is a San Diego native and licensed realtor dedicated to helping
            buyers find the right home in America&apos;s Finest City. With deep
            knowledge of coastal neighborhoods and a patient, educational
            approach, Jeff makes the process clear and stress-free.
          </p>
          <p className="text-base sm:text-lg text-[#4b5694] mb-7 sm:mb-8 leading-relaxed font-light">
            Whether you&apos;re searching Pacific Beach, Point Loma, or
            Coronado, Jeff provides honest guidance and responsive communication
            from first showing to keys in hand.
          </p>
          <a
            href="#contact"
            className="inline-block w-full sm:w-auto text-center px-7 sm:px-9 py-3.5 bg-[#111844] text-white rounded-full hover:bg-[#4b5694] transition-colors tracking-wide"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
