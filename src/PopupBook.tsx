import React from "react";
import {
  AbsoluteFill,
  interpolate,
  Easing,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Audio } from "@remotion/media";
import { Coast, Cutout, FrameCard, colors, labels } from "./art";
import { captions } from "./timeline";
import "./style.css";
const ease = Easing.bezier(0.45, 0, 0.18, 1);
const step = (t: number, a: number, b: number) =>
  interpolate(t, [a, b], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: ease,
  });
const mix = (a: number, b: number, k: number) => a + (b - a) * k;
function Upright({
  x,
  y,
  w,
  h,
  amount = 1,
  angle = 0,
  children,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  amount?: number;
  angle?: number;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y - h,
        width: w,
        height: h,
        opacity: Math.min(1, amount * 8),
        transformOrigin: "50% 100%",
        transform: `rotateZ(${angle}deg) rotateX(${-90 * amount}deg)`,
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </div>
  );
}
function Omni({ t }: { t: number }) {
  const intro = 1 - step(t, 3.1, 3.9),
    later = step(t, 25.7, 27.3);
  const show = Math.max(intro, later);
  return (
    <div
      style={{
        position: "absolute",
        // Opacity on a preserve-3d parent would flatten the box during entry.
        visibility: show > 0 ? "visible" : "hidden",
        left: mix(450, 60, later),
        top: mix(480, 340, later),
        transform: `translateX(${-1600 * (1 - show)}px) scale(${mix(1.7, 0.7, later)})`,
        transformStyle: "preserve-3d",
      }}
    >
      <div className="omni-face">
        <div className="omni-title">OMNI</div>
        <div className="omni-small">AI VIDEO MODEL</div>
        <div className="slot" />
        <div className="average" style={{ opacity: later }}>
          平均水平
        </div>
      </div>
      <div className="omni-top">
        <div className="slot" />
      </div>
      <div className="omni-side">
        {colors.map((c, i) => (
          <i key={c} style={{ background: c, top: 35 + i * 31 }} />
        ))}
      </div>
      <div
        className="prompt paper"
        style={{
          transform: `translate3d(${mix(140, 10, step(t, 0.2, 1))}px,${mix(200, -200, step(t, 0.2, 1))}px,10px) rotateX(-55deg)`,
          opacity: 1 - step(t, 1, 1.4),
        }}
      >
        <small>视频提示词</small>
        <p>海边 · 大家 · 电影感</p>
      </div>
      <div
        className="output paper"
        style={{
          transform: `translateY(${mix(-30, 130, step(t, 1.8, 2.6))}px)`,
          opacity: Math.max(step(t, 1.6, 2), later),
        }}
      >
        <span style={{ color: "#b04431", fontSize: 44 }}>◎</span>
      </div>
    </div>
  );
}
export const PopupBook = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = f / fps;
  const enter = step(t, 3.2, 4.1),
    close = step(t, 6.65, 7.35),
    reopen = step(t, 8.7, 9.8);
  const collapse = step(t, 30, 31.1),
    finalOpen = step(t, 34.7, 35.8);
  const open = mix(1 - close, reopen, reopen) * (1 - collapse) + finalOpen;
  const initialFlat = 1 - step(t, 8.7, 9.8);
  const backdrop = step(t, 10.8, 11.7);
  const wide = step(t, 25.6, 27.5) * (1 - step(t, 32, 34.7));
  const bookScale = mix(1, 0.68, wide) * (1 + 0.1 * step(t, 18, 25));
  const caption = captions.find(([a, b]) => t >= a && t < b)?.[2];
  const pop = (start: number) => step(t, start, start + 0.6) * open;
  const tabs = step(t, 9.2, 10.4);
  return (
    <AbsoluteFill style={{ background: "#352008", overflow: "hidden" }}>
      <Audio src={staticFile("narration.m4a")} premountFor={fps} />
      <div className="table" />
      <div className="spotlight" />
      <div
        className="camera"
        style={{
          transform: `translate(-50%,-50%) scale(${1 + 0.03 * Math.sin(t * 0.13)})`,
        }}
      >
        <div
          className="world"
          style={{
            transform: `rotateX(${51 - 3 * step(t, 9, 20)}deg) rotateZ(${-3 + 2 * Math.sin(t * 0.11)}deg)`,
          }}
        >
          <Omni t={t} />
          <div
            className="book-world"
            style={{
              transform: `translate3d(${(1 - enter) * 1600 + mix(0, 290, wide)}px,0,0) scale(${bookScale})`,
            }}
          >
            <div className="book-ground-shadow" />
            <div className="book-base">
              <div className="page paper" />
              {colors.map((c, i) => (
                <div
                  key={c}
                  className="ribbon"
                  style={{ left: 130 + i * 136, background: c }}
                />
              ))}
            </div>
            <div
              className="back-cover"
              style={{
                transform: `rotateX(${90 * open + 90 * initialFlat * (1 - close)}deg)`,
              }}
            >
              <div className="cover-front">
                <div className="cover-border">
                  <span>视频生成提示词</span>
                  <small>A FIELD GUIDE TO CREATIVE CONSTRAINTS</small>
                </div>
              </div>
              <div className="cover-back paper">
                <div
                  style={{ position: "absolute", inset: 0, opacity: backdrop }}
                >
                  <Coast beam={t * 0.45} />
                </div>
              </div>
            </div>
            <div className="binding" />
            <Upright x={221} y={272} w={758} h={52} amount={pop(11.4)}>
              <div className="shore">
                <span>▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾</span>
              </div>
            </Upright>
            {[0, 1, 2, 3].map((i) => (
              <Upright
                key={i}
                x={255 + i * 169}
                y={427 + (i % 2) * 18}
                w={176}
                h={184}
                amount={pop(13.5 + i * 0.3)}
                angle={i % 2 === 0 ? -5 : 5}
              >
                <div className="film-card paper">
                  <FrameCard index={i} colored={t > 19 + i * 0.65} />
                </div>
              </Upright>
            ))}
            <Upright x={250} y={565} w={130} h={125} amount={pop(15.8)}>
              <Cutout kind="train" />
            </Upright>
            <Upright x={443} y={562} w={100} h={135} amount={pop(16.2)}>
              <Cutout kind="rocket" />
            </Upright>
            <Upright x={611} y={570} w={115} h={117} amount={pop(16.5)}>
              <Cutout kind="computer" />
            </Upright>
            <Upright x={794} y={548} w={90} h={150} amount={pop(16.8)}>
              <Cutout kind="flag" />
            </Upright>
            <Upright
              x={900 + mix(-145, 0, step(t, 13, 15))}
              y={538}
              w={95}
              h={165}
              amount={pop(12.1)}
            >
              <Cutout kind="person" />
            </Upright>
            <Upright x={143} y={540} w={132} h={148} amount={pop(22.1)}>
              <Cutout kind="sound" />
            </Upright>
            <Upright x={578} y={348} w={65} h={111} amount={pop(22.9)}>
              <Cutout kind="flag" />
            </Upright>
            {labels.map((label, i) => (
              <Upright
                key={label}
                x={170 + i * 185}
                y={715 + (i % 2) * 11}
                w={172}
                h={52}
                amount={0.68 * tabs}
                angle={[-11, 5, -2, 4, 10][i]}
              >
                <div
                  className="tag paper"
                  style={{ color: colors[i], opacity: tabs }}
                >
                  <span>{["◎", "⌛", "▤", "⌁", "♪"][i]} </span>
                  {label}
                  <b
                    style={{
                      opacity: step(t, 24.2 + i * 0.25, 24.5 + i * 0.25),
                    }}
                  >
                    ✓
                  </b>
                </div>
              </Upright>
            ))}
            <Upright x={75} y={635} w={115} h={72} amount={0.7} angle={-12}>
              <div
                className="tag paper"
                style={{ opacity: 1 - tabs, fontSize: 42 }}
              >
                我
              </div>
            </Upright>
            <Upright x={1045} y={635} w={145} h={72} amount={0.7} angle={10}>
              <div
                className="tag paper"
                style={{ opacity: 1 - tabs, fontSize: 28 }}
              >
                ✦Gemini
              </div>
            </Upright>
            {colors.map((c, i) => {
              const a =
                step(t, 4.2 + i * 0.28, 4.6 + i * 0.28) *
                (1 - step(t, 6.1, 6.7));
              return (
                <Upright
                  key={c}
                  x={i % 2 ? 1010 : 110}
                  y={450 - Math.floor(i / 2) * 83}
                  w={102}
                  h={95}
                  amount={a}
                >
                  <div
                    className="bubble"
                    style={{
                      background: c,
                      opacity: a,
                      transform: `translateY(${-12 * Math.sin(t * 3 + i)}px)`,
                    }}
                  >
                    {["◉", "✦", "▤", "♧", "♪"][i]}
                  </div>
                </Upright>
              );
            })}
          </div>
          <Upright x={450} y={570} w={125} h={125}>
            <div
              className="not-equal"
              style={{
                opacity: step(t, 29.1, 29.5) * (1 - step(t, 30.3, 30.7)),
              }}
            >
              ≠
            </div>
          </Upright>
          {Array.from({ length: 44 }, (_, i) => {
            const p = step(t, 30.25 + i * 0.047, 31.8 + i * 0.047);
            return (
              <div
                key={i}
                className="loose-paper paper"
                style={{
                  opacity: step(t, 30.25 + i * 0.047, 30.4 + i * 0.047),
                  left: mix(80, ((i * 293) % 1600) - 180, p),
                  top: mix(340, ((i * 167) % 800) + 30, p),
                  transform: `translateZ(${Math.sin(p * Math.PI) * (200 + (i % 5) * 40) + (i % 4) * 3}px) rotateZ(${mix(0, ((i * 53) % 170) - 85, p)}deg) rotateX(${Math.sin(p * Math.PI) * 140}deg)`,
                }}
              >
                {i % 3 === 0 ? "视频创作 / NOTES" : "镜头 · 场景 · 内容"}
                <hr />
                {[0, 1, 2, 3, 4].map((j) => (
                  <i key={j} style={{ width: `${70 + ((i + j) % 4) * 6}%` }} />
                ))}
              </div>
            );
          })}
        </div>
      </div>
      <div
        className="vignette"
        style={{ opacity: 0.66 + 0.2 * step(t, 35, 37) }}
      />
      {caption ? (
        <div className="caption" key={caption}>
          {caption}
        </div>
      ) : null}
    </AbsoluteFill>
  );
};
