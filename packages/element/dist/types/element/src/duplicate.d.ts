import type { Mutable } from "@excalidraw/common/utility-types";
import type { AppState } from "@excalidraw/excalidraw/types";
import type { ExcalidrawElement, GroupId } from "./types";
/**
 * Duplicate an element, often used in the alt-drag operation.
 * Note that this method has gotten a bit complicated since the
 * introduction of gruoping/ungrouping elements.
 * @param editingGroupId The current group being edited. The new
 *                       element will inherit this group and its
 *                       parents.
 * @param groupIdMapForOperation A Map that maps old group IDs to
 *                               duplicated ones. If you are duplicating
 *                               multiple elements at once, share this map
 *                               amongst all of them
 * @param element Element to duplicate
 * @param overrides Any element properties to override
 */
export declare const duplicateElement: <TElement extends ExcalidrawElement>(editingGroupId: AppState["editingGroupId"], groupIdMapForOperation: Map<GroupId, GroupId>, element: TElement, overrides?: Partial<TElement> | undefined, randomizeSeed?: boolean) => Readonly<TElement>;
export declare const duplicateElements: (opts: {
    elements: readonly ExcalidrawElement[];
    randomizeSeed?: boolean | undefined;
    overrides?: ((originalElement: ExcalidrawElement) => Partial<ExcalidrawElement>) | undefined;
} & ({
    /**
     * Duplicates all elements in array.
     *
     * Use this when programmaticaly duplicating elements, without direct
     * user interaction.
     */
    type: "everything";
} | {
    /**
     * Duplicates specified elements and inserts them back into the array
     * in specified order.
     *
     * Use this when duplicating Scene elements, during user interaction
     * such as alt-drag or on duplicate action.
     */
    type: "in-place";
    idsOfElementsToDuplicate: Map<ExcalidrawElement["id"], ExcalidrawElement>;
    appState: {
        editingGroupId: AppState["editingGroupId"];
        selectedGroupIds: AppState["selectedGroupIds"];
    };
    /**
     * If true, duplicated elements are inserted _before_ specified
     * elements. Case: alt-dragging elements to duplicate them.
     *
     * TODO: remove this once (if) we stop replacing the original element
     * with the duplicated one in the scene array.
     */
    reverseOrder: boolean;
})) => {
    newElements: ExcalidrawElement[];
    elementsWithClones: ExcalidrawElement[];
};
/**
 * Clones ExcalidrawElement data structure. Does not regenerate id, nonce, or
 * any value. The purpose is to to break object references for immutability
 * reasons, whenever we want to keep the original element, but ensure it's not
 * mutated.
 *
 * Only clones plain objects and arrays. Doesn't clone Date, RegExp, Map, Set,
 * Typed arrays and other non-null objects.
 */
export declare const deepCopyElement: <T extends ExcalidrawElement>(val: T) => Mutable<T>;
