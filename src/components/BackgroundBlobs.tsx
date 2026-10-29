export default function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 contain-strict">
      {/* Top Left Indigo/Violet Glow */}
      <div className="absolute -top-[15%] -left-[10%] w-[550px] h-[550px] rounded-full bg-gradient-to-br from-indigo-600/20 via-purple-600/15 to-transparent blur-3xl transform-gpu" />

      {/* Top Right Cyan Glow */}
      <div className="absolute top-[10%] -right-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-cyan-500/15 via-blue-600/10 to-transparent blur-3xl transform-gpu" />

      {/* Center Ambient Subtle Blob */}
      <div className="absolute top-[45%] left-[25%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-violet-600/10 via-pink-500/10 to-transparent blur-3xl opacity-20 transform-gpu" />

      {/* Bottom Emerald/Cyan Glow */}
      <div className="absolute -bottom-[10%] right-[15%] w-[520px] h-[520px] rounded-full bg-gradient-to-t from-emerald-500/10 via-teal-600/10 to-transparent blur-3xl transform-gpu" />

      {/* Subtle Noise / Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />
    </div>
  );
}
