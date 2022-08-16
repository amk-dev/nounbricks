import { describe, it, expect, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/vue";

import FullNoun from "../FullNoun.vue";

type FullNounProps = InstanceType<typeof FullNoun>["$props"];

afterEach(cleanup);

describe("FullNoun", () => {
  it("renders the FullNoun with background", () => {
    const props: FullNounProps = {
      head: "coffeebean",
      body: "bluegrey",
      accessories: "belly-chameleon",
      glasses: "square-black-rgb",
      bgColor: "d5d7e1",
    };

    const { container } = render(FullNoun, {
      props,
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders the FullNoun without background", () => {
    const props: FullNounProps = {
      head: "coffeebean",
      body: "bluegrey",
      accessories: "belly-chameleon",
      glasses: "square-black-rgb",
    };

    const { container } = render(FullNoun, {
      props,
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with Fullnoun with bounds fit", () => {
    const props: FullNounProps = {
      head: "coffeebean",
      body: "bluegrey",
      accessories: "belly-chameleon",
      glasses: "square-black-rgb",
      fitToBounds: true,
    };

    const { container } = render(FullNoun, {
      props,
    });

    expect(container.firstChild).toMatchSnapshot();
  });
});
