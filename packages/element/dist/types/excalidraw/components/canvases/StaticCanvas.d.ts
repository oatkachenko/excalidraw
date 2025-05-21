import React from "react";
import type { NonDeletedExcalidrawElement, NonDeletedSceneElementsMap } from "@excalidraw/element/types";
import type { RenderableElementsMap, StaticCanvasRenderConfig } from "../../scene/types";
import type { StaticCanvasAppState } from "../../types";
import type { RoughCanvas } from "roughjs/bin/canvas";
type StaticCanvasProps = {
    canvas: HTMLCanvasElement;
    rc: RoughCanvas;
    elementsMap: RenderableElementsMap;
    allElementsMap: NonDeletedSceneElementsMap;
    visibleElements: readonly NonDeletedExcalidrawElement[];
    sceneNonce: number | undefined;
    selectionNonce: number | undefined;
    scale: number;
    appState: StaticCanvasAppState;
    renderConfig: StaticCanvasRenderConfig;
};
declare const _default: React.MemoExoticComponent<(props: StaticCanvasProps) => import("react/jsx-runtime").JSX.Element>;
export default _default;
