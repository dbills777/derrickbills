import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import purge from "@erbelion/vite-plugin-laravel-purgecss";

export default defineConfig({
    plugins: [
        laravel({
            input: "resources/js/app.jsx",
            ssr: "resources/js/ssr.jsx",
            refresh: true,
            
        }),
        purge({
            content: [
                "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
                "./storage/framework/views/*.php",
                "./resources/views/**/*.blade.php",
                "./resources/js/**/*.jsx",
                "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
                
            ],
            safelist: [
                "bg-primary",
                "bg-secondary",
                "bg-destructive",
                "bg-muted",
                "bg-accent",
                "bg-popover",
                "bg-card",
                "bg-input",
                "bg-ring",
                "bg-background",
                "bg-foreground",
                "text-primary",
                "text-secondary",
                "text-destructive",
                "text-muted",
                "text-accent",
                "text-popover",
                "text-card",
                "text-input",
                "text-ring",
                "text-background",
                "text-foreground",
                "border-primary",
                "border-secondary",
                "border-destructive",
                "border-muted",
                "border-accent",
                "border-popover",
                "border-card",
                "border-input",
                "border-ring",
                "border-background",
                "border-foreground",
                "ring-primary",
                "ring-secondary",
                "ring-destructive",
                "ring-muted",
                "ring-accent",
                "ring-popover",
                "ring-card",
                "ring-input",
                "ring-ring",
                "ring-background",
                "ring-foreground",
            ],
        }),
        react(),
    ],
    // diable sourcemaps
    build: {
        sourcemap: false,
    },
});
