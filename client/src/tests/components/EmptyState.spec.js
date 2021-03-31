import React from "react";
import { shallow } from "enzyme";
import EmptyState from "../../components/EmptyState.jsx";

describe("EmpyState tests", () => {
    let wrapper;

    it("should render search message when searchedArtist is empty", () => {
        wrapper = shallow(<EmptyState searchedArtist={""} />);  

        expect(wrapper.text()).toEqual(`Search for an artist`);
    });

    it("should render no results message", () => {
        wrapper.setProps({ searchedArtist: "ffadadadadad" });  

        expect(wrapper.text()).toEqual(`No results for "ffadadadadad"`);
    });
});