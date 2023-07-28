interface Props {
    img: string;
    name: string;
}
export const ProjectImage = ({img, name}: Props) => {
    return (
        <img className="project-img" src={img} alt={name}/>
    )
}
