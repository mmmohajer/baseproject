import React from "react";
import { render as renderRTL, screen, fireEvent } from "@testing-library/react";
import AddressInMap from "../AddressInMap";
import * as reactRedux from "react-redux";
import { BrowserRouter } from "react-router-dom";

const render = (component) =>
  renderRTL(<BrowserRouter>{component}</BrowserRouter>);

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe("Test AddressInMap Component", () => {
  const useSelectorMock = reactRedux.useSelector;
  const useDispatchMock = reactRedux.useDispatch;

  beforeEach(() => {
    useDispatchMock.mockImplementation(() => () => {});
    useSelectorMock.mockImplementation((selector) => selector(mockStore));
  });

  afterEach(() => {
    useDispatchMock.mockClear();
    useSelectorMock.mockClear();
  });

  test("", () => {
    render(<AddressInMap />);

    expect(screen.getByText(/AddressInMap/i)).toBeInTheDocument();
  });
});
