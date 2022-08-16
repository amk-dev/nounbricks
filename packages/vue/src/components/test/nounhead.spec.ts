import { describe, it, expect, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/vue";

import NounHead from "../NounHead.vue";

type NounHeadProps = InstanceType<typeof NounHead>["$props"];

afterEach(cleanup);

describe("NounHead", () => {
  it("renders the NounHead with background", () => {
    const props: NounHeadProps = {
      head: "coffeebean",
      bgColor: "d5d7e1",
    };

    const { container } = render(NounHead, {
      props,
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders the NounHead without background", () => {
    const props: NounHeadProps = {
      head: "coffeebean",
    };

    const { container } = render(NounHead, {
      props,
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with NounHead with bounds fit", () => {
    const props: NounHeadProps = {
      head: "coffeebean",
      fitToBounds: true,
    };

    const { container } = render(NounHead, {
      props,
    });

    expect(container.firstChild).toMatchSnapshot();
  });
});
