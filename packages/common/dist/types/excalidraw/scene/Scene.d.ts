import type { LinearElementEditor } from "@excalidraw/element/linearElementEditor";
import type { ExcalidrawElement, NonDeletedExcalidrawElement, NonDeleted, ExcalidrawFrameLikeElement, ElementsMapOrArray, OrderedExcalidrawElement, Ordered } from "@excalidraw/element/types";
import type { AppState } from "../types";
type ElementIdKey = InstanceType<typeof LinearElementEditor>["elementId"];
type ElementKey = ExcalidrawElement | ElementIdKey;
type SceneStateCallback = () => void;
type SceneStateCallbackRemover = () => void;
export type ExcalidrawElementsIncludingDeleted = readonly ExcalidrawElement[];
declare class Scene {
    private static sceneMapByElement;
    private static sceneMapById;
    static mapElementToScene(elementKey: ElementKey, scene: Scene): void;
    /**
     * @deprecated pass down `app.scene` and use it directly
     */
    static getScene(elementKey: ElementKey): Scene | null;
    private callbacks;
    private nonDeletedElements;
    private nonDeletedElementsMap;
    private elements;
    private nonDeletedFramesLikes;
    private frames;
    private elementsMap;
    private selectedElementsCache;
    /**
     * Random integer regenerated each scene update.
     *
     * Does not relate to elements versions, it's only a renderer
     * cache-invalidation nonce at the moment.
     */
    private sceneNonce;
    getSceneNonce(): number | undefined;
    getNonDeletedElementsMap(): Map<string, Ordered<NonDeletedExcalidrawElement>> & import("@excalidraw/common/utility-types").MakeBrand<"NonDeletedSceneElementsMap">;
    getElementsIncludingDeleted(): readonly OrderedExcalidrawElement[];
    getElementsMapIncludingDeleted(): Map<string, Ordered<ExcalidrawElement>> & import("@excalidraw/common/utility-types").MakeBrand<"SceneElementsMap">;
    getNonDeletedElements(): readonly Ordered<NonDeletedExcalidrawElement>[];
    getFramesIncludingDeleted(): readonly ExcalidrawFrameLikeElement[];
    getSelectedElements(opts: {
        selectedElementIds: AppState["selectedElementIds"];
        /**
         * for specific cases where you need to use elements not from current
         * scene state. This in effect will likely result in cache-miss, and
         * the cache won't be updated in this case.
         */
        elements?: ElementsMapOrArray;
        includeBoundTextElement?: boolean;
        includeElementsInFrames?: boolean;
    }): NonDeleted<ExcalidrawElement>[];
    getNonDeletedFramesLikes(): readonly NonDeleted<ExcalidrawFrameLikeElement>[];
    getElement<T extends ExcalidrawElement>(id: T["id"]): T | null;
    getNonDeletedElement(id: ExcalidrawElement["id"]): NonDeleted<ExcalidrawElement> | null;
    /**
     * A utility method to help with updating all scene elements, with the added
     * performance optimization of not renewing the array if no change is made.
     *
     * Maps all current excalidraw elements, invoking the callback for each
     * element. The callback should either return a new mapped element, or the
     * original element if no changes are made. If no changes are made to any
     * element, this results in a no-op. Otherwise, the newly mapped elements
     * are set as the next scene's elements.
     *
     * @returns whether a change was made
     */
    mapElements(iteratee: (element: ExcalidrawElement) => ExcalidrawElement): boolean;
    replaceAllElements(nextElements: ElementsMapOrArray): void;
    triggerUpdate(): void;
    onUpdate(cb: SceneStateCallback): SceneStateCallbackRemover;
    destroy(): void;
    insertElementAtIndex(element: ExcalidrawElement, index: number): void;
    insertElementsAtIndex(elements: ExcalidrawElement[], index: number): void;
    insertElement: (element: ExcalidrawElement) => void;
    insertElements: (elements: ExcalidrawElement[]) => void;
    getElementIndex(elementId: string): number;
    getContainerElement: (element: (ExcalidrawElement & {
        containerId: ExcalidrawElement["id"] | null;
    }) | null) => import("@excalidraw/element/types").ExcalidrawTextElement | import("@excalidraw/element/types").ExcalidrawRectangleElement | import("@excalidraw/element/types").ExcalidrawDiamondElement | import("@excalidraw/element/types").ExcalidrawFrameElement | import("@excalidraw/element/types").ExcalidrawMagicFrameElement | import("@excalidraw/element/types").ExcalidrawEmbeddableElement | import("@excalidraw/element/types").ExcalidrawImageElement | import("@excalidraw/element/types").ExcalidrawIframeElement | import("@excalidraw/element/types").ExcalidrawSelectionElement | import("@excalidraw/element/types").ExcalidrawEllipseElement | import("@excalidraw/element/types").ExcalidrawLinearElement | import("@excalidraw/element/types").ExcalidrawFreeDrawElement | null;
    getElementsFromId: (id: string) => ExcalidrawElement[];
}
export default Scene;
