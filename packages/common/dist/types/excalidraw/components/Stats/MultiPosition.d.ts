import type { ElementsMap, ExcalidrawElement } from "@excalidraw/element/types";
import type { AtomicUnit } from "./utils";
import type Scene from "../../scene/Scene";
import type { AppState } from "../../types";
interface MultiPositionProps {
    property: "x" | "y";
    elements: readonly ExcalidrawElement[];
    elementsMap: ElementsMap;
    atomicUnits: AtomicUnit[];
    scene: Scene;
    appState: AppState;
}
declare const MultiPosition: ({ property, elements, elementsMap, atomicUnits, scene, appState, }: MultiPositionProps) => import("react/jsx-runtime").JSX.Element;
export default MultiPosition;
