import Footer from "./Footer";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

const Component = (props: any) => render(<Footer />);

describe("Componente footer", () => {
  it("Renderizar texto correctamente", () => {
    expect(Component).toBeTruthy();
  });

  test("Renderizar texto de footer correctamente", () => {
    Component("hola");

    const text = screen.getByText(
      "Todos los derechos reservados Julian Garcia"
    );

    expect(text).toBeInTheDocument();
  });
});
export {};
