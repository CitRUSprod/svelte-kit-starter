module.exports = {
    mode: "jit",
    plugins: [require("daisyui")],
    purge: ["src/**/*.{html,svelte}"],
    daisyui: {
        logs: false
    }
}
