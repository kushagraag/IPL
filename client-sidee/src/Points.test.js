import React from "react";
import { render } from "@testing-library/react";
import PointsTable from "./PointsTable.js"; // Update the file extension
import Schedule from "./Schedule.js";
import Statistic from "./Statistic.js";
import LiveScore from "./LiveScore.js";

describe("PointsTable", () => {
  it("renders the table headers", () => {
    render(<PointsTable />);
  })
});
describe("Schedule", () => {
  it("renders the table headers", () => {
    render(<Schedule />);
  })
});
describe("Statistic", () => {
  it("renders the table headers", () => {
    render(<Statistic />);
  })
});
describe("PointsTable", () => {
  it("renders the table headers", () => {
    render(<LiveScore/>);
  })
});