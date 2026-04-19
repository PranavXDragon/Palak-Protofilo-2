(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/cursor/CustomCursor.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const CustomCursor = ()=>{
    _s();
    const cursorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mouseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const animationFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomCursor.useEffect": ()=>{
            const updateMousePosition = {
                "CustomCursor.useEffect.updateMousePosition": (e)=>{
                    mouseRef.current = {
                        x: e.clientX,
                        y: e.clientY
                    };
                }
            }["CustomCursor.useEffect.updateMousePosition"];
            const updateCursorPosition = {
                "CustomCursor.useEffect.updateCursorPosition": ()=>{
                    if (!cursorRef.current) return;
                    // Smooth movement using lerp (linear interpolation)
                    const lerp = {
                        "CustomCursor.useEffect.updateCursorPosition.lerp": (start, end, factor)=>start + (end - start) * factor
                    }["CustomCursor.useEffect.updateCursorPosition.lerp"];
                    const currentX = parseFloat(cursorRef.current.style.transform.split('(')[1]) || 0;
                    const currentY = parseFloat(cursorRef.current.style.transform.split(',')[1]) || 0;
                    const targetX = mouseRef.current.x - 3; // Half of cursor-dot width
                    const targetY = mouseRef.current.y - 3;
                    const newX = lerp(currentX, targetX, 0.4);
                    const newY = lerp(currentY, targetY, 0.4);
                    cursorRef.current.style.transform = `translate3d(${newX}px, ${newY}px, 0)`;
                    animationFrameRef.current = requestAnimationFrame(updateCursorPosition);
                }
            }["CustomCursor.useEffect.updateCursorPosition"];
            window.addEventListener('mousemove', updateMousePosition);
            animationFrameRef.current = requestAnimationFrame(updateCursorPosition);
            return ({
                "CustomCursor.useEffect": ()=>{
                    window.removeEventListener('mousemove', updateMousePosition);
                    if (animationFrameRef.current) {
                        cancelAnimationFrame(animationFrameRef.current);
                    }
                }
            })["CustomCursor.useEffect"];
        }
    }["CustomCursor.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: cursorRef,
        className: "cursor-dot"
    }, void 0, false, {
        fileName: "[project]/src/components/cursor/CustomCursor.jsx",
        lineNumber: 46,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CustomCursor, "OsZmV+tX7RamrbAPVKycBrwGLzA=");
_c = CustomCursor;
const __TURBOPACK__default__export__ = CustomCursor;
var _c;
__turbopack_context__.k.register(_c, "CustomCursor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/cursor/CustomCursor.jsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/cursor/CustomCursor.jsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_components_cursor_CustomCursor_jsx_0y-o3y4._.js.map