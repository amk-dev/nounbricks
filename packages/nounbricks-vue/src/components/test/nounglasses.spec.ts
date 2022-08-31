import { describe, it, expect, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/vue";

import NounGlasses from "../NounGlasses.vue";

type NounGlassesProps = InstanceType<typeof NounGlasses>["$props"];

afterEach(cleanup);

describe("NounGlasses", () => {
  it("renders the NounGlasses with background", () => {
    const props: NounGlassesProps = {
      glasses: "square-black-rgb",
      bgColor: "d5d7e1",
    };

    const { container } = render(NounGlasses, {
      props,
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders the NounGlasses without background", () => {
    const props: NounGlassesProps = {
      glasses: "square-black-rgb",
    };

    const { container } = render(NounGlasses, {
      props,
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with NounGlasses with bounds fit", () => {
    const props: NounGlassesProps = {
      glasses: "square-black-rgb",
      fitToBounds: true,
    };

    const { container } = render(NounGlasses, {
      props,
    });

    expect(container.firstChild).toMatchSnapshot();
  });
});
