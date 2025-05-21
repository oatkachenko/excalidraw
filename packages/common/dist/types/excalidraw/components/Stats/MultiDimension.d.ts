import type { ExcalidrawElement, NonDeletedSceneElementsMap } from "@excalidraw/element/types";
import type { AtomicUnit } from "./utils";
import type Scene from "../../scene/Scene";
import type { AppState } from "../../types";
interface MultiDimensionProps {
    property: "width" | "height";
    elements: readonly ExcalidrawElement[];
    elementsMap: NonDeletedSceneElementsMap;
    atomicUnits: AtomicUnit[];
    scene: Scene;
    appState: AppState;
}
declare const MultiDimension: ({ property, elements, elementsMap, atomicUnits, scene, appState, }: MultiDimensionProps) => import("react/jsx-runtime").JSX.Element;
export default MultiDimension;
