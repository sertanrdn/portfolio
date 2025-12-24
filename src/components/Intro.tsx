import { introData } from "../data/intro";

export default function Intro() {
    return (
        <section id="intro">
            <h1>{introData.name}</h1>
            <h2>{introData.role}</h2>
            <p>{introData.description}</p>
            <a href={introData.cta.href}>{introData.cta.label}</a>
        </section>
    );
}