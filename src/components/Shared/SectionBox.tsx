interface Props {
    style: string;
    children: JSX.Element | JSX.Element[]
}
export const SectionBox = ({style, children}: Props) => {
    return (
        <>
            <div className={style}>
                <div className="container py-5">
                    {children}
                </div>
            </div>
        </>
    )
}
