import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component } from "../../chunks/ssr.js";
import "qrcode";
import "html2canvas";
const QRCodeImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text = "Hello World" } = $$props;
  let { generator = "node-qrcode" } = $$props;
  let { tagType = "img" } = $$props;
  let { displayType = "img" } = $$props;
  let { displayWidth = null } = $$props;
  let { displayHeight = null } = $$props;
  let { displayStyle = null } = $$props;
  let { altText = "QR Code" } = $$props;
  let { displayID = null } = $$props;
  let { displayClass = null } = $$props;
  let { margin = 4 } = $$props;
  let { scale = 4 } = $$props;
  let { width = void 0 } = $$props;
  let { errorCorrectionLevel = "M" } = $$props;
  let { version = void 0 } = $$props;
  let _generatedImgURL = "";
  let _canvasElement;
  let _imgTagID = displayID;
  let _canvasTagID = displayID;
  function getImageURL() {
    return _generatedImgURL;
  }
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.generator === void 0 && $$bindings.generator && generator !== void 0)
    $$bindings.generator(generator);
  if ($$props.tagType === void 0 && $$bindings.tagType && tagType !== void 0)
    $$bindings.tagType(tagType);
  if ($$props.displayType === void 0 && $$bindings.displayType && displayType !== void 0)
    $$bindings.displayType(displayType);
  if ($$props.displayWidth === void 0 && $$bindings.displayWidth && displayWidth !== void 0)
    $$bindings.displayWidth(displayWidth);
  if ($$props.displayHeight === void 0 && $$bindings.displayHeight && displayHeight !== void 0)
    $$bindings.displayHeight(displayHeight);
  if ($$props.displayStyle === void 0 && $$bindings.displayStyle && displayStyle !== void 0)
    $$bindings.displayStyle(displayStyle);
  if ($$props.altText === void 0 && $$bindings.altText && altText !== void 0)
    $$bindings.altText(altText);
  if ($$props.displayID === void 0 && $$bindings.displayID && displayID !== void 0)
    $$bindings.displayID(displayID);
  if ($$props.displayClass === void 0 && $$bindings.displayClass && displayClass !== void 0)
    $$bindings.displayClass(displayClass);
  if ($$props.margin === void 0 && $$bindings.margin && margin !== void 0)
    $$bindings.margin(margin);
  if ($$props.scale === void 0 && $$bindings.scale && scale !== void 0)
    $$bindings.scale(scale);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.errorCorrectionLevel === void 0 && $$bindings.errorCorrectionLevel && errorCorrectionLevel !== void 0)
    $$bindings.errorCorrectionLevel(errorCorrectionLevel);
  if ($$props.version === void 0 && $$bindings.version && version !== void 0)
    $$bindings.version(version);
  if ($$props.getImageURL === void 0 && $$bindings.getImageURL && getImageURL !== void 0)
    $$bindings.getImageURL(getImageURL);
  return `${displayType === "img" ? `<img${add_attribute("src", _generatedImgURL, 0)}${add_attribute("alt", altText, 0)}${add_attribute("width", displayWidth, 0)}${add_attribute("height", displayHeight, 0)}${add_attribute("style", displayStyle, 0)}${add_attribute("id", _imgTagID, 0)}${add_attribute("class", displayClass, 0)}>` : `${displayType === "canvas" ? `<div><canvas${add_attribute("style", displayStyle, 0)}${add_attribute("width", displayWidth, 0)}${add_attribute("height", displayHeight, 0)}${add_attribute("id", _canvasTagID, 0)}${add_attribute("class", displayClass, 0)}${add_attribute("this", _canvasElement, 0)}></canvas>  <img src=""${add_attribute("alt", altText, 0)} style="position: absolute; top: 0; left: 0; opacity: 0;"></div>` : ``}`}`;
});
const css = {
  code: '.page.svelte-ro2e3m{background-image:url("/Zertifikat.png");background-repeat:no-repeat;background-size:contain;font-family:"Helvetica Neue", "Helvetica", Arial, sans-serif}.custom-center.svelte-ro2e3m{margin:0 auto}.pixelify-sans.svelte-ro2e3m{font-family:"Pixelify Sans", sans-serif;font-optical-sizing:auto;font-weight:400;font-style:normal}div.svelte-ro2e3m,input[type="text"].svelte-ro2e3m{background:transparent;border:none;resize:none}.standard-font.svelte-ro2e3m{font-family:"Helvetica Neue", "Helvetica", Arial, sans-serif}.meta.svelte-ro2e3m{margin:0 auto}',
  map: null
};
let predicat = "Zertifikat";
let meta = "Spezialwoche Medien & Informatik <br> 26. Februar bis zum 1. März 2024 <br> Schulhaus Stockhorn <br> Konolfingen";
const A4 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let scratchProject;
  let currentDate;
  let title = "Scratch-Spieleentwickler";
  let name = "Xkoo";
  const date = /* @__PURE__ */ new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  $$result.css.add(css);
  scratchProject = null;
  currentDate = day + "-" + month + "-" + year;
  return `<input type="file" id="file" accept=".csv"> <div class="page pixelify-sans svelte-ro2e3m" id="page"><div class="flex w-[80%] custom-center flex-col svelte-ro2e3m"><div class="text-7xl text-center -mt-10 pb-20 svelte-ro2e3m">${escape(predicat)}</div> <div class=" svelte-ro2e3m">${`<input type="text" placeholder="Scratch-Spieleentwickler" class="text-5xl shadow-md w-full text-center svelte-ro2e3m"${add_attribute("value", title, 0)}> <input type="text" placeholder="Name" class="text-4xl shadow-md w-full text-center svelte-ro2e3m"${add_attribute("value", name, 0)}> ${scratchProject ? `<div class="mt-10 flex justify-center svelte-ro2e3m">${validate_component(QRCodeImage, "QRCodeImage").$$render($$result, { text: scratchProject, width: "200" }, {}, {})}</div>` : `<input type="text" placeholder="Link zum Scratchprojekt" class="text-3xl shadow-md w-full text-center svelte-ro2e3m"${add_attribute("value", scratchProject, 0)}>`}`}</div> <div class="meta absolute bottom-[9rem] left-0 right-0 text-white w-[30%] svelte-ro2e3m">${`<div class="text-lg w-full text-center h-[100px] max-h-[100px] svelte-ro2e3m"><!-- HTML_TAG_START -->${meta}<!-- HTML_TAG_END --></div>`}</div> <div class="absolute text-xl bottom-[2.8rem] right-[5.1rem] standard-font text-white svelte-ro2e3m">${escape(currentDate)}</div></div></div> <button data-svelte-h="svelte-iwcid4">Print</button>`;
});
const Lib = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(A4, "A4").$$render($$result, {}, {}, {})}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Lib, "App").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
