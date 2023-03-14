let link: HTMLLinkElement | undefined = document.getElementById("theme") as HTMLLinkElement;

export const setTheme = (theme: string) => {
    link!.href = `/themes/${theme}.css`;
}