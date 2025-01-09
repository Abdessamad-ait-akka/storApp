import { useState } from "react";
import "../style/styleStor.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const Connexion = (e) => {
        e.preventDefault();
        console.log({ email, password });
    };

    return (
        <>
            <div id="form1">
                <form onSubmit={Connexion}>
                    <h1 id="vous">Connectez-vous</h1>
                    <div>
                        <FontAwesomeIcon icon={faEnvelope} className="icon" />
                        <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Votre Email" required />
                    </div>
                    <div>           
                        <FontAwesomeIcon icon={faLock} className="icon" />
                        <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Votre Password" required />
                    </div>
                    <button type="submit" id="submit">Se connecter</button>
                </form>
            </div>
        </>
    );
}

export default Login;
