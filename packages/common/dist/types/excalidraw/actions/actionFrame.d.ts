/// <reference types="react" />
import type { ExcalidrawElement } from "@excalidraw/element/types";
import type { AppClassProperties, AppState } from "../types";
export declare const actionSelectAllElementsInFrame: {
    name: "selectAllElementsInFrame";
    label: string;
    trackEvent: {
        category: "canvas";
    };
    perform: (elements: readonly import("@excalidraw/element/types").OrderedExcalidrawElement[], appState: Readonly<AppState>, _: any, app: AppClassProperties) => {
        elements: readonly import("@excalidraw/element/types").OrderedExcalidrawElement[];
        appState: {
            selectedElementIds: Record<string, true>;
            contextMenu: {
                items: import("../components/ContextMenu").ContextMenuItems;
                top: number;
                left: number;
            } | null;
            showWelcomeScreen: boolean;
            isLoading: boolean;
            errorMessage: import("react").ReactNode;
            activeEmbeddable: {
                element: import("@excalidraw/element/types").NonDeletedExcalidrawElement;
                state: "hover" | "active";
            } | null;
            newElement: import("@excalidraw/element/types").NonDeleted<import("@excalidraw/element/types").ExcalidrawNonSelectionElement> | null;
            resizingElement: import("@excalidraw/element/types").NonDeletedExcalidrawElement | null;
            multiElement: import("@excalidraw/element/types").NonDeleted<import("@excalidraw/element/types").ExcalidrawLinearElement> | null;
            selectionElement: import("@excalidraw/element/types").NonDeletedExcalidrawElement | null;
            isBindingEnabled: boolean;
            startBoundElement: import("@excalidraw/element/types").NonDeleted<import("@excalidraw/element/types").ExcalidrawBindableElement> | null;
            suggestedBindings: import("../../element/src/binding").SuggestedBinding[];
            frameToHighlight: import("@excalidraw/element/types").NonDeleted<import("@excalidraw/element/types").ExcalidrawFrameLikeElement> | null;
            frameRendering: {
                enabled: boolean;
                name: boolean;
                outline: boolean;
                clip: boolean;
            };
            editingFrame: string | null;
            elementsToHighlight: import("@excalidraw/element/types").NonDeleted<ExcalidrawElement>[] | null;
            editingTextElement: import("@excalidraw/element/types").NonDeletedExcalidrawElement | null;
            editingLinearElement: import("../../element/src/linearElementEditor").LinearElementEditor | null;
            activeTool: {
                lastActiveTool: import("../types").ActiveTool | null;
                locked: boolean;
            } & import("../types").ActiveTool;
            penMode: boolean;
            penDetected: boolean;
            exportBackground: boolean;
            exportEmbedScene: boolean;
            exportWithDarkMode: boolean;
            exportScale: number;
            currentItemStrokeColor: string;
            currentItemBackgroundColor: string;
            currentItemFillStyle: import("@excalidraw/element/types").FillStyle;
            currentItemStrokeWidth: number;
            currentItemStrokeStyle: import("@excalidraw/element/types").StrokeStyle;
            currentItemRoughness: number;
            currentItemOpacity: number;
            currentItemFontFamily: number;
            currentItemFontSize: number;
            currentItemTextAlign: string;
            currentItemStartArrowhead: import("@excalidraw/element/types").Arrowhead | null;
            currentItemEndArrowhead: import("@excalidraw/element/types").Arrowhead | null;
            currentHoveredFontFamily: number | null;
            currentItemRoundness: import("@excalidraw/element/types").StrokeRoundness;
            currentItemArrowType: "round" | "sharp" | "elbow";
            viewBackgroundColor: string;
            scrollX: number;
            scrollY: number;
            cursorButton: "up" | "down";
            scrolledOutside: boolean;
            name: string | null;
            isResizing: boolean;
            isRotating: boolean;
            zoom: Readonly<{
                value: import("../types").NormalizedZoomValue;
            }>;
            openMenu: "shape" | "canvas" | null;
            openPopup: "fontFamily" | "canvasBackground" | "elementBackground" | "elementStroke" | null;
            openSidebar: {
                name: string;
                tab?: string | undefined;
            } | null;
            openDialog: {
                name: "imageExport" | "help" | "jsonExport";
            } | {
                name: "ttd";
                tab: "text-to-diagram" | "mermaid";
            } | {
                name: "commandPalette";
            } | {
                name: "elementLinkSelector";
                sourceElementId: string;
            } | null;
            defaultSidebarDockedPreference: boolean;
            lastPointerDownWith: import("@excalidraw/element/types").PointerType;
            hoveredElementIds: Readonly<{
                [id: string]: true;
            }>;
            previousSelectedElementIds: {
                [id: string]: true;
            };
            selectedElementsAreBeingDragged: boolean;
            shouldCacheIgnoreZoom: boolean;
            toast: {
                message: string;
                closable?: boolean | undefined;
                duration?: number | undefined;
            } | null;
            zenModeEnabled: boolean;
            theme: import("@excalidraw/element/types").Theme;
            gridSize: number;
            gridStep: number;
            gridModeEnabled: boolean;
            viewModeEnabled: boolean;
            selectedGroupIds: {
                [groupId: string]: boolean;
            };
            editingGroupId: string | null;
            width: number;
            height: number;
            offsetTop: number;
            offsetLeft: number;
            fileHandle: import("browser-fs-access").FileSystemHandle | null;
            collaborators: Map<import("../types").SocketId, Readonly<{
                pointer?: import("../types").CollaboratorPointer | undefined;
                button?: "up" | "down" | undefined;
                selectedElementIds?: Readonly<{
                    [id: string]: true;
                }> | undefined;
                username?: string | null | undefined;
                userState?: import("@excalidraw/common").UserIdleState | undefined;
                color?: {
                    background: string;
                    stroke: string;
                } | undefined;
                avatarUrl?: string | undefined;
                id?: string | undefined;
                socketId?: import("../types").SocketId | undefined;
                isCurrentUser?: boolean | undefined;
                isInCall?: boolean | undefined;
                isSpeaking?: boolean | undefined;
                isMuted?: boolean | undefined;
            }>>;
            stats: {
                open: boolean;
                panels: number;
            };
            currentChartType: import("@excalidraw/element/types").ChartType;
            pasteDialog: {
                shown: false;
                data: null;
            } | {
                shown: true;
                data: import("../charts").Spreadsheet;
            };
            pendingImageElementId: string | null;
            showHyperlinkPopup: false | "editor" | "info";
            selectedLinearElement: import("../../element/src/linearElementEditor").LinearElementEditor | null;
            snapLines: readonly import("../snapping").SnapLine[];
            originSnapOffset: {
                x: number;
                y: number;
            } | null;
            objectsSnapModeEnabled: boolean;
            userToFollow: import("../types").UserToFollow | null;
            followedBy: Set<import("../types").SocketId>;
            isCropping: boolean;
            croppingElementId: string | null;
            searchMatches: readonly {
                id: string;
                focus: boolean;
                matchedLines: {
                    offsetX: number;
                    offsetY: number;
                    width: number;
                    height: number;
                }[];
            }[];
        };
        captureUpdate: "IMMEDIATELY";
    } | {
        elements: readonly import("@excalidraw/element/types").OrderedExcalidrawElement[];
        appState: Readonly<AppState>;
        captureUpdate: "EVENTUALLY";
    };
    predicate: (elements: readonly ExcalidrawElement[], appState: AppState, _: import("../types").ExcalidrawProps, app: AppClassProperties) => boolean;
} & {
    keyTest?: undefined;
};
export declare const actionRemoveAllElementsFromFrame: {
    name: "removeAllElementsFromFrame";
    label: string;
    trackEvent: {
        category: "history";
    };
    perform: (elements: readonly import("@excalidraw/element/types").OrderedExcalidrawElement[], appState: Readonly<AppState>, _: any, app: AppClassProperties) => {
        elements: readonly import("@excalidraw/element/types").OrderedExcalidrawElement[];
        appState: {
            selectedElementIds: {
                [x: string]: true;
            };
            contextMenu: {
                items: import("../components/ContextMenu").ContextMenuItems;
                top: number;
                left: number;
            } | null;
            showWelcomeScreen: boolean;
            isLoading: boolean;
            errorMessage: import("react").ReactNode;
            activeEmbeddable: {
                element: import("@excalidraw/element/types").NonDeletedExcalidrawElement;
                state: "hover" | "active";
            } | null;
            newElement: import("@excalidraw/element/types").NonDeleted<import("@excalidraw/element/types").ExcalidrawNonSelectionElement> | null;
            resizingElement: import("@excalidraw/element/types").NonDeletedExcalidrawElement | null;
            multiElement: import("@excalidraw/element/types").NonDeleted<import("@excalidraw/element/types").ExcalidrawLinearElement> | null;
            selectionElement: import("@excalidraw/element/types").NonDeletedExcalidrawElement | null;
            isBindingEnabled: boolean;
            startBoundElement: import("@excalidraw/element/types").NonDeleted<import("@excalidraw/element/types").ExcalidrawBindableElement> | null;
            suggestedBindings: import("../../element/src/binding").SuggestedBinding[];
            frameToHighlight: import("@excalidraw/element/types").NonDeleted<import("@excalidraw/element/types").ExcalidrawFrameLikeElement> | null;
            frameRendering: {
                enabled: boolean;
                name: boolean;
                outline: boolean;
                clip: boolean;
            };
            editingFrame: string | null;
            elementsToHighlight: import("@excalidraw/element/types").NonDeleted<ExcalidrawElement>[] | null;
            editingTextElement: import("@excalidraw/element/types").NonDeletedExcalidrawElement | null;
            editingLinearElement: import("../../element/src/linearElementEditor").LinearElementEditor | null;
            activeTool: {
                lastActiveTool: import("../types").ActiveTool | null;
                locked: boolean;
            } & import("../types").ActiveTool;
            penMode: boolean;
            penDetected: boolean;
            exportBackground: boolean;
            exportEmbedScene: boolean;
            exportWithDarkMode: boolean;
            exportScale: number;
            currentItemStrokeColor: string;
            currentItemBackgroundColor: string;
            currentItemFillStyle: import("@excalidraw/element/types").FillStyle;
            currentItemStrokeWidth: number;
            currentItemStrokeStyle: import("@excalidraw/element/types").StrokeStyle;
            currentItemRoughness: number;
            currentItemOpacity: number;
            currentItemFontFamily: number;
            currentItemFontSize: number;
            currentItemTextAlign: string;
            currentItemStartArrowhead: import("@excalidraw/element/types").Arrowhead | null;
            currentItemEndArrowhead: import("@excalidraw/element/types").Arrowhead | null;
            currentHoveredFontFamily: number | null;
            currentItemRoundness: import("@excalidraw/element/types").StrokeRoundness;
            currentItemArrowType: "round" | "sharp" | "elbow";
            viewBackgroundColor: string;
            scrollX: number;
            scrollY: number;
            cursorButton: "up" | "down";
            scrolledOutside: boolean;
            name: string | null;
            isResizing: boolean;
            isRotating: boolean;
            zoom: Readonly<{
                value: import("../types").NormalizedZoomValue;
            }>;
            openMenu: "shape" | "canvas" | null;
            openPopup: "fontFamily" | "canvasBackground" | "elementBackground" | "elementStroke" | null;
            openSidebar: {
                name: string;
                tab?: string | undefined;
            } | null;
            openDialog: {
                name: "imageExport" | "help" | "jsonExport";
            } | {
                name: "ttd";
                tab: "text-to-diagram" | "mermaid";
            } | {
                name: "commandPalette";
            } | {
                name: "elementLinkSelector";
                sourceElementId: string;
            } | null;
            defaultSidebarDockedPreference: boolean;
            lastPointerDownWith: import("@excalidraw/element/types").PointerType;
            hoveredElementIds: Readonly<{
                [id: string]: true;
            }>;
            previousSelectedElementIds: {
                [id: string]: true;
            };
            selectedElementsAreBeingDragged: boolean;
            shouldCacheIgnoreZoom: boolean;
            toast: {
                message: string;
                closable?: boolean | undefined;
                duration?: number | undefined;
            } | null;
            zenModeEnabled: boolean;
            theme: import("@excalidraw/element/types").Theme;
            gridSize: number;
            gridStep: number;
            gridModeEnabled: boolean;
            viewModeEnabled: boolean;
            selectedGroupIds: {
                [groupId: string]: boolean;
            };
            editingGroupId: string | null;
            width: number;
            height: number;
            offsetTop: number;
            offsetLeft: number;
            fileHandle: import("browser-fs-access").FileSystemHandle | null;
            collaborators: Map<import("../types").SocketId, Readonly<{
                pointer?: import("../types").CollaboratorPointer | undefined;
                button?: "up" | "down" | undefined;
                selectedElementIds?: Readonly<{
                    [id: string]: true;
                }> | undefined;
                username?: string | null | undefined;
                userState?: import("@excalidraw/common").UserIdleState | undefined;
                color?: {
                    background: string;
                    stroke: string;
                } | undefined;
                avatarUrl?: string | undefined;
                id?: string | undefined;
                socketId?: import("../types").SocketId | undefined;
                isCurrentUser?: boolean | undefined;
                isInCall?: boolean | undefined;
                isSpeaking?: boolean | undefined;
                isMuted?: boolean | undefined;
            }>>;
            stats: {
                open: boolean;
                panels: number;
            };
            currentChartType: import("@excalidraw/element/types").ChartType;
            pasteDialog: {
                shown: false;
                data: null;
            } | {
                shown: true;
                data: import("../charts").Spreadsheet;
            };
            pendingImageElementId: string | null;
            showHyperlinkPopup: false | "editor" | "info";
            selectedLinearElement: import("../../element/src/linearElementEditor").LinearElementEditor | null;
            snapLines: readonly import("../snapping").SnapLine[];
            originSnapOffset: {
                x: number;
                y: number;
            } | null;
            objectsSnapModeEnabled: boolean;
            userToFollow: import("../types").UserToFollow | null;
            followedBy: Set<import("../types").SocketId>;
            isCropping: boolean;
            croppingElementId: string | null;
            searchMatches: readonly {
                id: string;
                focus: boolean;
                matchedLines: {
                    offsetX: number;
                    offsetY: number;
                    width: number;
                    height: number;
                }[];
            }[];
        };
        captureUpdate: "IMMEDIATELY";
    } | {
        elements: readonly import("@excalidraw/element/types").OrderedExcalidrawElement[];
        appState: Readonly<AppState>;
        captureUpdate: "EVENTUALLY";
    };
    predicate: (elements: readonly ExcalidrawElement[], appState: AppState, _: import("../types").ExcalidrawProps, app: AppClassProperties) => boolean;
} & {
    keyTest?: undefined;
};
export declare const actionupdateFrameRendering: {
    name: "updateFrameRendering";
    label: string;
    viewMode: true;
    trackEvent: {
        category: "canvas";
    };
    perform: (elements: readonly import("@excalidraw/element/types").OrderedExcalidrawElement[], appState: Readonly<AppState>) => {
        elements: readonly import("@excalidraw/element/types").OrderedExcalidrawElement[];
        appState: {
            frameRendering: {
                enabled: boolean;
                name: boolean;
                outline: boolean;
                clip: boolean;
            };
            contextMenu: {
                items: import("../components/ContextMenu").ContextMenuItems;
                top: number;
                left: number;
            } | null;
            showWelcomeScreen: boolean;
            isLoading: boolean;
            errorMessage: import("react").ReactNode;
            activeEmbeddable: {
                element: import("@excalidraw/element/types").NonDeletedExcalidrawElement;
                state: "hover" | "active";
            } | null;
            newElement: import("@excalidraw/element/types").NonDeleted<import("@excalidraw/element/types").ExcalidrawNonSelectionElement> | null;
            resizingElement: import("@excalidraw/element/types").NonDeletedExcalidrawElement | null;
            multiElement: import("@excalidraw/element/types").NonDeleted<import("@excalidraw/element/types").ExcalidrawLinearElement> | null;
            selectionElement: import("@excalidraw/element/types").NonDeletedExcalidrawElement | null;
            isBindingEnabled: boolean;
            startBoundElement: import("@excalidraw/element/types").NonDeleted<import("@excalidraw/element/types").ExcalidrawBindableElement> | null;
            suggestedBindings: import("../../element/src/binding").SuggestedBinding[];
            frameToHighlight: import("@excalidraw/element/types").NonDeleted<import("@excalidraw/element/types").ExcalidrawFrameLikeElement> | null;
            editingFrame: string | null;
            elementsToHighlight: import("@excalidraw/element/types").NonDeleted<ExcalidrawElement>[] | null;
            editingTextElement: import("@excalidraw/element/types").NonDeletedExcalidrawElement | null;
            editingLinearElement: import("../../element/src/linearElementEditor").LinearElementEditor | null;
            activeTool: {
                lastActiveTool: import("../types").ActiveTool | null;
                locked: boolean;
            } & import("../types").ActiveTool;
            penMode: boolean;
            penDetected: boolean;
            exportBackground: boolean;
            exportEmbedScene: boolean;
            exportWithDarkMode: boolean;
            exportScale: number;
            currentItemStrokeColor: string;
            currentItemBackgroundColor: string;
            currentItemFillStyle: import("@excalidraw/element/types").FillStyle;
            currentItemStrokeWidth: number;
            currentItemStrokeStyle: import("@excalidraw/element/types").StrokeStyle;
            currentItemRoughness: number;
            currentItemOpacity: number;
            currentItemFontFamily: number;
            currentItemFontSize: number;
            currentItemTextAlign: string;
            currentItemStartArrowhead: import("@excalidraw/element/types").Arrowhead | null;
            currentItemEndArrowhead: import("@excalidraw/element/types").Arrowhead | null;
            currentHoveredFontFamily: number | null;
            currentItemRoundness: import("@excalidraw/element/types").StrokeRoundness;
            currentItemArrowType: "round" | "sharp" | "elbow";
            viewBackgroundColor: string;
            scrollX: number;
            scrollY: number;
            cursorButton: "up" | "down";
            scrolledOutside: boolean;
            name: string | null;
            isResizing: boolean;
            isRotating: boolean;
            zoom: Readonly<{
                value: import("../types").NormalizedZoomValue;
            }>;
            openMenu: "shape" | "canvas" | null;
            openPopup: "fontFamily" | "canvasBackground" | "elementBackground" | "elementStroke" | null;
            openSidebar: {
                name: string;
                tab?: string | undefined;
            } | null;
            openDialog: {
                name: "imageExport" | "help" | "jsonExport";
            } | {
                name: "ttd";
                tab: "text-to-diagram" | "mermaid";
            } | {
                name: "commandPalette";
            } | {
                name: "elementLinkSelector";
                sourceElementId: string;
            } | null;
            defaultSidebarDockedPreference: boolean;
            lastPointerDownWith: import("@excalidraw/element/types").PointerType;
            selectedElementIds: Readonly<{
                [id: string]: true;
            }>;
            hoveredElementIds: Readonly<{
                [id: string]: true;
            }>;
            previousSelectedElementIds: {
                [id: string]: true;
            };
            selectedElementsAreBeingDragged: boolean;
            shouldCacheIgnoreZoom: boolean;
            toast: {
                message: string;
                closable?: boolean | undefined;
                duration?: number | undefined;
            } | null;
            zenModeEnabled: boolean;
            theme: import("@excalidraw/element/types").Theme;
            gridSize: number;
            gridStep: number;
            gridModeEnabled: boolean;
            viewModeEnabled: boolean;
            selectedGroupIds: {
                [groupId: string]: boolean;
            };
            editingGroupId: string | null;
            width: number;
            height: number;
            offsetTop: number;
            offsetLeft: number;
            fileHandle: import("browser-fs-access").FileSystemHandle | null;
            collaborators: Map<import("../types").SocketId, Readonly<{
                pointer?: import("../types").CollaboratorPointer | undefined;
                button?: "up" | "down" | undefined;
                selectedElementIds?: Readonly<{
                    [id: string]: true;
                }> | undefined;
                username?: string | null | undefined;
                userState?: import("@excalidraw/common").UserIdleState | undefined;
                color?: {
                    background: string;
                    stroke: string;
                } | undefined;
                avatarUrl?: string | undefined;
                id?: string | undefined;
                socketId?: import("../types").SocketId | undefined;
                isCurrentUser?: boolean | undefined;
                isInCall?: boolean | undefined;
                isSpeaking?: boolean | undefined;
                isMuted?: boolean | undefined;
            }>>;
            stats: {
                open: boolean;
                panels: number;
            };
            currentChartType: import("@excalidraw/element/types").ChartType;
            pasteDialog: {
                shown: false;
                data: null;
            } | {
                shown: true;
                data: import("../charts").Spreadsheet;
            };
            pendingImageElementId: string | null;
            showHyperlinkPopup: false | "editor" | "info";
            selectedLinearElement: import("../../element/src/linearElementEditor").LinearElementEditor | null;
            snapLines: readonly import("../snapping").SnapLine[];
            originSnapOffset: {
                x: number;
                y: number;
            } | null;
            objectsSnapModeEnabled: boolean;
            userToFollow: import("../types").UserToFollow | null;
            followedBy: Set<import("../types").SocketId>;
            isCropping: boolean;
            croppingElementId: string | null;
            searchMatches: readonly {
                id: string;
                focus: boolean;
                matchedLines: {
                    offsetX: number;
                    offsetY: number;
                    width: number;
                    height: number;
                }[];
            }[];
        };
        captureUpdate: "EVENTUALLY";
    };
    checked: (appState: AppState) => boolean;
} & {
    keyTest?: undefined;
};
export declare const actionSetFrameAsActiveTool: {
    name: "setFrameAsActiveTool";
    label: string;
    trackEvent: {
        category: "toolbar";
    };
    icon: import("react/jsx-runtime").JSX.Element;
    viewMode: false;
    perform: (elements: readonly import("@excalidraw/element/types").OrderedExcalidrawElement[], appState: Readonly<AppState>, _: any, app: AppClassProperties) => {
        elements: readonly import("@excalidraw/element/types").OrderedExcalidrawElement[];
        appState: {
            activeTool: {
                lastActiveTool: import("../types").ActiveTool | null;
                locked: boolean;
            } & import("../types").ActiveTool;
            contextMenu: {
                items: import("../components/ContextMenu").ContextMenuItems;
                top: number;
                left: number;
            } | null;
            showWelcomeScreen: boolean;
            isLoading: boolean;
            errorMessage: import("react").ReactNode;
            activeEmbeddable: {
                element: import("@excalidraw/element/types").NonDeletedExcalidrawElement;
                state: "hover" | "active";
            } | null;
            newElement: import("@excalidraw/element/types").NonDeleted<import("@excalidraw/element/types").ExcalidrawNonSelectionElement> | null;
            resizingElement: import("@excalidraw/element/types").NonDeletedExcalidrawElement | null;
            multiElement: import("@excalidraw/element/types").NonDeleted<import("@excalidraw/element/types").ExcalidrawLinearElement> | null;
            selectionElement: import("@excalidraw/element/types").NonDeletedExcalidrawElement | null;
            isBindingEnabled: boolean;
            startBoundElement: import("@excalidraw/element/types").NonDeleted<import("@excalidraw/element/types").ExcalidrawBindableElement> | null;
            suggestedBindings: import("../../element/src/binding").SuggestedBinding[];
            frameToHighlight: import("@excalidraw/element/types").NonDeleted<import("@excalidraw/element/types").ExcalidrawFrameLikeElement> | null;
            frameRendering: {
                enabled: boolean;
                name: boolean;
                outline: boolean;
                clip: boolean;
            };
            editingFrame: string | null;
            elementsToHighlight: import("@excalidraw/element/types").NonDeleted<ExcalidrawElement>[] | null;
            editingTextElement: import("@excalidraw/element/types").NonDeletedExcalidrawElement | null;
            editingLinearElement: import("../../element/src/linearElementEditor").LinearElementEditor | null;
            penMode: boolean;
            penDetected: boolean;
            exportBackground: boolean;
            exportEmbedScene: boolean;
            exportWithDarkMode: boolean;
            exportScale: number;
            currentItemStrokeColor: string;
            currentItemBackgroundColor: string;
            currentItemFillStyle: import("@excalidraw/element/types").FillStyle;
            currentItemStrokeWidth: number;
            currentItemStrokeStyle: import("@excalidraw/element/types").StrokeStyle;
            currentItemRoughness: number;
            currentItemOpacity: number;
            currentItemFontFamily: number;
            currentItemFontSize: number;
            currentItemTextAlign: string;
            currentItemStartArrowhead: import("@excalidraw/element/types").Arrowhead | null;
            currentItemEndArrowhead: import("@excalidraw/element/types").Arrowhead | null;
            currentHoveredFontFamily: number | null;
            currentItemRoundness: import("@excalidraw/element/types").StrokeRoundness;
            currentItemArrowType: "round" | "sharp" | "elbow";
            viewBackgroundColor: string;
            scrollX: number;
            scrollY: number;
            cursorButton: "up" | "down";
            scrolledOutside: boolean;
            name: string | null;
            isResizing: boolean;
            isRotating: boolean;
            zoom: Readonly<{
                value: import("../types").NormalizedZoomValue;
            }>;
            openMenu: "shape" | "canvas" | null;
            openPopup: "fontFamily" | "canvasBackground" | "elementBackground" | "elementStroke" | null;
            openSidebar: {
                name: string;
                tab?: string | undefined;
            } | null;
            openDialog: {
                name: "imageExport" | "help" | "jsonExport";
            } | {
                name: "ttd";
                tab: "text-to-diagram" | "mermaid";
            } | {
                name: "commandPalette";
            } | {
                name: "elementLinkSelector";
                sourceElementId: string;
            } | null;
            defaultSidebarDockedPreference: boolean;
            lastPointerDownWith: import("@excalidraw/element/types").PointerType;
            selectedElementIds: Readonly<{
                [id: string]: true;
            }>;
            hoveredElementIds: Readonly<{
                [id: string]: true;
            }>;
            previousSelectedElementIds: {
                [id: string]: true;
            };
            selectedElementsAreBeingDragged: boolean;
            shouldCacheIgnoreZoom: boolean;
            toast: {
                message: string;
                closable?: boolean | undefined;
                duration?: number | undefined;
            } | null;
            zenModeEnabled: boolean;
            theme: import("@excalidraw/element/types").Theme;
            gridSize: number;
            gridStep: number;
            gridModeEnabled: boolean;
            viewModeEnabled: boolean;
            selectedGroupIds: {
                [groupId: string]: boolean;
            };
            editingGroupId: string | null;
            width: number;
            height: number;
            offsetTop: number;
            offsetLeft: number;
            fileHandle: import("browser-fs-access").FileSystemHandle | null;
            collaborators: Map<import("../types").SocketId, Readonly<{
                pointer?: import("../types").CollaboratorPointer | undefined;
                button?: "up" | "down" | undefined;
                selectedElementIds?: Readonly<{
                    [id: string]: true;
                }> | undefined;
                username?: string | null | undefined;
                userState?: import("@excalidraw/common").UserIdleState | undefined;
                color?: {
                    background: string;
                    stroke: string;
                } | undefined;
                avatarUrl?: string | undefined;
                id?: string | undefined;
                socketId?: import("../types").SocketId | undefined;
                isCurrentUser?: boolean | undefined;
                isInCall?: boolean | undefined;
                isSpeaking?: boolean | undefined;
                isMuted?: boolean | undefined;
            }>>;
            stats: {
                open: boolean;
                panels: number;
            };
            currentChartType: import("@excalidraw/element/types").ChartType;
            pasteDialog: {
                shown: false;
                data: null;
            } | {
                shown: true;
                data: import("../charts").Spreadsheet;
            };
            pendingImageElementId: string | null;
            showHyperlinkPopup: false | "editor" | "info";
            selectedLinearElement: import("../../element/src/linearElementEditor").LinearElementEditor | null;
            snapLines: readonly import("../snapping").SnapLine[];
            originSnapOffset: {
                x: number;
                y: number;
            } | null;
            objectsSnapModeEnabled: boolean;
            userToFollow: import("../types").UserToFollow | null;
            followedBy: Set<import("../types").SocketId>;
            isCropping: boolean;
            croppingElementId: string | null;
            searchMatches: readonly {
                id: string;
                focus: boolean;
                matchedLines: {
                    offsetX: number;
                    offsetY: number;
                    width: number;
                    height: number;
                }[];
            }[];
        };
        captureUpdate: "EVENTUALLY";
    };
    keyTest: (event: KeyboardEvent | import("react").KeyboardEvent<Element>) => boolean;
} & {
    keyTest?: ((event: KeyboardEvent | import("react").KeyboardEvent<Element>) => boolean) | undefined;
};
export declare const actionWrapSelectionInFrame: {
    name: "wrapSelectionInFrame";
    label: string;
    trackEvent: {
        category: "element";
    };
    predicate: (elements: readonly ExcalidrawElement[], appState: AppState, _: import("../types").ExcalidrawProps, app: AppClassProperties) => boolean;
    perform: (elements: readonly import("@excalidraw/element/types").OrderedExcalidrawElement[], appState: Readonly<AppState>, _: any, app: AppClassProperties) => {
        elements: ((Readonly<{
            id: string;
            x: number;
            y: number;
            strokeColor: string;
            backgroundColor: string;
            fillStyle: import("@excalidraw/element/types").FillStyle;
            strokeWidth: number;
            strokeStyle: import("@excalidraw/element/types").StrokeStyle;
            roundness: {
                type: import("@excalidraw/element/types").RoundnessType;
                value?: number | undefined;
            } | null;
            roughness: number;
            opacity: number;
            width: number;
            height: number;
            angle: import("../../math/src").Radians;
            seed: number;
            version: number;
            versionNonce: number;
            index: import("@excalidraw/element/types").FractionalIndex | null;
            isDeleted: boolean;
            groupIds: readonly string[];
            frameId: string | null;
            boundElements: readonly Readonly<{
                id: string;
                type: "text" | "arrow";
            }>[] | null;
            updated: number;
            link: string | null;
            locked: boolean;
            customData?: Record<string, any> | undefined;
        }> & Readonly<{
            type: "text";
            fontSize: number;
            fontFamily: number;
            text: string;
            textAlign: string;
            verticalAlign: string;
            containerId: string | null;
            originalText: string;
            autoResize: boolean;
            lineHeight: number & {
                _brand: "unitlessLineHeight";
            };
        }> & {
            index: import("@excalidraw/element/types").FractionalIndex;
        }) | (Readonly<{
            id: string;
            x: number;
            y: number;
            strokeColor: string;
            backgroundColor: string;
            fillStyle: import("@excalidraw/element/types").FillStyle;
            strokeWidth: number;
            strokeStyle: import("@excalidraw/element/types").StrokeStyle;
            roundness: {
                type: import("@excalidraw/element/types").RoundnessType;
                value?: number | undefined;
            } | null;
            roughness: number;
            opacity: number;
            width: number;
            height: number;
            angle: import("../../math/src").Radians;
            seed: number;
            version: number;
            versionNonce: number;
            index: import("@excalidraw/element/types").FractionalIndex | null;
            isDeleted: boolean;
            groupIds: readonly string[];
            frameId: string | null;
            boundElements: readonly Readonly<{
                id: string;
                type: "text" | "arrow";
            }>[] | null;
            updated: number;
            link: string | null;
            locked: boolean;
            customData?: Record<string, any> | undefined;
        }> & {
            type: "rectangle";
        } & {
            index: import("@excalidraw/element/types").FractionalIndex;
        }) | (Readonly<{
            id: string;
            x: number;
            y: number;
            strokeColor: string;
            backgroundColor: string;
            fillStyle: import("@excalidraw/element/types").FillStyle;
            strokeWidth: number;
            strokeStyle: import("@excalidraw/element/types").StrokeStyle;
            roundness: {
                type: import("@excalidraw/element/types").RoundnessType;
                value?: number | undefined;
            } | null;
            roughness: number;
            opacity: number;
            width: number;
            height: number;
            angle: import("../../math/src").Radians;
            seed: number;
            version: number;
            versionNonce: number;
            index: import("@excalidraw/element/types").FractionalIndex | null;
            isDeleted: boolean;
            groupIds: readonly string[];
            frameId: string | null;
            boundElements: readonly Readonly<{
                id: string;
                type: "text" | "arrow";
            }>[] | null;
            updated: number;
            link: string | null;
            locked: boolean;
            customData?: Record<string, any> | undefined;
        }> & {
            type: "diamond";
        } & {
            index: import("@excalidraw/element/types").FractionalIndex;
        }) | (Readonly<{
            id: string;
            x: number;
            y: number;
            strokeColor: string;
            backgroundColor: string;
            fillStyle: import("@excalidraw/element/types").FillStyle;
            strokeWidth: number;
            strokeStyle: import("@excalidraw/element/types").StrokeStyle;
            roundness: {
                type: import("@excalidraw/element/types").RoundnessType;
                value?: number | undefined;
            } | null;
            roughness: number;
            opacity: number;
            width: number;
            height: number;
            angle: import("../../math/src").Radians;
            seed: number;
            version: number;
            versionNonce: number;
            index: import("@excalidraw/element/types").FractionalIndex | null;
            isDeleted: boolean;
            groupIds: readonly string[];
            frameId: string | null;
            boundElements: readonly Readonly<{
                id: string;
                type: "text" | "arrow";
            }>[] | null;
            updated: number;
            link: string | null;
            locked: boolean;
            customData?: Record<string, any> | undefined;
        }> & {
            type: "frame";
            name: string | null;
        } & {
            index: import("@excalidraw/element/types").FractionalIndex;
        }) | (Readonly<{
            id: string;
            x: number;
            y: number;
            strokeColor: string;
            backgroundColor: string;
            fillStyle: import("@excalidraw/element/types").FillStyle;
            strokeWidth: number;
            strokeStyle: import("@excalidraw/element/types").StrokeStyle;
            roundness: {
                type: import("@excalidraw/element/types").RoundnessType;
                value?: number | undefined;
            } | null;
            roughness: number;
            opacity: number;
            width: number;
            height: number;
            angle: import("../../math/src").Radians;
            seed: number;
            version: number;
            versionNonce: number;
            index: import("@excalidraw/element/types").FractionalIndex | null;
            isDeleted: boolean;
            groupIds: readonly string[];
            frameId: string | null;
            boundElements: readonly Readonly<{
                id: string;
                type: "text" | "arrow";
            }>[] | null;
            updated: number;
            link: string | null;
            locked: boolean;
            customData?: Record<string, any> | undefined;
        }> & {
            type: "magicframe";
            name: string | null;
        } & {
            index: import("@excalidraw/element/types").FractionalIndex;
        }) | (Readonly<{
            id: string;
            x: number;
            y: number;
            strokeColor: string;
            backgroundColor: string;
            fillStyle: import("@excalidraw/element/types").FillStyle;
            strokeWidth: number;
            strokeStyle: import("@excalidraw/element/types").StrokeStyle;
            roundness: {
                type: import("@excalidraw/element/types").RoundnessType;
                value?: number | undefined;
            } | null;
            roughness: number;
            opacity: number;
            width: number;
            height: number;
            angle: import("../../math/src").Radians;
            seed: number;
            version: number;
            versionNonce: number;
            index: import("@excalidraw/element/types").FractionalIndex | null;
            isDeleted: boolean;
            groupIds: readonly string[];
            frameId: string | null;
            boundElements: readonly Readonly<{
                id: string;
                type: "text" | "arrow";
            }>[] | null;
            updated: number;
            link: string | null;
            locked: boolean;
            customData?: Record<string, any> | undefined;
        }> & Readonly<{
            type: "embeddable";
        }> & {
            index: import("@excalidraw/element/types").FractionalIndex;
        }) | (Readonly<{
            id: string;
            x: number;
            y: number;
            strokeColor: string;
            backgroundColor: string;
            fillStyle: import("@excalidraw/element/types").FillStyle;
            strokeWidth: number;
            strokeStyle: import("@excalidraw/element/types").StrokeStyle;
            roundness: {
                type: import("@excalidraw/element/types").RoundnessType;
                value?: number | undefined;
            } | null;
            roughness: number;
            opacity: number;
            width: number;
            height: number;
            angle: import("../../math/src").Radians;
            seed: number;
            version: number;
            versionNonce: number;
            index: import("@excalidraw/element/types").FractionalIndex | null;
            isDeleted: boolean;
            groupIds: readonly string[];
            frameId: string | null;
            boundElements: readonly Readonly<{
                id: string;
                type: "text" | "arrow";
            }>[] | null;
            updated: number;
            link: string | null;
            locked: boolean;
            customData?: Record<string, any> | undefined;
        }> & Readonly<{
            type: "image";
            fileId: import("@excalidraw/element/types").FileId | null;
            status: "pending" | "saved" | "error";
            scale: [number, number];
            crop: import("@excalidraw/element/types").ImageCrop | null;
        }> & {
            index: import("@excalidraw/element/types").FractionalIndex;
        }) | (Readonly<{
            id: string;
            x: number;
            y: number;
            strokeColor: string;
            backgroundColor: string;
            fillStyle: import("@excalidraw/element/types").FillStyle;
            strokeWidth: number;
            strokeStyle: import("@excalidraw/element/types").StrokeStyle;
            roundness: {
                type: import("@excalidraw/element/types").RoundnessType;
                value?: number | undefined;
            } | null;
            roughness: number;
            opacity: number;
            width: number;
            height: number;
            angle: import("../../math/src").Radians;
            seed: number;
            version: number;
            versionNonce: number;
            index: import("@excalidraw/element/types").FractionalIndex | null;
            isDeleted: boolean;
            groupIds: readonly string[];
            frameId: string | null;
            boundElements: readonly Readonly<{
                id: string;
                type: "text" | "arrow";
            }>[] | null;
            updated: number;
            link: string | null;
            locked: boolean;
            customData?: Record<string, any> | undefined;
        }> & Readonly<{
            type: "iframe";
            customData?: {
                generationData?: import("@excalidraw/element/types").MagicGenerationData | undefined;
            } | undefined;
        }> & {
            index: import("@excalidraw/element/types").FractionalIndex;
        }) | (Readonly<{
            id: string;
            x: number;
            y: number;
            strokeColor: string;
            backgroundColor: string;
            fillStyle: import("@excalidraw/element/types").FillStyle;
            strokeWidth: number;
            strokeStyle: import("@excalidraw/element/types").StrokeStyle;
            roundness: {
                type: import("@excalidraw/element/types").RoundnessType;
                value?: number | undefined;
            } | null;
            roughness: number;
            opacity: number;
            width: number;
            height: number;
            angle: import("../../math/src").Radians;
            seed: number;
            version: number;
            versionNonce: number;
            index: import("@excalidraw/element/types").FractionalIndex | null;
            isDeleted: boolean;
            groupIds: readonly string[];
            frameId: string | null;
            boundElements: readonly Readonly<{
                id: string;
                type: "text" | "arrow";
            }>[] | null;
            updated: number;
            link: string | null;
            locked: boolean;
            customData?: Record<string, any> | undefined;
        }> & {
            type: "selection";
        } & {
            index: import("@excalidraw/element/types").FractionalIndex;
        }) | (Readonly<{
            id: string;
            x: number;
            y: number;
            strokeColor: string;
            backgroundColor: string;
            fillStyle: import("@excalidraw/element/types").FillStyle;
            strokeWidth: number;
            strokeStyle: import("@excalidraw/element/types").StrokeStyle;
            roundness: {
                type: import("@excalidraw/element/types").RoundnessType;
                value?: number | undefined;
            } | null;
            roughness: number;
            opacity: number;
            width: number;
            height: number;
            angle: import("../../math/src").Radians;
            seed: number;
            version: number;
            versionNonce: number;
            index: import("@excalidraw/element/types").FractionalIndex | null;
            isDeleted: boolean;
            groupIds: readonly string[];
            frameId: string | null;
            boundElements: readonly Readonly<{
                id: string;
                type: "text" | "arrow";
            }>[] | null;
            updated: number;
            link: string | null;
            locked: boolean;
            customData?: Record<string, any> | undefined;
        }> & {
            type: "ellipse";
        } & {
            index: import("@excalidraw/element/types").FractionalIndex;
        }) | (Readonly<{
            id: string;
            x: number;
            y: number;
            strokeColor: string;
            backgroundColor: string;
            fillStyle: import("@excalidraw/element/types").FillStyle;
            strokeWidth: number;
            strokeStyle: import("@excalidraw/element/types").StrokeStyle;
            roundness: {
                type: import("@excalidraw/element/types").RoundnessType;
                value?: number | undefined;
            } | null;
            roughness: number;
            opacity: number;
            width: number;
            height: number;
            angle: import("../../math/src").Radians;
            seed: number;
            version: number;
            versionNonce: number;
            index: import("@excalidraw/element/types").FractionalIndex | null;
            isDeleted: boolean;
            groupIds: readonly string[];
            frameId: string | null;
            boundElements: readonly Readonly<{
                id: string;
                type: "text" | "arrow";
            }>[] | null;
            updated: number;
            link: string | null;
            locked: boolean;
            customData?: Record<string, any> | undefined;
        }> & Readonly<{
            type: "line" | "arrow";
            points: readonly import("../../math/src").LocalPoint[];
            lastCommittedPoint: import("../../math/src").LocalPoint | null;
            startBinding: import("@excalidraw/element/types").PointBinding | null;
            endBinding: import("@excalidraw/element/types").PointBinding | null;
            startArrowhead: import("@excalidraw/element/types").Arrowhead | null;
            endArrowhead: import("@excalidraw/element/types").Arrowhead | null;
        }> & {
            index: import("@excalidraw/element/types").FractionalIndex;
        }) | (Readonly<{
            id: string;
            x: number;
            y: number;
            strokeColor: string;
            backgroundColor: string;
            fillStyle: import("@excalidraw/element/types").FillStyle;
            strokeWidth: number;
            strokeStyle: import("@excalidraw/element/types").StrokeStyle;
            roundness: {
                type: import("@excalidraw/element/types").RoundnessType;
                value?: number | undefined;
            } | null;
            roughness: number;
            opacity: number;
            width: number;
            height: number;
            angle: import("../../math/src").Radians;
            seed: number;
            version: number;
            versionNonce: number;
            index: import("@excalidraw/element/types").FractionalIndex | null;
            isDeleted: boolean;
            groupIds: readonly string[];
            frameId: string | null;
            boundElements: readonly Readonly<{
                id: string;
                type: "text" | "arrow";
            }>[] | null;
            updated: number;
            link: string | null;
            locked: boolean;
            customData?: Record<string, any> | undefined;
        }> & Readonly<{
            type: "freedraw";
            points: readonly import("../../math/src").LocalPoint[];
            pressures: readonly number[];
            simulatePressure: boolean;
            lastCommittedPoint: import("../../math/src").LocalPoint | null;
        }> & {
            index: import("@excalidraw/element/types").FractionalIndex;
        }) | import("@excalidraw/element/types").NonDeleted<import("@excalidraw/element/types").ExcalidrawFrameElement>)[];
        appState: {
            selectedElementIds: {
                [x: string]: true;
            };
        };
        captureUpdate: "IMMEDIATELY";
    };
} & {
    keyTest?: undefined;
};
