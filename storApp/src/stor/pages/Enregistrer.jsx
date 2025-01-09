import { useState } from "react";
import "../style/styleStor.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faPhone, faLock } from "@fortawesome/free-solid-svg-icons";

function Enregistrer() {
    const [nom, setNom] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [password, setPassword] = useState('');
  
    const Ajouter = (e) => {
        e.preventDefault();
        const objet = { nom, email, telephone, password };
        console.log(objet);
        setNom("");
        setEmail("");
        setTelephone("");
        setPassword("");
    };

    return (
        <>
            <div id="form1">
                <form onSubmit={Ajouter}>
                    <h1 id="vous">Enregistrez-vous</h1>
                    <div>
                        <FontAwesomeIcon icon={faUser} className="icon" />
                        <input type="text" onChange={(e) => setNom(e.target.value)} placeholder="Votre nom et prénom" required />
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faEnvelope} className="icon" />
                        <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Votre Email" required />
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faPhone} className="icon" />
                        <input type="tel" onChange={(e) => setTelephone(e.target.value)} placeholder="Votre téléphone" required />
                    </div>
                    <div>           
                        <FontAwesomeIcon icon={faLock} className="icon" />
                        <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Votre Password" required />
                    </div>
                    <button type="submit" id="submit">Enregistrer</button>
                </form>
            </div>
        </>
    );
}

export default Enregistrer;
