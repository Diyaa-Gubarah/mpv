import React, { CSSProperties } from "react";

type ThemeKay = "dark" | "light";

type ThemeType = Record<ThemeKay, CSSProperties>;

const DEFAULT_THEME: ThemeType = {
  dark: {
    background: "black",
    color: "gold",
  },
  light: {
    background: "white",
    color: "gold",
  },
};

const ThemeContext = React.createContext<unknown>(DEFAULT_THEME);

export const useTheme = () => {
  const themeContext = React.useContext(ThemeContext);

  if (!themeContext) {
    console.log("theme provider used outside context");
  }

  return themeContext;
};

const ThemeProvider: React.FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }): JSX.Element => {
  const [key, setKey] = React.useState<ThemeKay>("dark");

  const setTheme = React.useCallback(() => {
    setKey((pre: ThemeKay) => (pre === "dark" ? "light" : "dark"));
  }, [key]);

  const Default_Value = {
    theme: DEFAULT_THEME[key],
    setTheme,
  };

  return (
    <ThemeContext.Provider value={Default_Value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
