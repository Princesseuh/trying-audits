import type { DevOverlayPlugin } from "astro";

const colors = ["purple", "red", "gray", "green", "yellow"] as const;
const sizes = ["small", "large"] as const;

export default {
  id: "ui-showcase",
  name: "All the UI",
  icon: "astro:logo",
  init(canvas, eventTarget) {
    const astroWindow = document.createElement("astro-dev-overlay-window");

    const container = document.createElement("div");
    container.style.overflow = "auto";

    colors.forEach((color, index) => {
      const toggle = document.createElement("astro-dev-overlay-toggle");
      toggle.setAttribute("toggle-style", color);

      const highlight = document.createElement("astro-dev-overlay-highlight");
      highlight.setAttribute(
        "style",
        `width: 32px; height: 32px;left: ${
          256 + index * 32
        }px;margin-top: -16px;position: relative;`
      );
      highlight.highlightStyle = color;

      const badge = document.createElement("astro-dev-overlay-badge");
      badge.badgeStyle = color;
      badge.innerText = color;

      const button = document.createElement("astro-dev-overlay-button");
      button.innerText = color;
      button.buttonStyle = color;

      const card = document.createElement("astro-dev-overlay-card");
      card.cardStyle = color;
      card.link = "https://astro.build";

      container.appendChild(toggle);
      container.appendChild(highlight);
      container.appendChild(badge);
      container.appendChild(button);
      container.appendChild(card);
    });

    const button = document.createElement("button");
    button.innerText = "Shuffle colors";

    button.addEventListener("click", () => {
      const highlights = astroWindow.querySelectorAll(
        "astro-dev-overlay-highlight"
      );
      const badges = astroWindow.querySelectorAll("astro-dev-overlay-badge");
      const toggles = astroWindow.querySelectorAll("astro-dev-overlay-toggle");
      const buttons = astroWindow.querySelectorAll("astro-dev-overlay-button");

      highlights.forEach((highlight) => {
        const index = Math.floor(Math.random() * colors.length);
        highlight.setAttribute("highlight-style", colors[index]);
      });

      badges.forEach((badge) => {
        const index = Math.floor(Math.random() * colors.length);
        const sizeIndex = Math.floor(Math.random() * sizes.length);
        badge.setAttribute("badge-style", colors[index]);
        badge.setAttribute("size", sizes[sizeIndex]);
        badge.innerText = colors[index];
      });

      toggles.forEach((toggle) => {
        const index = Math.floor(Math.random() * colors.length);
        toggle.setAttribute("toggle-style", colors[index]);
      });

      buttons.forEach((button) => {
        const buttonColors = [...colors, "ghost", "outline"];
        const index = Math.floor(Math.random() * buttonColors.length);
        button.setAttribute("button-style", buttonColors[index]);

        const buttonSizes = [...sizes, "medium"];
        const sizeIndex = Math.floor(Math.random() * buttonSizes.length);
        button.setAttribute("size", buttonSizes[sizeIndex]);

        button.innerText = buttonColors[index];
      });

      const cards = astroWindow.querySelectorAll("astro-dev-overlay-card");
      cards.forEach((card) => {
        const index = Math.floor(Math.random() * colors.length);
        card.setAttribute("card-style", colors[index]);
      });
    });

    astroWindow.appendChild(container);
    astroWindow.appendChild(button);
    canvas.appendChild(astroWindow);
  },
} satisfies DevOverlayPlugin;
