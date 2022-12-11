import { render } from "@testing-library/react";
import Intro from "../Intro";

describe("Intro Page", () => {
  it("renders Intro.", () => {
    const { getByText } = render(<Intro />);

    expect(getByText("Show Me The Dev Culture")).not.toBeNull();
    expect(getByText("회사의 문화를 보여주는 사이트")).not.toBeNull();
  });
});
