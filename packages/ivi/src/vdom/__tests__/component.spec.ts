import { component } from "ivi";
import * as h from "ivi-html";
import { startRender } from "./utils";

test(`props should be passed to shouldUpdate hook`, () => {
  startRender(r => {
    const c = component<number>(
      () => () => h.div(),
      (prev, next) => {
        expect(prev).toBe(1337);
        expect(next).toBe(1338);
        return true;
      },
    );

    r(c(1337));
    r(c(1338));
  });
});
