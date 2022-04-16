import { Link, animateScroll as scroll } from "react-scroll";

import React from "react";
import { HiOutlineArrowSmDown } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import testImg from "../../resources/test.png";
import "./homePage.css";
function HomePage() {
    const [dimension, setDimension] = React.useState(window.innerWidth);
    React.useEffect(() => {
        function handleResize() {
            setDimension(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);

        return (_) => {
            window.removeEventListener("resize", handleResize);
        };
    });
    const [dropDownShowing, setDropDownShowing] = React.useState(false);

    return (
        <>
            <header>
                <h1>tcfPrep</h1>
                {dimension < 650 ? (
                    <div
                        className=" plus "
                        onClick={() => {
                            setDropDownShowing(!dropDownShowing);
                        }}
                    >
                        <p>Plus</p>
                        {dropDownShowing ? (
                            <ul className="ul">
                                <li>
                                    <Link
                                        offset={-50}
                                        smooth={true}
                                        to="entrainer"
                                    >
                                        je me prépare
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        offset={-50}
                                        smooth={true}
                                        to="conseils"
                                    >
                                        conseils pour tcf
                                    </Link>
                                </li>
                                <li>s'inscrire</li>
                                <li>login</li>
                            </ul>
                        ) : (
                            ""
                        )}
                    </div>
                ) : (
                    <ul>
                        <li className="hover-underline-animation">
                            <Link offset={-50} smooth={true} to="entrainer">
                                je me prépare
                            </Link>
                        </li>
                        <li className="hover-underline-animation">
                            <Link offset={-50} smooth={true} to="conseils">
                                conseils pour tcf
                            </Link>
                        </li>
                        <li className="hover-underline-animation">
                            s'inscrire
                        </li>
                        <li className="hover-underline-animation">login</li>
                    </ul>
                )}
            </header>
            <main>
                <h1>Se préparer au TCF</h1>
                <h2>
                    600 questions pour s'entraîner avant de passer le TCF (Test
                    de connaissance du français) avec notre simulateur gratuit,
                    sur ordinateur, tablette ou téléphone.
                </h2>
                <div className="buttons">
                    <Link
                        className="button"
                        offset={-50}
                        smooth={true}
                        to="entrainer"
                    >
                        S'entraîner
                    </Link>
                    <Link
                        className="button"
                        offset={-50}
                        smooth={true}
                        to="test"
                    >
                        Tester en condition réelle
                    </Link>
                </div>
                <div className="click-processed">
                    <div>
                        <p>Voir le simulateur</p>

                        <p className="small">
                            Faites défiler la page vers le bas
                        </p>
                    </div>
                    <HiOutlineArrowSmDown className="arrow" />
                </div>
            </main>

            <section id="entrainer" className="section">
                <div className="content">
                    <h1>
                        <span>01</span> S'entraîner au TCF
                    </h1>
                    <p>
                        Choisissez une série et répondez aux questions sans
                        limite de temps pour progresser à votre rythme, ou
                        entraînez-vous directement aux questions de grammaire et
                        de compréhension.
                    </p>
                    <hr />
                </div>
                <div className="grid">
                    <div className="card">
                        <h6 className="hover-underline-animation">
                            Série d'entrainement n°17
                        </h6>
                        <p className="hover-underline-animation">
                            Compréhension orale
                        </p>
                        <p className="hover-underline-animation">
                            Structure de la langue
                        </p>
                        <p className="hover-underline-animation">
                            Compréhension écrite
                        </p>
                    </div>
                    <div className="card">
                        <h6 className="hover-underline-animation">
                            Série d'entrainement n°17
                        </h6>
                        <p className="hover-underline-animation">
                            Compréhension orale
                        </p>
                        <p className="hover-underline-animation">
                            Structure de la langue
                        </p>
                        <p className="hover-underline-animation">
                            Compréhension écrite
                        </p>
                    </div>
                    <div className="card">
                        <h6 className="hover-underline-animation">
                            Série d'entrainement n°17
                        </h6>
                        <p className="hover-underline-animation">
                            Compréhension orale
                        </p>
                        <p className="hover-underline-animation">
                            Structure de la langue
                        </p>
                        <p className="hover-underline-animation">
                            Compréhension écrite
                        </p>
                    </div>
                    <div className="card">
                        <h6 className="hover-underline-animation">
                            Série d'entrainement n°17
                        </h6>
                        <p className="hover-underline-animation">
                            Compréhension orale
                        </p>
                        <p className="hover-underline-animation">
                            Structure de la langue
                        </p>
                        <p className="hover-underline-animation">
                            Compréhension écrite
                        </p>
                    </div>
                    <div className="card">
                        <h6 className="hover-underline-animation">
                            Série d'entrainement n°17
                        </h6>
                        <p className="hover-underline-animation">
                            Compréhension orale
                        </p>
                        <p className="hover-underline-animation">
                            Structure de la langue
                        </p>
                        <p className="hover-underline-animation">
                            Compréhension écrite
                        </p>
                    </div>
                </div>
            </section>

            <section id="test" className="section">
                <div className="flex">
                    <img className="img" src={testImg} alt="test" />
                    <div className="content">
                        <h1>
                            <span>02</span> Test en conditions réelles
                        </h1>
                        <p>
                            Vous vous sentez prêt ? Faites un test dans les
                            conditions réelles du TCF et évaluez vos résultats.
                            Faites le test autant de fois que vous voulez, c'est
                            gratuit.
                        </p>
                        <hr />
                        <p>
                            Afin de vous préparer au mieux au TCF, nous mettons
                            à votre disposition un test de 90 minutes qui réunit
                            les mêmes conditions que lors d'une session
                            officielle. Attention, les résultats obtenus ne
                            garantissent pas d'obtenir le même niveau au TCF
                            officiel, mais c'est l'entraînement idéal pour
                            réussir votre examen.
                        </p>
                        <button className="button">je suis pret!</button>
                    </div>
                </div>
                <hr />
            </section>
            <section className="section advice" id="conseils">
                <h4>Conseils pour l’ensemble des épreuves</h4>
                <h5>Avant l'examen</h5>
                <ol>
                    <li>
                        Informez-vous sur le support proposé dans le centre (sur
                        ordinateur ou sur papier), sur le déroulement des
                        épreuves, sur leur contenu, sur la durée de chaque
                        épreuve, sur le format de la feuille de réponses (cf.
                        manuel du candidat téléchargeable sur le site du CIEP :
                        https://www.france-education-international.fr/tcf-tout-public/documents-telechargeables)
                    </li>
                    <li>
                        Entraînez-vous à répondre aux questions en fonction du
                        support : cochez des cases sur une feuille de réponses
                        (sur papier) ou cliquez sur les boutons sur l’écran (sur
                        ordinateur).
                    </li>
                </ol>
                <h5>Pendant l’examen</h5>
                <ol>
                    <li>Lisez attentivement les consignes.</li>
                    <li>Répondez à toutes les questions.</li>
                    <li>Gérez bien votre temps !</li>
                </ol>
                <h4>Conseils pour l'épreuve de compréhension orale</h4>
                <h5>Composition et déroulé</h5>
                <ol>
                    <li>
                        Le début d’une question est indiqué au candidat par un
                        signal sonore.{" "}
                    </li>
                    <li>
                        Il existe plusieurs formats de questions, découvrez-les
                        dans nos entraînements au TCF.
                    </li>
                    <li>
                        La difficulté des questions est croissante et leur thème
                        change de l’une à l’autre.
                    </li>
                    <li>
                        Durant l’épreuve de compréhension orale, chaque question
                        a une durée déterminée, le passage à la question
                        suivante se fait automatiquement, sans votre
                        intervention. Vous devez attendre la fin de la question
                        en cours.
                    </li>
                </ol>
                <h5>Attention : </h5>
                <ul>
                    <li>
                        vous n’entendrez qu’une seule fois le document sonore et
                        la question.
                    </li>
                    <li>
                        vous entendrez la question <strong>après</strong> avoir
                        entendu le document sonore.
                    </li>
                    <li>
                        les questions ne sont pas écrites dans le livret du
                        candidat.
                    </li>
                </ul>

                <h4>Avant l'examen</h4>

                <ol>
                    <li>
                        Entraînez-vous à passer d’un thème à un autre et à
                        rester concentré durant 30 minutes.
                    </li>
                    <li>
                        Entraînez-vous à écouter et à comprendre des documents
                        audio avec une seule écoute.
                    </li>
                    <li>
                        Entraînez-vous à répondre à des questions posées après
                        une seule écoute d’un document audio.
                    </li>
                    <li>
                        Entraînez-vous à imaginer des paroles qui pourraient
                        être prononcées par des personnages présentés sur une
                        photo ou un dessin.
                    </li>
                    <li>
                        Pendant l’écoute d’un document audio, notez les mots et
                        les idées clés du document. Puis, peu à peu, cessez de
                        noter ces mots et idées clés, et exercez-vous à les
                        mémoriser. Dans la vie, vous n’avez pas toujours sur
                        vous de quoi noter (papier, stylo) ce que vous entendez.
                        Le jour de l’examen, non plus.
                    </li>
                    <li>
                        Pendant l’écoute d’un document audio, entraînez-vous à
                        imaginer quelles questions pourraient être posées sur ce
                        document.
                    </li>
                    <li>
                        Pendant l’écoute d’un document audio, entraînez-vous à
                        identifier rapidement la situation de communication :
                        qui parle à qui ? Pour quoi faire ?
                    </li>
                </ol>
                <h5>Pendant l'examen</h5>
                <ol>
                    <li>
                        Vous n’entendrez le document sonore et la question
                        qu’une seule fois : alors, écoutez bien.
                    </li>
                    <li>
                        Pour les exercices associés à la consigne « Écoutez le
                        document sonore et la question.», essayez de lire les
                        quatre choix de réponse avant l’écoute du document
                        sonore.
                    </li>
                </ol>
                <h4>
                    Conseils pour l'épreuve de maîtrise des structures de la
                    langue
                </h4>
                <h5>Grammaire et lexique</h5>
                <p>
                    Les exercices de cette épreuve sont de type exercice à trou.
                    La consigne écrite dans le livret du candidat est toujours
                    identique : choisissez la bonne réponse.{" "}
                </p>
                <h5>Avant l'examen</h5>
                <p>
                    Entraînez-vous aux exercices proposés : rappelez-vous, il
                    n’y a qu’une seule réponse possible.
                </p>
                <h5>Pendant l'examen</h5>
                <p>
                    C’est vous qui gérez votre temps. Vous pourrez revenir en
                    arrière. Si vous hésitez trop longtemps, passez à la
                    question suivante.{" "}
                </p>
                <h4>Conseils pour l'épreuve de compréhension écrite</h4>
                <h5>Composition et déroulé</h5>
                <p>
                    Les exercices proposés dans cette épreuve comportent
                    toujours :{" "}
                </p>
                <ul>
                    <li>un document à lire.</li>
                    <li>une question écrite sur le livret du candidat.</li>
                    <li>
                        4 choix de réponse écrits dans le livret du candidat.{" "}
                    </li>
                </ul>
                <p>
                    Ces exercices sont tous regroupés sous la consigne : « Lisez
                    les documents. Pour chaque question, choisissez la bonne
                    réponse et cochez une case sur la feuille de réponses. »
                </p>
                <h4>Avant l'examen</h4>
                <p>
                    Entraînez-vous aux différentes méthodes de lecture d’un
                    texte : repérer des mots clés, balayer un texte pour
                    retrouver une information précise, identifier le passage du
                    texte sur lequel porte la question, etc.
                </p>
                <h4>Pendant l'examen</h4>
                <ul>
                    <li>
                        C’est vous qui gérez votre temps. Vous pourrez revenir
                        en arrière. Si vous hésitez trop longtemps, passez à la
                        question suivante.
                    </li>
                    <li>
                        Lisez la question et les 4 choix de réponse avant de
                        lire le texte du document.
                    </li>
                </ul>
            </section>
        </>
    );
}

export default HomePage;
