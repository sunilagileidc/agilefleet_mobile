interface SvgElement {
  type: 'Path' | 'Ellipse' | 'G-1' | 'G-2';
  d?: string;
  className?: string;
  dataId?: string;
  strokeMiterlimit?: number;
  strokeWidth?: number;
  stroke?: string;
  fill?: string;
  seq?: number;
  cx?: number;
  cy?: number;
  rx?: number;
  ry?: number;
}
export const svgElements: SvgElement[] = [
  {
    type: 'Path',
    d: 'm128.2 305.6-27 .2-10.5 31.9v8.3s2.1 6.5 8.8 6.9c6.7.4 29.2.2 29.2.2s8.3-1.5 8.4-7.7c.2-6.2.2-7.8.2-7.8l-9.1-32z',
    className: 'color2 js_car-part',
    dataId: 'AI60',
    fill: '#000',
    stroke: '#FFF',
    strokeWidth: 1,
    seq: 1,
  },
  {
    type: 'Path',
    d: 'm46.9 352.9 32.7.3.3 5.3 18.7-.2 1.1-.9-.1-4.6s-7.5 0-8.7-7.9l-.1-5.8-.2-.5h.3l8.8-27.3s-3.4.1-5.9-.6c-2.5-.7-6.3-3.5-9.2-3.9-1.6-.2-3.7-.1-5.3 0l-.7-1.8H45.4l-1 1.3-7.9-1.1s-4.3-.1-5.6-2.1c0 0-5.1 2.8-12.3.8l-2 .8s-6.8 4.1-6.5 11.3 2.9 32.9 2.9 32.9 1.8 7.8 10.5 8 23.2 0 23.2 0l.2-4z',
    className: 'color2 js_car-part',
    dataId: 'AI5L',
    fill: '#000',
    stroke: '#FFF',
    seq: 2,
  },
  {
    type: 'Path',
    d: 'm181.1 352.9-32.7.3-.3 5.3-18.7-.2-1.1-.9.1-4.6s7.5 0 8.7-7.9l.1-5.8-8.5-29.3s3.3.3 5.8-.4 9.2-4.6 10.8-4.4l4-.1 33.1.1 1 1.3 7.9-1.1s4.3-.1 5.6-2.1c0 0 5.8 2.3 12.3.8l2 .8s6.8 4.1 6.5 11.3-2.9 32.9-2.9 32.9-1.8 7.8-10.5 8-23.2 0-23.2 0v-4z',
    className: 'color2 js_car-part',
    dataId: 'AI5R',
    fill: '#000',
    stroke: '#FFF',
    seq: 3,
  },
  {
    type: 'Path',
    d: 'm99 311.4 2.2-5.7-4.2-53.3-12.5-1-1.1.4-1.1-1.6-41.5-.3s-5.5 2-7.3 4.7c0 0-6.2-2.5-12.3 5.8-6.2 8.3-9.8 12-9.5 22.7.3 10.7 2.3 16.5 2.3 16.5l3.8 4.3s7.2 2 12.5-.5c0 0 2.7 1.8 4.8 2 2.2.2 8.8.7 8.8.7l.8-.8 33.7-.3.5 1.8s.7-.3 4.2-.5 5 2.5 8.2 3.7c3.2 1.1 7.7 1.4 7.7 1.4z',
    className: 'color1 js_car-part',
    dataId: 'AI4L',
    fill: '#000',
    stroke: '#FFF',
    seq: 4,
  },
  {
    type: 'Path',
    d: 'm129 309.7-1.2-4.2 3.4-53.4 13.2-.3 1.7-1.6 40.8-.3s5.5 2 7.3 4.7c0 0 6.2-2.5 12.3 5.8 6.2 8.3 9.8 12 9.5 22.7-.3 10.7-2.3 16.5-2.3 16.5l-3.8 4.3s-7.8 1.6-13.1-.9c0 0-2 2.3-4.2 2.4-2.2.2-8.8.7-8.8.7l-.8-.8-33.7-.3s-1 .4-4.5 .3c-3.5-.2-5.4 2.5-8.6 3.7-3.1 1-7.2.7-7.2.7z',
    className: 'color1 js_car-part',
    dataId: 'AI4R',
    fill: '#000',
    stroke: '#FFF',
    seq: 5,
  },
  {
    type: 'Path',
    d: 'm131.3 252.1-1.8-1.2-31-.1-1.5 1.6 4.2 53.4 27-.2z',
    className: 'color1 js_car-part',
    dataId: 'AI50',
    fill: '#000',
    stroke: '#FFF',
    seq: 6,
  },
  {
    type: 'Path',
    d: 'M200.4 373.4H28.7l-4.6 69.9s6.8 30.4 46.3 31.1 89.7 0 89.7 0S204 470 204 439.5c-.1-25.9-3.6-66.1-3.6-66.1z',
    className: 'color2 js_car-part',
    dataId: 'AI80',
    fill: '#000',
    stroke: '#FFF',
    seq: 7,
  },
  {
    type: 'Path',
    d: 'M144.2 183c6.3 5.5 11.9 3.8 11.9 3.8 1.3 1.5 5.3 1.6 5.3 1.6s32.9-.4 38.1 0c5.2.3 3.7-1.6 8.6-.9 4.9.7 7.7-2.4 8.6-3.4.2-.2.6-.4 1-.6 0 0 5.7-12.9 2.1-35.7-3.6-22.9-11.2-22.1-16.1-22.4-4.9-.3-47.8.3-47.8.3s-10-.4-13.5 21.8c-3.4 22.3 2.2 35.4 2.2 35.4s-.2.1-.4.1z',
    className: 'color1 js_car-part',
    dataId: 'AI1R',
    fill: '#000',
    stroke: '#FFF',
    seq: 8,
  },
  {
    type: 'Path',
    d: 'M199.9 233s18.2 1.3 20.3-9.7c2.5-12.9 3-29.7 3-29.7s.4-6.1-5.5-9.9l-2.1 1.3s-4.4 3.1-6.2 2.9c-1.8-.2-4.2-.6-4.2-.6s-3.8 1.2-12.7.9c-8.9-.3-32.2.3-32.2.3l-4.3-1.7s-3.8 1.6-7.7-1c-1.4-1-2.8-1.9-3.9-2.8-.4.1-6.5 2.2-5.9 15.2.6 13.5 3.6 27.9 4.5 29 .9 1 4.6 6 20.3 5.7l36.6.1z',
    className: 'color2 js_car-part',
    dataId: 'AI2R',
    fill: '#000',
    stroke: '#FFF',
    seq: 9,
  },
  {
    type: 'Path',
    d: 'M152.3 11.7S137-1.3 115.4.1 78.9 11.4 78.9 11.4l11 12.9h51.7l10.7-12.6z',
    className: 'color2 js_car-part',
    dataId: 'AI00',
    fill: '#000',
    stroke: '#FFF',
    seq: 10,
  },
  {
    type: 'Path',
    d: 'M155.6 92.5s-11.6 1.3-14.2 20.2c-2.5 19-8.4 119.3-8.4 119.3s.3 4.1-8 4.1h-17.5s-6.7 0-6.7-4.9c0-6.9-3.9-97.2-10-125.1 0 0-4.1-12-14.2-13.6h79z',
    className: 'color2 js_car-part',
    dataId: 'AI20',
    fill: '#000',
    stroke: '#FFF',
    seq: 11,
  },
  {
    type: 'Path',
    d: 'M76.9 11.7 88 25.1s-.9 55.4-10.5 64l-3.3 1.8-68.3-3-5.9-52s37.7-18.8 76.9-24.2z',
    className: 'color2 js_car-part',
    dataId: 'AI0L',
    fill: '#000',
    stroke: '#FFF',
    seq: 12,
  },
  {
    type: 'Path',
    d: 'm154.2 12-11 13.2s.9 55.5 10.6 64.1l3.4 1.8 68.7-3 5.9-52c0 .1-38.2-18.8-77.6-24.1z',
    className: 'color2 js_car-part',
    dataId: 'AI0R',
    fill: '#000',
    stroke: '#FFF',
    seq: 13,
  },
  {
    type: 'Path',
    d: 'M141.6 26.1H90.1s-1.1 61.8-12 64.7h76.2c-.1 0-11.5.3-12.7-64.7z',
    className: 'color2 js_car-part',
    dataId: 'AI10',
    fill: '#000',
    stroke: '#FFF',
    seq: 14,
  },
  {
    type: 'Path',
    d: 'M180.9 353.1v5s.7 6.3-5.9 6.3h-22.4s-4.4-.9-4.4-6v-5.6s32.7.4 32.7.3z',
    className: 'color1 js_car-part',
    dataId: 'AI6R',
    fill: '#000',
    stroke: '#FFF',
    seq: 15,
  },
  {
    type: 'Path',
    d: 'M80 353.1v5s.7 6.3-5.9 6.3H51.4s-4.5-.9-4.5-6v-5.6s33.1.4 33.1.3z',
    className: 'color1 js_car-part',
    strokeMiterlimit: 10,
    strokeWidth: 1,
    dataId: 'AI6L',
    fill: '#000',
    stroke: '#FFF',
    seq: 16,
  },
  {
    type: 'Path',
    d: 'M128.7 353.1v4.7s.6 5.9-5.2 5.9h-20s-4-.8-4-5.6v-5.2s29.2.3 29.2.2z',
    className: 'color1 js_car-part',
    dataId: 'AI70',
    fill: '#000',
    stroke: '#FFF',
    seq: 17,
  },
  {
    type: 'Path',
    d: 'm199.2 233.8 1.8-9.1s.1-7.5-8.4-7.5h-24.1s-7 .8-6.1 7.7c.8 6.1 1.7 8.4 1.7 8.4s.9 3.2 5.9 3.2h23.4c.4 0 5-.1 5.8-2.7z',
    className: 'color1 js_car-part',
    dataId: 'AI3R',
    fill: '#000',
    stroke: '#FFF',
    seq: 18,
  },
  {
    type: 'G-1',
    fill: 'none',
    className: 'inactive',
    seq: 19,
  },
  {
    type: 'Path',
    d: 'M203.7 429.5s-19.1 29.3-48 29.3H74.8s-38.2-3.1-49.6-28.2M217.4 183.4c-6.8 6.9-11.4 3.7-11.4 3.7-.8.7-3.5 1.2-3.5 1.2s-36.5.1-41.2.1-5.3-1.6-5.3-1.6c-5.7 2.5-11.6-3.9-11.6-3.9',
    strokeMiterlimit: 10,
    strokeLinejoin: 'round',
    strokeLinecap: 'round',
    strokeWidth: 1.5,
    stroke: '#FFF',
    // dataId: "AI3R",
    seq: 20,
  },
  {
    type: 'Path',
    d: 'M206 187.1s8.1-8.2 6.5-26.3-2.8-23.9-10-35.1M211.6 187.6s6.3 1.9 6 12c-.3 10-4.8 19.8-7.6 22.1-2.4 1.9-3.3 2.4-8.4 2.4 0 0 0-7.2-7.8-7.5-7.8-.3-25.1 0-25.1 0s-7-.3-7 7.6c0 0-6.4 3.1-12.7-7.3-6.3-10.5-5.2-21.2.9-30',
    strokeMiterlimit: 10,
    strokeLinejoin: 'round',
    strokeLinecap: 'round',
    strokeWidth: 1.5,
    stroke: '#FFF',
    // dataId: "AI3R",
    seq: 21,
  },
  {
    type: 'Path',
    d: 'M201.9 126s-7.3 38.3-4.9 62.5c0 0 .7 9.3 4 16 3.3 6.7 8.1 14.9 1.5 18.8',
    strokeMiterlimit: 10,
    strokeLinejoin: 'round',
    strokeLinecap: 'round',
    strokeWidth: 1.5,
    stroke: '#FFF',
    // dataId: "AI3R",
    seq: 22,
  },
  {
    type: 'Path',
    d: 'M157 187.1s-8.1-8.2-6.5-26.3 2.8-23.9 10-35.1',
    seq: 23,
  },
  {
    type: 'Path',
    d: 'M161.1 126s7.3 38.3 4.9 62.5c0 0-.7 9.3-4 16-3.3 6.7-8.1 14.9-1.5 18.8M198 153h-33.1M198 197.7h-33.1M201.6 224l-1.7 9M161.7 224.2l1.6 8.7',
    strokeMiterlimit: 10,
    strokeLinejoin: 'round',
    strokeLinecap: 'round',
    strokeWidth: 1.5,
    stroke: '#FFF',
    // dataId: "AI3R",
    seq: 24,
  },
  {
    type: 'G-1',
    fill: 'none',
    seq: 25,
  },
  {
    type: 'Path',
    d: 'M16.7 183c6.3 5.5 11.9 3.8 11.9 3.8 1.3 1.5 5.3 1.6 5.3 1.6s32.9-.4 38.1 0c5.2.3 3.7-1.6 8.6-.9 4.9.7 7.7-2.4 8.6-3.4.2-.2.6-.4 1-.6 0 0 5.7-12.9 2.1-35.7-3.6-22.9-11.2-22.1-16.1-22.4-4.9-.3-47.8.3-47.8.3s-10-.4-13.5 21.8c-3.4 22.3 2.2 35.4 2.2 35.4s-.2.1-.4.1z',
    fill: '#000',
    stroke: '#FFF',
    dataId: 'AI1L',
    className: 'color1 js_car-part',
    seq: 26,
  },
  {
    type: 'Path',
    d: 'M72.5 233s18.2 1.3 20.3-9.7c2.5-12.9 3-29.7 3-29.7s.4-6.1-5.5-9.9l-2.1 1.3s-4.4 3.1-6.2 2.9c-1.8-.2-4.2-.6-4.2-.6s-3.8 1.2-12.7.9c-8.9-.3-32.2.3-32.2.3l-4.3-1.7s-3.8 1.6-7.7-1c-1.4-1-2.8-1.9-3.9-2.8-.4.1-6.5 2.2-5.9 15.2.6 13.5 3.6 27.9 4.5 29 .9 1 4.6 6 20.3 5.7l36.6.1z',
    fill: '#000',
    stroke: '#FFF',
    dataId: 'AI2L',
    className: 'color2 js_car-part',
    seq: 27,
  },
  {
    type: 'Path',
    d: 'm71.7 233.8 1.8-9.1s.1-7.5-8.4-7.5H41s-7 .8-6.1 7.7c.8 6.1 1.7 8.4 1.7 8.4s.9 3.2 5.9 3.2h23.4c.3 0 5.1-.1 5.8-2.7z',
    fill: '#000',
    stroke: '#FFF',
    dataId: 'AI3L',
    className: 'color1 js_car-part',
    seq: 28,
  },
  {
    type: 'G-2',
    fill: 'none',
    className: 'inactive',
    strokeLinejoin: 'round',
    strokeLinecap: 'round',
    strokeWidth: 1.5,
    strokeMiterlimit: 10,
    seq: 29,
  },
  {
    type: 'Path',
    stroke: '#FFF',
    d: 'M90 183.4c-6.8 6.9-11.4 3.7-11.4 3.7-.8.7-3.5 1.2-3.5 1.2s-36.5.1-41.2.1-5.3-1.6-5.3-1.6c-5.7 2.5-11.6-3.9-11.6-3.9',
    // dataId: "AI3R",
    seq: 30,
  },
  {
    type: 'Path',
    stroke: '#FFF',
    d: 'M78.5 187.1s8.1-8.2 6.5-26.3-2.8-23.9-10-35.1M84.1 187.6s6.3 1.9 6 12c-.3 10-4.8 19.8-7.6 22.1-2.4 1.9-3.3 2.4-8.4 2.4 0 0 0-7.2-7.8-7.5-7.8-.3-25.1 0-25.1 0s-7-.3-7 7.6c0 0-6.4 3.1-12.7-7.3-6.3-10.5-5.2-21.2.9-30',
    // dataId: "AI3R",
    seq: 31,
  },
  {
    type: 'Path',
    stroke: '#FFF',
    d: 'M74.4 126s-7.3 38.3-4.9 62.5c0 0 .7 9.3 4 16 3.3 6.7 8.1 14.9 1.5 18.8M29.5 187.1s-8.1-8.2-6.5-26.3 2.8-23.9 10-35.1M33.6 126s7.3 38.3 4.9 62.5c0 0-.7 9.3-4 16-3.3 6.7-8.1 14.9-1.5 18.8M70.5 153h-33M70.5 197.7h-33M74.1 224l-1.6 9M34.2 224.2l1.6 8.7',
    // dataId: "AI3R",
    seq: 32,
  },
  {
    type: 'G-2',
    seq: 33,
  },
  {
    type: 'Path',
    d: 'M84.3 114.8c0-10-15.2-18.1-33.9-18.1s-33.9 8.1-33.9 18.1 15.2 18.1 33.9 18.1 33.9-8.1 33.9-18.1zm-60.1.7c0-7.3 11.8-13.1 26.3-13.1s26.3 5.9 26.3 13.1c0 7.3-11.8 13.1-26.3 13.1s-26.3-5.9-26.3-13.1z',
    dataId: 'AI30',
    fill: '#000',
    stroke: '#FFF',
    className: 'color2 js_car-part',
    seq: 34,
  },
  {
    type: 'Ellipse',
    cx: 50.4,
    cy: 114.8,
    className: 'color1 js_car-part',
    strokeWidth: 2,
    dataId: 'AI40',
    seq: 35,
    rx: 14.8,
    ry: 8.3,
  },
  {
    type: 'Path',
    d: 'M152.3 364.3h24.8c4.7 0 4.1-7.4 4.1-7.4s18 .4 24.8 0c6.8-.4 8.9-7.8 8.9-7.8s3-25.6 2.8-34c-.1-8.4-7.8-11.1-7.8-11.1 1.3-.7 3.5-3.7 4.3-5.2.7-1.5 3-15.2 2.4-21.3-.6-6.1-9.6-17.3-13.7-21-4.1-3.7-8.4-2.2-8.4-2.2-3-3.7-7.4-4.3-7.4-4.3l-40.8.1-1.8 1.8h-13.6l-1-1H98.2l-1 1H83.6l-1.8-1.8L41 250s-4.4.6-7.4 4.3c0 0-4.3-1.5-8.4 2.2-4.1 3.7-13.1 14.9-13.7 21-.6 6.1 1.6 19.8 2.4 21.3.7 1.5 3 4.4 4.3 5.2 0 0-7.7 2.7-7.8 11.1-.1 8.4 2.8 34 2.8 34s2.1 7.4 8.9 7.8c6.8.4 24.8 0 24.8 0s-.6 7.4 4.1 7.4h24.8s4-.3 4-5.9h19.5s1.6 5.2 6.2 5.2h17.1c4.6 0 6.2-5.2 6.2-5.2h19.5c0 5.6 4 5.9 4 5.9z',
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    strokeLinejoin: 'round',
    strokeLinecap: 'round',
    stroke: '#FFF',
    fill: 'none',
    // dataId: "AI30",
    seq: 36,
  },

  {
    type: 'Path',
    d: 'm83.9 252.5-5.5 52.7 11.1 31.3.9 1.9v7.4s-1.5 7.2-11.8 7.2H48.2s-9.7 1-12.8-5.9v-9.3l9.3-32.7-10.9-50.8M77.8 305.1H44.7M83.3 319.4H41.4',
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    strokeLinejoin: 'round',
    strokeLinecap: 'round',
    stroke: '#FFF',
    fill: 'none',
    // dataId: "AI30",
    seq: 37,
  },
  {
    type: 'Path',
    d: 'M33.2 254.7s-6.5 8-6.9 23.3c-.4 15.4 1.9 26.7 8.6 27.2l9.5.9',
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    strokeLinejoin: 'round',
    strokeLinecap: 'round',
    stroke: '#FFF',
    fill: 'none',
    // dataId: "AI30",
    seq: 38,
  },
  {
    type: 'Path',
    d: 'M31.3 303.6s-10.8 5.5-10.6 17c.1 11.5 5 30.6 17.4 30.6M143.7 252.5l5.5 52.7-11.1 31.3-.9 1.9v7.4s1.5 7.2 11.8 7.2h30.4s9.7 1 12.8-5.9v-9.3l-9.3-32.7 10.9-50.8M182.8 305.1h-33.1M144.3 319.4h41.9',
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    strokeLinejoin: 'round',
    strokeLinecap: 'round',
    stroke: '#FFF',
    fill: 'none',
    // dataId: "AI30",
    seq: 39,
  },
  {
    type: 'Path',
    d: 'M194.3 254.7s6.5 8 6.9 23.3c.4 15.4-1.9 26.7-8.6 27.2l-9.5.9',
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    strokeLinejoin: 'round',
    strokeLinecap: 'round',
    stroke: '#FFF',
    fill: 'none',
    // dataId: "AI30",
    seq: 40,
  },
  {
    type: 'Path',
    d: 'M196.3 303.6s10.8 5.5 10.6 17c-.1 11.5-5 30.6-17.4 30.6M97.2 252l4 53.5L90.8 338v7.8s1.8 7.2 9.2 7.2h28.5s8.7-1.5 8.7-7.2c0-5.8.3-6.6.3-6.6l-9.6-32.7 3.4-54.1M127.4 306h-25.6M131.3 319.1H97.5',
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    strokeLinejoin: 'round',
    strokeLinecap: 'round',
    stroke: '#FFF',
    fill: 'none',
    // dataId: "AI30",
    seq: 41,
  },
  {
    type: 'Path',
    d: 'M149.2 305.2s-3.4-1.5-9 1.8-10.5 2.8-10.5 2.8M79.5 306.7s3.4-1.5 9 1.8 10.5 2.8 10.5 2.8M79.6 353.2v4.6M99.4 353.2v4.6M128.3 353.2v4.6M46.8 353.2v4.8M148 353.2v4.6M181.2 353.2v4.8',
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    strokeLinejoin: 'round',
    strokeLinecap: 'round',
    stroke: '#FFF',
    fill: 'none',
    // dataId: "AI30",
    seq: 42,
  },

  // Additional elements can be added here following the same format.
];
