import { ReactElement, useEffect, useRef } from "react";
import { DynamicStyleInjectorContainerProps } from "../typings/DynamicStyleInjectorProps";

export function DynamicStyleInjector({
    content,
    styleTemplate
}: DynamicStyleInjectorContainerProps): ReactElement {

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const wrapper = containerRef.current;
        const styleValue = styleTemplate?.value;

        if (wrapper && styleValue) {
            const firstChild = wrapper.firstElementChild as HTMLElement | null;

            if (firstChild) {
                // ✅ Apply style to first child (your container76 case)
                firstChild.style.cssText = styleValue;
            } else {
                // ✅ Fallback to wrapper
                wrapper.style.cssText = styleValue;
            }
        }
    }, [styleTemplate?.value]);

    return (
        <div ref={containerRef}>
            {content}
        </div>
    );
}