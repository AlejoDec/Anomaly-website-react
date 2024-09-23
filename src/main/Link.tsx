import { EVENTS } from './consts'

function navigate(href: string) {
    window.history.pushState({}, '', href)
    const navEvent = new Event(EVENTS.PUSHSTATE)
    window.dispatchEvent(navEvent)
}

interface LinkProps {
    target?: string;
    to: string;
    className?: string;
    children: React.ReactNode;
}

export function Link ({ target, to, className, ...props}: LinkProps) {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        
        const isMainEvent = e.button === 0 // Ignorar clicks menos al principal
        const isModifiedEvent = e.metaKey || e.altKey || e.ctrlKey || e.shiftKey // Click modificado
        const isManagableEvent = target === undefined || target === null || target === '_self' // Click manejable
        
        if (isMainEvent && isManagableEvent && !isModifiedEvent) {
            e.preventDefault()
            navigate(to)
        }

    }

    return <a onClick={handleClick} href={to} target={target} className={className} {...props}></a>
}