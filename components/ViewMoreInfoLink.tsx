"use client";

export default function ViewMoreInfoLink() {
  const handleClick = () => {
    document.getElementById("specification")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <button
      onClick={handleClick}
      className="block mb-3 text-brand text-sm font-semibold hover:underline"
    >
      View More Info
    </button>
  );
}