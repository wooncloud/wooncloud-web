import Image from "next/image";
import { skills } from "@/lib/data/skills";
import { getContrastTextColor } from "@/lib/utils";

function normalize(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]/g, "");
}

const extraTech: Record<string, { color: string; imageUrl?: string }> = {
  openai: { color: "#412991" },
  websocket: { color: "#010101" },
  dndkit: { color: "#0069FF" },
  artillery: { color: "#FF6A3D" },
  mybatis: { color: "#7F8C8D" },
  oracledatabase11g: { color: "#F80000" },
  oracledatabase: { color: "#F80000" },
  sweetalert2: { color: "#F27474" },
  springsecurity: { color: "#6DB33F" },
  apachetomcat85: { color: "#F8DC75" },
  apachetomcat: { color: "#F8DC75" },
  unity: { color: "#000000" },
  vivevr: { color: "#00B2A9" },
  sym4d: { color: "#4B4B4B" },
  visualstudio: { color: "#5C2D91" },
  visualbasic: { color: "#5C2D91" },
  bootstrap4: { color: "#7952B3" },
  infragistics: { color: "#DD1D21" },
  mssql: { color: "#CC2927" },
  aspnetwebforms: { color: "#512BD4" },
  aspnetmvc: { color: "#512BD4" },
  aspnetcore: { color: "#512BD4" },
  aspnet: { color: "#512BD4" },
  asp: { color: "#512BD4" },
  net: { color: "#512BD4" },
  dotnet: { color: "#512BD4" },
  jexframework: { color: "#6B7280" },
  java11: { color: "#007396" },
  springframework43: { color: "#6DB33F" },
  springframework: { color: "#6DB33F" },
  fullcalendar: { color: "#2E7D9C" },
  csharp: { color: "#239120" },
  c: { color: "#239120" },
};

const skillLookup = new Map<string, { color: string; imageUrl?: string }>();
for (const s of skills) {
  skillLookup.set(normalize(s.id), { color: s.color, imageUrl: s.imageUrl });
  skillLookup.set(normalize(s.name), { color: s.color, imageUrl: s.imageUrl });
}

export default function TechBadge({ name }: { name: string }) {
  const key = normalize(name);
  const match = skillLookup.get(key) ?? extraTech[key];
  const color = match?.color ?? "#6B7280";
  const imageUrl = match?.imageUrl;
  const fg = getContrastTextColor(color);
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium"
      style={{ backgroundColor: color, color: fg }}
    >
      {imageUrl && (
        <span
          className={`relative inline-block h-4 w-4 shrink-0 ${
            fg === "#ffffff" ? "[filter:brightness(0)_invert(1)]" : ""
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
