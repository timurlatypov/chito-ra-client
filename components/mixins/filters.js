export const filters = {
    filters: {
        formatDigits(value) {
            let str  = value.toString();
            return str.replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/gm, ' ');
        },
        formatTitle(value) {
            let str =  value.toLowerCase();
            return str.charAt(0).toUpperCase() + str.slice(1);
        }
    }
}