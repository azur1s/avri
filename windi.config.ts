import { defineConfig } from "vite-plugin-windicss";
import colors from "windicss/colors";

/**
 * @author Bluskript
 */
const cssh = (cssVariable: string) => {
    return ({ opacityVariable, opacityValue }: { opacityVariable: string; opacityValue: number }) => {
        if (opacityValue) return `rgba(var(--${cssVariable}), ${opacityValue})`;
        if (opacityVariable) return `rgba(var(--${cssVariable}), var(${opacityVariable}, 1))`;
        return `rgb(var(--${cssVariable}))`;
    };
}

export default defineConfig({
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                ...colors,
                primary: cssh("primary"),
                secondary: cssh("secondary"),
                mode: {
                    50: cssh("mode-50"),
                    100: cssh("mode-100"),
                    200: cssh("mode-200"),
                    300: cssh("mode-300"),
                    400: cssh("mode-400"),
                    500: cssh("mode-500"),
                    600: cssh("mode-600"),
                    700: cssh("mode-700"),
                    800: cssh("mode-800"),
                    900: cssh("mode-900"),
                },
            }
        }
    },
});
