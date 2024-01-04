export default function Link({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <a
            className="text-primary-background border-[1px] p-1 rounded-md hover:bg-foreground/10 duration-250"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
        >{children}</a>
    );
}