import React from "react";
import 'react-native';
import { HomeScreen } from "../../src/screens/HomeScreen";
import { render, RenderAPI } from '@testing-library/react-native'; 

let component:RenderAPI;

describe("Testing over <HomeScreen />", () => {
  //Execute this to each test case: Clean Component
  beforeEach(() => {
    //global.fetch = jest.fn(() => Promise.resolve());
    component = render(<HomeScreen />);
  });

  it("Render component correctly", () => {
    //console.log(component);

    //Matchers
    expect(component).toBeDefined();
    expect(component.getByTestId("loading")).toBeDefined();
    //expect(component.queryAllByTestId("dataContainer").length).toEqual(0);
  });

});
