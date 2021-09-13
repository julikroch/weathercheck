type ErrorProps = {
    text: string
}
const Error = ({ text }: ErrorProps) => {
    return (
        <div>
            <p className="red darken-4 error"> {text}</p>
        </div>
    )
}

export default Error
