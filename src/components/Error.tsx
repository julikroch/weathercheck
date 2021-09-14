type ErrorProps = {
    text: string
}
const Error = ({ text }: ErrorProps) => (
    <div>
        <p className='red darken-4 error'> {text}</p>
    </div>
)

export default Error
