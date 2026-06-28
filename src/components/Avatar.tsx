export default function Avatar({ size = 36 }: { size?: number }) {
  return (
    <span
      style={{ width: size, height: size, fontSize: size * 0.4 }}
      className="inline-flex items-center justify-center rounded-full bg-accent text-white font-serif shrink-0"
    >
      O
    </span>
  );
}
