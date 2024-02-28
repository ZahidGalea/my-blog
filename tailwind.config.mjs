/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                'theme-4': '#211951',
                'theme-3': '#836FFF',
                'theme-2': '#15F5BA',
                'theme-1': '#F0F3FF',
                'theme-0': '#f1f5f9',
                // Agrega los colores personalizados que necesites
            },
        },
    },
    plugins: [],
    darkMode: 'selector',
}
