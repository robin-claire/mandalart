import { render } from "@testing-library/react";
import Filter from "../Filter";

describe("Filter", () => {
  it("renders filter.", () => {
    const { getByText } = render(<Filter />);

    expect(getByText("Filter")).not.toBeNull();
  });
});
