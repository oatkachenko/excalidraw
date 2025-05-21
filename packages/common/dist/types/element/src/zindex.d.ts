import type { AppState } from "@excalidraw/excalidraw/types";
import type Scene from "@excalidraw/excalidraw/scene/Scene";
import type { ExcalidrawElement } from "./types";
export declare const moveOneLeft: (allElements: readonly ExcalidrawElement[], appState: AppState, scene: Scene) => readonly ExcalidrawElement[];
export declare const moveOneRight: (allElements: readonly ExcalidrawElement[], appState: AppState, scene: Scene) => readonly ExcalidrawElement[];
export declare const moveAllLeft: (allElements: readonly ExcalidrawElement[], appState: AppState) => readonly ExcalidrawElement[] | ExcalidrawElement[];
export declare const moveAllRight: (allElements: readonly ExcalidrawElement[], appState: AppState) => readonly ExcalidrawElement[] | ExcalidrawElement[];
