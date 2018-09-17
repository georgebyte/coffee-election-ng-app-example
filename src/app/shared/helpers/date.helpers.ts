export function convertISOToHuman(ISODate: string): string {
    const date = new Date(ISODate);
    return `${date.getDay()}. ${date.getMonth()}. ${date.getFullYear()}`;
}
