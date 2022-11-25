/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            backgroundImage: {
                'header': "url('asset/header.jpg')",
            }
        }
    },
    plugins: []
}
