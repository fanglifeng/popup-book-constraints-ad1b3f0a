export const colors = ["#367b66", "#c29742", "#b74a35", "#305b78", "#78516c"];
export const labels = [
  "世界观·故事",
  "时间跨度",
  "时代背景",
  "画面风格",
  "节奏·声音",
];
export const Coast = ({ beam = 0 }: { beam?: number }) => (
  <svg viewBox="0 0 800 400" width="100%" height="100%">
    <defs>
      <linearGradient id="sky" x2="0" y2="1">
        <stop stopColor="#064b47" />
        <stop offset="1" stopColor="#97a171" />
      </linearGradient>
    </defs>
    <path fill="url(#sky)" d="M0 0H800V400H0Z" />
    {Array.from({ length: 47 }, (_, i) => (
      <circle
        key={i}
        cx={(i * 137) % 800}
        cy={(i * 37) % 200}
        r={i % 3 === 0 ? 1.2 : 0.6}
        fill="#e4d7a4"
        opacity=".55"
      />
    ))}
    <circle cx="210" cy="112" r="58" fill="#e8d6a0" />
    <circle cx="194" cy="104" r="14" fill="#d2c493" opacity=".35" />
    <circle cx="223" cy="140" r="10" fill="#c7bc8c" opacity=".4" />
    <path
      d="M0 248L110 209 177 230 267 191 335 216 410 180 482 220 555 194 637 220 730 193 800 210V310H0Z"
      fill="#7a8b73"
    />
    <path
      d="M0 270L105 238 230 254 340 222 410 249 500 220 570 254 690 231 800 247V350H0Z"
      fill="#355f59"
    />
    <path d="M0 278H800V400H0Z" fill="#083e43" />
    {Array.from({ length: 22 }, (_, i) => (
      <path
        key={i}
        d={`M${(i * 103) % 720} ${290 + i * 4}h${35 + (i % 5) * 15}`}
        stroke="#c0c5a0"
        opacity=".22"
        strokeWidth="2"
      />
    ))}
    <path
      d="M568 318L585 271 639 244 724 229 800 233V400H566Z"
      fill="#253e25"
    />
    <path d="M676 244L684 101H712L721 244Z" fill="#f0e2b5" />
    {[130, 169, 208].map((y) => (
      <path key={y} d={`M682 ${y}H715L717 ${y + 19}H681Z`} fill="#b7432b" />
    ))}
    <path d="M678 101V78L698 61 718 78V101Z" fill="#b54f2d" />
    <path d="M683 83H714V98H683Z" fill="#d9b746" />
    <path
      d={`M699 89L${770 + Math.cos(beam) * 180} ${60 + Math.sin(beam) * 32}V${112 + Math.sin(beam) * 32}Z`}
      fill="#eee3a6"
      opacity=".25"
    />
    {Array.from({ length: 7 }, (_, i) => (
      <g key={i} transform={`translate(${19 + i * 33},234)`}>
        <path
          d="M0 8L14 -5 29 8Z"
          fill={["#d78d42", "#b95341", "#b6a469"][i % 3]}
        />
        <path d="M2 8H27V47H2Z" fill="#eee0b4" />
        <path d="M7 14V42M20 14V42" stroke="#b8ae86" />
      </g>
    ))}
    <path
      d="M0 380Q20 348 42 378Q68 342 95 376Q125 348 152 378Q180 345 208 378Q240 348 270 376Q300 349 333 380Q360 348 392 380Q425 349 455 379Q490 348 520 378Q555 349 585 378Q620 347 650 379Q685 348 718 378Q758 348 800 378V400H0Z"
      fill="#2b7966"
      stroke="#8ea47a"
      strokeWidth="4"
    />
  </svg>
);
export const FrameCard = ({
  index,
  colored,
}: {
  index: number;
  colored: boolean;
}) => (
  <svg viewBox="0 0 190 180" width="100%" height="100%">
    <path d="M0 0H190V180H0Z" fill="#e2d7b5" />
    {Array.from({ length: 15 }, (_, i) => (
      <g key={i} fill="#9c977b">
        <rect x={4 + i * 13} y="4" width="6" height="6" />
        <rect x={4 + i * 13} y="170" width="6" height="6" />
      </g>
    ))}
    <text x="10" y="27" fontSize="13" fill="#595943">
      镜头 {index + 1}
    </text>
    <text x="132" y="27" fontSize="17" fill="#a94b33">
      {[1920, 1965, 1990, 2035][index]}
    </text>
    <g opacity={colored ? 1 : 0.2}>
      <path
        d="M7 36H183V156H7Z"
        fill={
          colored
            ? ["#c27c3a", "#33a7b0", "#4485b3", "#171d42"][index]
            : "#b9b99e"
        }
      />
      {index === 0 ? (
        <>
          <circle cx="145" cy="64" r="21" fill="#eed299" />
          <path d="M7 114L45 82 83 108 119 86 183 112V156H7Z" fill="#4b3625" />
          <path
            d="M7 137Q80 102 183 140"
            stroke="#c09b66"
            strokeWidth="5"
            fill="none"
          />
        </>
      ) : null}
      {index === 1 ? (
        <>
          <path d="M7 137L183 86V156H7Z" fill="#d8b34e" />
          <path d="M24 136L158 75" stroke="#d9dbb7" strokeWidth="5" />
          <path d="M116 95L145 65 150 94Z" fill="#d44635" />
        </>
      ) : null}
      {index === 2 ? (
        <>
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <rect
              key={i}
              x={35 + i * 20}
              y={117 - i * 8}
              width="14"
              height={28 + i * 8}
              fill="#e8dcaa"
            />
          ))}
          <path d="M7 149H183" stroke="#dcbb67" strokeWidth="3" />
        </>
      ) : null}
      {index === 3 ? (
        <>
          {[0, 1, 2, 3, 4].map((i) => (
            <g key={i} stroke={i % 2 ? "#9e58a4" : "#50d3bc"} fill="none">
              <path d={`M${30 + i * 32} 144v-${45 + (i % 3) * 20}l14 -14v59`} />
              <circle cx={37 + i * 32} cy={84 - (i % 3) * 16} r="7" />
            </g>
          ))}
        </>
      ) : null}
    </g>
    <path d="M10 162H180" stroke="#a79b7b" />
    <path d="M8 32H182V157H8Z" stroke="#a69b7b" fill="none" />
  </svg>
);
export const Cutout = ({
  kind,
}: {
  kind: "person" | "train" | "rocket" | "computer" | "sound" | "flag";
}) => (
  <svg
    viewBox="0 0 150 170"
    width="100%"
    height="100%"
    style={{ overflow: "visible" }}
  >
    <g
      stroke="#ebdfbd"
      strokeWidth="5"
      strokeLinejoin="round"
      paintOrder="stroke"
    >
      {kind === "person" ? (
        <>
          <path d="M49 47Q37 5 74 5Q112 5 103 48" fill="#332d27" />
          <path d="M57 26H93V58H57Z" fill="#d8ae7d" />
          <path d="M55 21H95V36H55Z" fill="#40392f" />
          <path d="M42 61H108L113 122H39Z" fill="#d1a332" />
          <path d="M52 125V154H66V125M87 125V154H101V125" fill="#3b3430" />
          <path d="M48 153H68V164H44M85 153H105V164H82" fill="#a34129" />
        </>
      ) : null}
      {kind === "train" ? (
        <>
          <path d="M10 99H140V139H10Z" fill="#8c3222" />
          <path d="M25 67H88V112H25Z" fill="#2a302a" />
          <path d="M88 47H130V113H88Z" fill="#a08637" />
          <path d="M96 59H119V82H96Z" fill="#1a3e3b" />
          <path d="M36 53H49V81H36Z" fill="#2a302a" />
          {[30, 67, 107, 134].map((x) => (
            <circle key={x} cx={x} cy="141" r="13" fill="#262b28" />
          ))}
          <path d="M35 43Q18 28 34 23Q47 12 65 25Q78 13 87 28" fill="#d5c6a4" />
        </>
      ) : null}
      {kind === "rocket" ? (
        <>
          <path d="M60 122V44L77 11 95 44V122Z" fill="#eee2bf" />
          <path d="M60 44L77 11 95 44Z" fill="#b23b25" />
          <circle cx="77" cy="64" r="11" fill="#3f91aa" />
          <path d="M60 96L39 136H60M95 96L118 136H95" fill="#b43a29" />
          <path d="M65 124L77 160 89 124" fill="#d8a23d" />
        </>
      ) : null}
      {kind === "computer" ? (
        <>
          <path d="M21 51H130V126H21Z" fill="#c2bea1" />
          <path d="M31 61H118V113H31Z" fill="#173729" />
          <path
            d="M41 76H93M41 87H103M41 98H71"
            stroke="#80b960"
            strokeWidth="4"
          />
          <path d="M12 135H139V158H12Z" fill="#c8c0a0" />
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <path key={i} d={`M${25 + i * 15} 140v10`} stroke="#7b7c69" />
          ))}
        </>
      ) : null}
      {kind === "sound" ? (
        <>
          <path
            d="M23 93Q10 43 69 40Q122 34 128 83Q123 117 72 119L51 142 50 115Z"
            fill="#682b72"
          />
          <path
            d="M34 76v12m10 -25v38m12 -49v57m12 -37v22m12 -37v37m12 -51v57m12 -39v27"
            stroke="#e2d2c9"
            strokeWidth="3"
          />
        </>
      ) : null}
      {kind === "flag" ? (
        <>
          <path d="M64 160V15" stroke="#97885c" strokeWidth="5" />
          <path d="M65 16L118 32 65 49Z" fill="#b63b26" />
        </>
      ) : null}
    </g>
  </svg>
);
