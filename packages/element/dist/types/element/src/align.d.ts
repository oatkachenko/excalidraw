import type Scene from "@excalidraw/excalidraw/scene/Scene";
import type { ElementsMap, ExcalidrawElement } from "./types";
export interface Alignment {
    position: "start" | "center" | "end";
    axis: "x" | "y";
}
export declare const alignElements: (selectedElements: ExcalidrawElement[], elementsMap: ElementsMap, alignment: Alignment, scene: Scene) => ExcalidrawElement[];
