interface Props {
    url: string;
    text: string;
}
export const Link = ({url, text}: Props) => {
    return (
        <a href={url} target="_blank">{text}</a>
    )
}
