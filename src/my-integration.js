/** @type {() => import('astro').AstroIntegration} */
export default function myIntegration() {
  return {
    name: "my-integration",

    hooks: {
      "astro:config:setup": ({ addDevToolbarApp }) => {
        addDevToolbarApp("/src/my-plugin.ts");
      },
    },
  };
}
