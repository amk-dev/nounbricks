import { describe, it, expect, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/vue";

import { FullNoun } from "./../../index";

type FullNounProps = InstanceType<typeof FullNoun>["$props"];

afterEach(cleanup);

describe.only("FullNoun", () => {
  it("renders the FullNoun with background", () => {
    const props: FullNounProps = {
      head: "head-coffeebean",
      body: "body-bluegrey",
      accessory: "accessory-belly-chameleon",
      glasses: "glasses-square-black-rgb",
      bgColor: "d5d7e1",
    };

    const { container } = render(FullNoun, {
      props,
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders the FullNoun without background", () => {
    const props: FullNounProps = {
      head: "head-coffeebean",
      body: "body-bluegrey",
      accessory: "accessory-belly-chameleon",
      glasses: "glasses-square-black-rgb",
    };

    const { container } = render(FullNoun, {
      props,
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with Fullnoun with bounds fit", () => {
    const props: FullNounProps = {
      head: "head-coffeebean",
      body: "body-bluegrey",
      accessory: "accessory-belly-chameleon",
      glasses: "glasses-square-black-rgb",
      fitToBounds: true,
    };

    const { container } = render(FullNoun, {
      props,
    });

    expect(container.firstChild).toMatchSnapshot();
  });
});
