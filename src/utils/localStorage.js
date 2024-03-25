export const setTheme = (theme) => {
  localStorage.setItem("theme", theme);
};
export const getTheme = () => {
  return localStorage.getItem("theme") || "light";
};
