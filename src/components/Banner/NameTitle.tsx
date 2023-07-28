interface Props {
    name: string;
    subject: string;
}
export const NameTitle = ({name, subject}: Props) => {
    return (
        <>
            <h1 className="name-title ob-gradient-background">{name}</h1>
            <p className="subject">{subject}</p>
        </>
    )
}
