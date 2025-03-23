export default function Background() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <div
        className="absolute inset-0 bg-[#33ff33] opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(51, 255, 51, 0.1) 1px, rgba(51, 255, 51, 0.1) 2px)",
        }}
      ></div>
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(circle at center, #33ff33 0%, rgba(51, 255, 51, 0) 100%)",
        }}
      ></div>
    </div>
  );
}
