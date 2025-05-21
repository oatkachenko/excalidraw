import {
  Commands,
  subsetToBinary
} from "./chunk-FB2NA5UG.js";
import "./chunk-4ZCNZOMT.js";
import "./chunk-XDFCUUT6.js";

// subset/subset-worker.chunk.ts
var WorkerUrl = import.meta.url ? new URL(import.meta.url) : void 0;
if (typeof window === "undefined" && typeof self !== "undefined") {
  self.onmessage = async (e) => {
    switch (e.data.command) {
      case Commands.Subset:
        const buffer = await subsetToBinary(
          e.data.arrayBuffer,
          e.data.codePoints
        );
        self.postMessage(buffer, { transfer: [buffer] });
        break;
    }
  };
}
export {
  WorkerUrl
};
//# sourceMappingURL=subset-worker.chunk.js.map
