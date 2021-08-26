import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import Home from "@/views/Home.vue";

describe("Home.vue", () => {
  it("render One Piece title on HomePage", () => {
    const title = "One Piece";
    const wrapper = shallowMount(Home);
    expect(wrapper.find("h3").text()).equal(title);
  });
});
