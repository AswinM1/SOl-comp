function Mask() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative h-[250px] w-[265px] overflow-hidden rounded-xl bg-white">

        {/* Scrollable content */}
        <div className="h-full overflow-y-auto px-7 py-4 font-sans text-black">
          <p>
            consectetur jhjhkj adipiscing elit. ridiculus mus. Donec quam
            felis, ultricies nec, pellentesque Aenean commodo. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Donec quam felis,
            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat
            massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
            vulputate eget, arcu.
          </p>
        </div>

        {/* Top fade */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-10 bg-gradient-to-b from-white via-white/80 to-transparent" />

        {/* Bottom fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-10 bg-gradient-to-t from-white via-white/80 to-transparent" />

      </div>
    </div>
  );
}

export default Mask;