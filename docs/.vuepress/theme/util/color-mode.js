const knownColorSchemes = ["dark", "light"];

class ColorMode {
  darkEnabled = false;
  el = null;

  constructor() {
    this.el = document.querySelector("body");
    if (localStorage.getItem("color-mode")) {
      this.set(localStorage.getItem("color-mode"));
    } else {
      this.set(this.getColorScheme());
    }
  }

  isDark() {
    return this.darkEnabled;
  }

  set(mode) {
    switch (mode) {
      case "dark":
        this.darkEnabled = true;
        this.el.classList.add("dark-mode");
        localStorage.setItem("color-mode", "dark");
        break;
      case "light":
        this.darkEnabled = false;
        this.el.classList.remove("dark-mode");
        localStorage.setItem("color-mode", "light");
    }
  }

  toggle() {
    this.set(this.darkEnabled ? "light" : "dark");
  }

  prefersColorScheme(suffix) {
    return window.matchMedia("(prefers-color-scheme" + suffix + ")");
  }

  getColorScheme() {
    if (window.matchMedia && this.prefersColorScheme("").media !== "not all") {
      for (const colorScheme of knownColorSchemes) {
        if (this.prefersColorScheme(":" + colorScheme).matches) {
          return colorScheme;
        }
      }
    }

    return "light";
  }
}

export default ColorMode;
