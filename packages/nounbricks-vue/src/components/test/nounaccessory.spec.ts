import { describe, it, expect, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/vue";

import { NounAccessory } from "./../../index";

type NounAccessoryProps = InstanceType<typeof NounAccessory>["$props"];

afterEach(cleanup);

describe("NounAccessory", () => {
  it("renders the NounAccessory with background", () => {
    const props: NounAccessoryProps = {
      accessory: "accessory-belly-chameleon",
      bgColor: "d5d7e1",
    };

    const { container } = render(NounAccessory, {
      props,
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders the NounAccessory without background", () => {
    const props: NounAccessoryProps = {
      accessory: "accessory-belly-chameleon",
    };

    const { container } = render(NounAccessory, {
      props,
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with NounAccessory with bounds fit", () => {
    const props: NounAccessoryProps = {
      accessory: "accessory-belly-chameleon",
      fitToBounds: true,
    };

    const { container } = render(NounAccessory, {
      props,
    });

    expect(container.firstChild).toMatchSnapshot();
  });
});
