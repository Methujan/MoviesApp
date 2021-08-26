import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import Home from "@/views/Home.vue";

describe("Home.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      props: { msg },
    });
    expect(wrapper.text()).to.include(msg);
  });

  it("render One Piece on HomePage", () => {
    const title = "One Piece";
    const wrapper = shallowMount(Home, {
      props: { title },
    });
    expect(wrapper.text()).to.include(title);
  });
});
