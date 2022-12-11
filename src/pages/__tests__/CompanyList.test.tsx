import { render } from "@testing-library/react";
import CompanyList from "../CompanyList";

describe("Company List Page", () => {
  it("renders list of companies.", () => {
    const { getByText } = render(<CompanyList />);

    expect(getByText("Company List")).not.toBeNull();
  });
});
