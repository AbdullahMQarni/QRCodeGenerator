import './Header.css'

export default function Header() {
    const title = ['The best', 'The easiest', 'Other is shit' ]

    function titleChanger(max) {
        return (
            Math.floor(Math.random() * (max + 1))
        )
    }

    return (
        <header>
            <div className="containerHeader">
                <h1 className="LOGO">QR Generator</h1>
                
                <h2 className='otherTitle'>{title[titleChanger(2)]}</h2>
            </div>
        </header>
    )
}