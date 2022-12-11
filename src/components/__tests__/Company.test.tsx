import { render } from "@testing-library/react";
import Company from "../Company";

describe("Company", () => {
  it("renders detail of company.", () => {
    const { getByText } = render(<Company />);

    expect(getByText("Company")).not.toBeNull();
  });
});
