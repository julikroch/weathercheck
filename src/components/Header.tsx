interface HeaderProps {
    title: string
}

const Header = (props: HeaderProps) => (
    <nav>
        <div className="nav-wrapper light-blue darken-2">
            <a href="#!" className="brand-logo">{props.title}</a>
        </div>
    </nav>
)

export default Header