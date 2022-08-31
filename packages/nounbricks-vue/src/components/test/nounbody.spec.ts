import { describe, it, expect, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/vue";
import NounBody from "../NounBody.vue";

type NounBodyProps = InstanceType<typeof NounBody>["$props"];

afterEach(cleanup);

describe("NounBody", () => {
  it("renders the NounBody with background", () => {
    const props: NounBodyProps = {
      body: "bluegrey",
      bgColor: "d5d7e1",
    };

    const { container } = render(NounBody, {
      props,
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders the NounBody without background", () => {
    const props: NounBodyProps = {
      body: "bluegrey",
    };

    const { container } = render(NounBody, {
      props,
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders the NounBody with bounds fit", () => {
    const props: NounBodyProps = {
      body: "bluegrey",
      fitToBounds: true,
    };

    const { container } = render(NounBody, {
      props,
    });

    expect(container.firstChild).toMatchSnapshot();
  });
});
