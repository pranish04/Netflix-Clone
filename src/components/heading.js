export default function Heading(){
    return (
        <div className="heading">
        <nav>
            <img src="images/logo.png" className="logo"/>
            <div>
                <button>Sign In</button>
            </div>
        </nav>
        <div className="header">
            <h1>Unlimited movies, TV shows,<br/>and more</h1>
            <h2><b>Plans now start at USD2.99/month.</b></h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            <form className="email">
                <input type="email" placeholder="Email address" required/>
                <button type="submit"><b>Get Started</b></button>
            </form>
        </div>
    </div>
    )
}