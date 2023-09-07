import { Link } from "..";

interface Props {
    gitUrl?: string;
    liveUrl?: string;
}
export const CardFooter = ({gitUrl, liveUrl}: Props) => {
    return (
        <>
            <div className="project-links">
                {
                    gitUrl && (
                        <>
                            <Link url={gitUrl} text="Github"/>
                        </>
                    )
                }
                {
                    liveUrl && (
                        <>
                            <Link url={liveUrl} text="Live"/>
                        </>
                    )
                }
            </div>
        </>
    )
}
