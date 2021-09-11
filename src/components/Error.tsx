
interface ErrorProps {
    text: string
}
const Error = (props: ErrorProps) => {
    return (
        <div>

            <p className="red darken-4 error"> {props.text}</p>
        </div>
    )
}

export default Error
