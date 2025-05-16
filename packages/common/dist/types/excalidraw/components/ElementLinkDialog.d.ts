import type { ElementsMap, ExcalidrawElement } from "@excalidraw/element/types";
import "./ElementLinkDialog.scss";
import type { AppProps, UIAppState } from "../types";
declare const ElementLinkDialog: ({ sourceElementId, onClose, elementsMap, appState, generateLinkForSelection, }: {
    sourceElementId: ExcalidrawElement["id"];
    elementsMap: ElementsMap;
    appState: UIAppState;
    onClose?: (() => void) | undefined;
    generateLinkForSelection: AppProps["generateLinkForSelection"];
}) => import("react/jsx-runtime").JSX.Element;
export default ElementLinkDialog;
