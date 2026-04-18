import Image from "next/image";
import { techLookup, normalizeTechKey } from "@/lib/data/skills";
import { getContrastTextColor } from "@/lib/utils";

const FALLBACK_COLOR = "#6B7280";

export default function TechBadge({ name }: { name: string }) {
  const match = techLookup.get(normalizeTechKey(name));
  const color = match?.color ?? FALLBACK_COLOR;
  const imageUrl = match?.imageUrl;
  const fg = getContrastTextColor(color);
  const isDarkBg = fg === "#ffffff";
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium"
      style={{ backgroundColor: color, color: fg }}
    >
      {imageUrl && (
        <span
          className={`relative inline-block h-4 w-4 shrink-0 ${
            isDarkBg ? "brightness-0 invert" : ""
          }`}
        >
          <Image
            src={imageUrl}
            alt=""
            fill
            sizes="16px"
            className="object-contain"
          />
        </span>
      )}
      <span>{name}</span>
    </span>
  );
}
