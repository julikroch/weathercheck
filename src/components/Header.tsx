type HeaderProps = {
    title: string
}

const Header = ({ title }: HeaderProps) => (
    <nav>
        <div className="nav-wrapper light-blue darken-2">
            <a href="#!" className="brand-logo">{title}</a>
        </div>
    </nav>
)

export default Header