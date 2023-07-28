import { sanitizedDOM } from "../../helpers/sanitizedDOM"

export const ProjectDescription = ({description}:{description: string}) => {
    return (
        <p dangerouslySetInnerHTML={sanitizedDOM(description)}></p>
    )
}
