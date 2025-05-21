export declare const SHAPES: readonly [{
    readonly icon: import("react/jsx-runtime").JSX.Element;
    readonly value: "selection";
    readonly key: "v";
    readonly numericKey: "1";
    readonly fillable: true;
}, {
    readonly icon: import("react/jsx-runtime").JSX.Element;
    readonly value: "rectangle";
    readonly key: "r";
    readonly numericKey: "2";
    readonly fillable: true;
}, {
    readonly icon: import("react/jsx-runtime").JSX.Element;
    readonly value: "diamond";
    readonly key: "d";
    readonly numericKey: "3";
    readonly fillable: true;
}, {
    readonly icon: import("react/jsx-runtime").JSX.Element;
    readonly value: "ellipse";
    readonly key: "o";
    readonly numericKey: "4";
    readonly fillable: true;
}, {
    readonly icon: import("react/jsx-runtime").JSX.Element;
    readonly value: "arrow";
    readonly key: "a";
    readonly numericKey: "5";
    readonly fillable: true;
}, {
    readonly icon: import("react/jsx-runtime").JSX.Element;
    readonly value: "line";
    readonly key: "l";
    readonly numericKey: "6";
    readonly fillable: true;
}, {
    readonly icon: import("react/jsx-runtime").JSX.Element;
    readonly value: "freedraw";
    readonly key: readonly ["p", "x"];
    readonly numericKey: "7";
    readonly fillable: false;
}, {
    readonly icon: import("react/jsx-runtime").JSX.Element;
    readonly value: "text";
    readonly key: "t";
    readonly numericKey: "8";
    readonly fillable: false;
}, {
    readonly icon: import("react/jsx-runtime").JSX.Element;
    readonly value: "image";
    readonly key: null;
    readonly numericKey: "9";
    readonly fillable: false;
}, {
    readonly icon: import("react/jsx-runtime").JSX.Element;
    readonly value: "eraser";
    readonly key: "e";
    readonly numericKey: "0";
    readonly fillable: false;
}];
export declare const findShapeByKey: (key: string) => "text" | "line" | "ellipse" | "rectangle" | "diamond" | "image" | "selection" | "arrow" | "freedraw" | "eraser" | null;
