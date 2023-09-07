import { sanitizedDOM } from "../../../helpers/sanitizedDOM"

export const CardDescription = ({description}:{description: string}) => {
    return (
        <p dangerouslySetInnerHTML={sanitizedDOM(description)}></p>
    )
}
