import { render } from "@testing-library/react";
import CompanyDetail from "../CompanyDetail";

describe("Company Detail Page", () => {
  it("renders detail of company.", () => {
    const { getByText } = render(<CompanyDetail />);

    expect(getByText("Company Detail")).not.toBeNull();
  });
});
