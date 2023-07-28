import { sanitizedDOM } from "../../helpers/sanitizedDOM"

export const JobDescription = ({description}:{description: string}) => {
    return (
        <p dangerouslySetInnerHTML={sanitizedDOM(description)}></p>
    )
}
