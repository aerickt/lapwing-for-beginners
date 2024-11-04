function getThemeColors() {
  const rootStyle = getComputedStyle(document.documentElement);

  // Fetch specific color variables used by mdBook
  const backgroundColor = rootStyle.getPropertyValue("--fg").trim();
  const textColor = rootStyle.getPropertyValue("--bg").trim();

  return { backgroundColor, textColor };
}

class SVGHelper {
  constructor(svg) {
    // Just create a document fragment to parse the SVG
    const parser = new DOMParser();
    const doc = parser.parseFromString(svg, "image/svg+xml");
    this.shadowRoot = doc;
    this.shadowRoot.querySelectorAll(".pressed > path").forEach((element) => {
      element.style.stroke = getThemeColors().backgroundColor;
    });
    this.shadowRoot
      .querySelectorAll(".notpressed > path ")
      .forEach((element) => {
        element.style.stroke = getThemeColors().backgroundColor;
        element.style.fill = getThemeColors().backgroundColor;
      });
    this.shadowRoot.querySelectorAll(".notpressed > g ").forEach((element) => {
      element.style.stroke = getThemeColors().textColor;
      element.style.fill = getThemeColors().textColor;
    });
  }
  get string() {
    const serializer = new XMLSerializer();
    return serializer.serializeToString(this.shadowRoot);
  }
}

class StenoViz extends HTMLElement {
  static outline_regex =
    /^(?<num>#)?(?:(?<ls>S)?(?<lt>T)?(?<lk>K)?(?<lp>P)?(?<lw>W)?(?<lh>H)?(?<lr>R)?)?(?:(?<la>A)?(?<lo>O)?)?(?<star>\*)?(?:(?<re>E)?(?<ru>U)?(?:-)?)?(?:(?<rf>F)?(?<rr>R)?(?<rp>P)?(?<rb>B)?(?<rl>L)?(?<rg>G)?(?<rt>T)?(?<rs>S)?(?<rd>D)?(?<rz>Z)?)?$/;
  static steno_outline_svg_cache = null;

  static observedAttributes = [
    "stroke",
    "steno_outline",
    "opacity",
    "noAnimate",
    "delay",
    "width",
    "alt",
  ];

  get stroke() {
    return this.getAttribute("stroke") || "";
  }
  get strokes() {
    return this.stroke.split("/");
  }

  get opacity() {
    return this.getAttribute("opacity") || "0.0";
  }

  get animate() {
    return !this.hasAttribute("noAnimate");
  }

  get delay() {
    return Number(this.getAttribute("delay")) || 1000;
  }

  animation_frame() {
    this._animationframe = (this._animationframe + 1) % this.strokes.length;
    return this._animationframe;
  }

  async steno_outline() {
    if (this.getAttribute("steno_outline")) {
      const response = await fetch(this.getAttribute("steno_outline"));
      const text = await response.text();
      return text;
    }
    if (!StenoViz.steno_outline_svg_cache) {
      const response = await fetch("img/steno-outline.svg");
      StenoViz.steno_outline_svg_cache = await response.text();
    }
    return StenoViz.steno_outline_svg_cache;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.observer = new MutationObserver(() => {
      this.connectedCallback();
    });
    this._timestamp = 0;
    this._animation_frame = 0;
    this.render_loop = this.render_loop.bind(this);
  }

  async connectedCallback() {
    // Start observing the HTML element for class changes
    this.observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    if (this.animate && this.strokes.length > 0) {
      requestAnimationFrame(this.render_loop);
    } else {
      html = "";
      for (const i of this.strokes) {
        html = html + (await this.render(i));
      }
      this.shadowRoot.innerHTML = html;
    }
  }

  disconnectedCallback() {
    // Clean up the observer when the element is removed
    this.observer.disconnect();
  }

  async attributeChangedCallback(name, oldValue, newValue) {
    await this.connectedCallback();
  }

  async render(stroke) {
    // Load base SVG
    const svg = new SVGHelper(await this.steno_outline());
    if (this.hasAttribute("width")) {
      console.log(svg.shadowRoot.documentElement);
      svg.shadowRoot.documentElement.setAttribute(
        "width",
        this.getAttribute("width")
      );
      svg.shadowRoot.documentElement.removeAttribute("height");
    }
    // Create helper with pressed SVG

    // Get the matched keys
    const match = stroke.match(StenoViz.outline_regex);

    // Replace elements for matched keys
    if (match && match.groups) {
      // Iterate through the named groups
      Object.entries(match.groups).forEach(([key, value]) => {
        if (!value) {
          // If this key is pressed
          const target = svg.shadowRoot.querySelector(`#${key}`);
          target.setAttribute("opacity", this.opacity);
        }
      });
    }
    return svg.string;
  }
  async render_loop(timestamp) {
    const elapsed = timestamp - this._timestamp;
    if (elapsed >= this.delay) {
      let frame = this._animation_frame;
      this.shadowRoot.innerHTML = await this.render(this.strokes[frame]);
      this._timestamp = timestamp;
      this._animation_frame = (this._animation_frame + 1) % this.strokes.length;
    }
    requestAnimationFrame(this.render_loop);
  }
}

customElements.define("steno-outline", StenoViz);
