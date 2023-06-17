import React from "react";
// import { describe, expect } from "@jest/globals";
import { render, RenderResult } from "@testing-library/react";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";

import { DefaultData } from "~/types";

import Hero from ".";

const defaultData = {
  languages: [
    { key: "es", name: "Español", locale: "es-MX" },
    { key: "en", name: "English", locale: "en-US" },
  ],
  brandName: [
    { locale: "en-US", text: "My Brand" },
    { locale: "es-MX", text: "Mi Marca" },
  ],
  titles: [
    { locale: "en-US", text: "Title 1" },
    { locale: "es-MX", text: "Título 1" },
  ],
  serviceDescription: [
    { locale: "en-US", text: "My Service Description" },
    { locale: "es-MX", text: "Mi Descripción de Servicio" },
  ],
};

describe("Hero component", () => {
  it("renders without crashing", () => {
    render(<Hero defaultData={defaultData as DefaultData} />);
  });

  it("renders a navigation bar with links and a language selector", () => {
    const { getByTestId } = render(
      <Hero defaultData={defaultData as DefaultData} />
    );
    expect(getByTestId("navbar")).toBeInTheDocument();
    expect(getByTestId("language-selector")).toBeInTheDocument();
  });

  it("renders a hero section with a background image and a title, subtitle, and description", () => {
    const { getByTestId } = render(
      <Hero defaultData={defaultData as DefaultData} />
    );
    expect(getByTestId("hero-section")).toBeInTheDocument();
    expect(getByTestId("hero-title")).toBeInTheDocument();
    expect(getByTestId("hero-subtitle")).toBeInTheDocument();
    expect(getByTestId("hero-description")).toBeInTheDocument();
  });

  it("renders two SVG images as background decorations", () => {
    const { getByTestId } = render(
      <Hero defaultData={defaultData as DefaultData} />
    );
    expect(getByTestId("decoration-1")).toBeInTheDocument();
    expect(getByTestId("decoration-2")).toBeInTheDocument();
  });

  it("receives the defaultData prop and uses it to render the correct information", () => {
    const { getByText } = render(
      <Hero defaultData={defaultData as DefaultData} />
    );
    expect(getByText("My Brand")).toBeInTheDocument();
    expect(getByText("Title 1")).toBeInTheDocument();
    expect(getByText("Title 2")).toBeInTheDocument();
    expect(getByText("My Service Description")).toBeInTheDocument();
    expect(getByText("en")).toBeInTheDocument();
    expect(getByText("es")).toBeInTheDocument();
  });

  it("correctly manages the state of the mobile menu", () => {
    const { getByTestId }: RenderResult = render(
      <Hero defaultData={defaultData as DefaultData} />
    );
    const menuButton = getByTestId("menu-button");
    const mobileMenu = getByTestId("mobile-menu");
    expect(mobileMenu).not.toBeVisible();
    menuButton.click();
    expect(mobileMenu).toBeVisible();
    menuButton.click();
    expect(mobileMenu).not.toBeVisible();
  });

  it("correctly resets the mobile menu when the locale changes", () => {
    const { getByTestId, rerender }: RenderResult = render(
      <Hero defaultData={defaultData as DefaultData} />
    );
    const menuButton = getByTestId("menu-button");
    const mobileMenu = getByTestId("mobile-menu");
    menuButton.click();
    expect(mobileMenu).toBeVisible();

    rerender(<Hero defaultData={defaultData} />);
    expect(mobileMenu).not.toBeVisible();
  });
});
