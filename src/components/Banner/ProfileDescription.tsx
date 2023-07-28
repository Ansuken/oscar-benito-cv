import { sanitizedDOM } from "../../helpers/sanitizedDOM"

export const ProfileDescription = ({description}:{description: string}) => {
    return (
        <div dangerouslySetInnerHTML={sanitizedDOM(description)}></div>
    )
}
