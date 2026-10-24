import Image from "next/image";

export default function Home() {
  return (
    <section className="home">
      <h1 className="halow">YAHALLO!</h1>
      <p className="welcome">WELCOME TO MY WEBSITE!</p>

      <div className="stickers">
        <Image src="/img/Meruem.webp" alt="Meruem" width={180} height={225} />
        <Image src="/img/Netero2.jpg" alt="Netero" width={180} height={225} />
      </div>
    </section>
  );
}