export default function Navigation(){
    const navItems = ['home','shop','about','contact']
    return (
        <nav className="navigation">
            <ul className="navigation__list">
                {
                    navItems.map((item, index) => <li key={index} className="navigation__item">{item}</li>)
                }
            </ul>
        </nav>
    )
}
