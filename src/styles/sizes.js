export default {
    up(size) {

    },
    down(size) {
        const sizes = {
            xxs: "369.98px",
            xs: "575.98px",
            sm: "767.98px",
            md: "991.98px",
            lg: "1199.98px",
            xl: "1399.98px"
        }
        return `@media (max-width: ${sizes[size]})`
    }
}