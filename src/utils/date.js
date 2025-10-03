export function formatDateLongMN(date) {
    return date.toLocaleDateString("mn-MN", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}
