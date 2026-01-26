export const themeScript = `
(function () {
  try {
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (!theme) {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (prefersDark) {
        document.documentElement.classList.add("dark");
      }
    }
  } catch (_) {}
})();
`;
