interface Props {
    from: string;
    to: string | null;
}
export const JobDate = ({from, to}: Props) => {
    return (
        <small>{from} - {to || 'present'}</small>
    )
}
