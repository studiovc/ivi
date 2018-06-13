import { virtualRender as render } from "ivi-test";
import * as h from "ivi-html";
import * as s from "ivi-svg";

describe("src/snapshot.ts", () => {
  test("'abc'", () => {
    expect(render(h.t("abc")).toSnapshot()).toMatchSnapshot();
  });

  test("<div>", () => {
    expect(render(h.div()).toSnapshot()).toMatchSnapshot();
  });

  test("<span>", () => {
    expect(render(h.span()).toSnapshot()).toMatchSnapshot();
  });

  test("<div> ({} props)", () => {
    expect(render(h.div("", {})).toSnapshot()).toMatchSnapshot();
  });

  test("<div tabIndex='1'>", () => {
    expect(render(h.div("", { tabIndex: 1 })).toSnapshot()).toMatchSnapshot();
  });

  test("<div tabIndex='1' title='2'>", () => {
    expect(render(h.div("", { tabIndex: 1, title: "2" })).toSnapshot()).toMatchSnapshot();
  });

  test("<div data-abc='a'", () => {
    expect(render(h.div("", { "data-abc": "a" })).toSnapshot()).toMatchSnapshot();
  });

  test("<div aria-type='button'>", () => {
    expect(render(h.div("", { "aria-type": "button" })).toSnapshot()).toMatchSnapshot();
  });

  test("<div class=''>", () => {
    expect(render(h.div("")).toSnapshot()).toMatchSnapshot();
  });

  test("<div class='a'>", () => {
    expect(render(h.div("a")).toSnapshot()).toMatchSnapshot();
  });

  test("<div class='a b'>", () => {
    expect(render(h.div("a b")).toSnapshot()).toMatchSnapshot();
  });

  test("<div style={top: 10px}>", () => {
    expect(render(h.div("", void 0, { top: "10px" })).toSnapshot()).toMatchSnapshot();
  });

  test("<div style={float: 'left'}>", () => {
    expect(render(h.div("", void 0, { float: "left" })).toSnapshot()).toMatchSnapshot();
  });

  test("<div style={top: 10px; left: 20px}>", () => {
    expect(render(h.div("", void 0, { top: "10px", left: "20px" })).toSnapshot()).toMatchSnapshot();
  });

  test("<div></div> (null children)", () => {
    expect(render(h.div().c(null)).toSnapshot()).toMatchSnapshot();
  });

  test("<div>'abc'</div>", () => {
    expect(render(h.div().c("abc")).toSnapshot()).toMatchSnapshot();
  });

  test("<div>10</div>", () => {
    expect(render(h.div().c(10)).toSnapshot()).toMatchSnapshot();
  });

  test("<div><span></div>", () => {
    expect(render(h.div().c(h.span())).toSnapshot()).toMatchSnapshot();
  });

  test("<div>[<span>]</div>", () => {
    expect(render(h.div().c(h.span())).toSnapshot()).toMatchSnapshot();
  });

  test("<div>[<span>, <strong>]</div>", () => {
    expect(render(h.div().c(h.span(), h.strong())).toSnapshot()).toMatchSnapshot();
  });

  test("<div>[" +
    "  <div>'hello'</div>," +
    "  <div>[<span>'world'</span>, <div><span></div>]</div>," +
    "  <div><div></div>," +
    "  <div>" +
    "]</div>", () => {
      expect(render(h.div().c(
        h.div().c("hello"),
        h.div().c(h.span().c("world"), h.div().c(h.span())),
        h.div().c(h.div()),
        h.div(),
      )).toSnapshot()).toMatchSnapshot();
    });

  describe("svg", () => {
    test("<circle>", () => {
      expect(render(s.circle()).toSnapshot()).toMatchSnapshot();
    });

    test("<circle class='a'>", () => {
      expect(render(s.circle("a")).toSnapshot()).toMatchSnapshot();
    });

    test("<circle style={top: 10px}>", () => {
      expect(render(s.circle("", void 0, { top: "10px" })).toSnapshot()).toMatchSnapshot();
    });

    test("<circle xlink:href='a'>", () => {
      expect(render(s.circle("", { "xlink:href": "a" })).toSnapshot()).toMatchSnapshot();
    });

    test("<circle xml:text='a'>", () => {
      expect(render(s.circle("", { "xml:test": "a" })).toSnapshot()).toMatchSnapshot();
    });
  });

  describe("special elements", () => {
    test("<input>", () => {
      expect(render(h.input()).toSnapshot()).toMatchSnapshot();
    });

    test("<input value='abc'>", () => {
      expect(render(h.input("", { value: h.INPUT_VALUE("abc") })).toSnapshot()).toMatchSnapshot();
    });

    test("<input type='checkbox'>", () => {
      expect(render(h.input("", { type: "checkbox" })).toSnapshot()).toMatchSnapshot();
    });

    test("<input type='checkbox' checked='true'>", () => {
      expect(render(h.input("", { type: "checkbox", checked: h.INPUT_CHECKED(true) })).toSnapshot()).toMatchSnapshot();
    });

    test("<textarea>", () => {
      expect(render(h.textarea()).toSnapshot()).toMatchSnapshot();
    });

    test("<textarea>abc</textarea>", () => {
      expect(render(h.textarea("", { value: h.TEXTAREA_VALUE("abc") })).toSnapshot()).toMatchSnapshot();
    });

    test("<audio>", () => {
      expect(render(h.audio()).toSnapshot()).toMatchSnapshot();
    });

    test("<audio volume=0.5>", () => {
      expect(render(h.audio("", { volume: 0.5 })).toSnapshot()).toMatchSnapshot();
    });

    test("<video volume=0.5>", () => {
      expect(render(h.video("", { volume: 0.5 })).toSnapshot()).toMatchSnapshot();
    });
  });
});
