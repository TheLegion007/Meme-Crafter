const image_header = "https://img.freepik.com/free-vector/funny-cartoon-face-design_1095-47.jpg"

export default function Header() {
    return (
        <header className="header">
            <img  src={image_header} />
            <h1> Generate Your Meme ! </h1>
        </header>
    )
}               