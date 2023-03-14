import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import WindiCSS from "vite-plugin-windicss";
import Components from "unplugin-vue-components/vite";
import IconsResolver from "unplugin-icons/resolver";
import Icons from "unplugin-icons/vite";
import AutoImport from 'unplugin-auto-import/vite'
import { FileSystemIconLoader } from "unplugin-icons/loaders";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        WindiCSS(),
        vue(),
        AutoImport({
            imports: [
                "vue",
                "vue-router",
                "@vueuse/core",
                "@vueuse/head",
            ],
            resolvers: [
                IconsResolver({
                    componentPrefix: "icon",
                    enabledCollections: ["carbon", "mdi"],
                }),
            ],
            dts: "src/auto-imports.d.ts",
        }),
        Components({
            extensions: ["vue"],
            dts: true,
            include: [/\.vue$/, /\.vue\?vue/],
            resolvers: [
                IconsResolver({
                    customCollections: ["custom"],
                }),
            ],
        }),
        Icons({
            customCollections: {
                custom: FileSystemIconLoader("./public/icons/svg"),
            },
        }),
    ],
});
