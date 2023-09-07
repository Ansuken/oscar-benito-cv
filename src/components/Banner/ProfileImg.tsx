export const ProfileImg = ({src}: {src: string}) => {
    return (
        <img className="profile-pic" src={`./images/${src}`} />
    )
}