export function convertISOToHuman(ISODate: string): string {
    const date = new Date(ISODate);
    return `${date.getDate()}. ${date.getMonth() + 1}. ${date.getFullYear()}`;
}
