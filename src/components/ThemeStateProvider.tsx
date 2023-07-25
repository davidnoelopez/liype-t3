import React, { createContext, useContext, useEffect, useState } from "react";

type ThemeState = {
  theme: "light" | "dark";
  setTheme(theme: "light" | "dark"): void;
};

const StateContext = createContext<ThemeState>({
  theme: "light",
  setTheme: () => {},
});

export const ThemeStateProvider = (props: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeState["theme"]>("light");

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const colorScheme = event.matches ? "dark" : "light";
        setTheme(colorScheme);
      });

    setTheme(
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    );
  }, []);

  return (
    <StateContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {props.children}
    </StateContext.Provider>
  );
};

export const useThemeState = () => useContext(StateContext);
