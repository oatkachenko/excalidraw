/// <reference types="react" />
export declare const actionDuplicateSelection: {
    name: "duplicateSelection";
    label: string;
    icon: import("react/jsx-runtime").JSX.Element;
    trackEvent: {
        category: "element";
    };
    perform: (elements: readonly import("@excalidraw/element/types").OrderedExcalidrawElement[], appState: Readonly<import("../types").AppState>, formData: any, app: import("../types").AppClassProperties) => false | {
        elements: readonly import("@excalidraw/element/types").OrderedExcalidrawElement[];
        appState: import("../types").AppState;
        captureUpdate: "IMMEDIATELY";
    };
    keyTest: (event: KeyboardEvent | import("react").KeyboardEvent<Element>) => boolean;
    PanelComponent: ({ elements, appState, updateData }: import("./types").PanelComponentProps) => import("react/jsx-runtime").JSX.Element;
} & {
    keyTest?: ((event: KeyboardEvent | import("react").KeyboardEvent<Element>) => boolean) | undefined;
};
