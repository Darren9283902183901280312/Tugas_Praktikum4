import Image from "next/image";

const contacts = [
  {
    name: "WhatsApp",
    detail: "No: +62 865-9138-016",
    icon: "/img/WhatsApp.webp",
  },
  {
    name: "Email",
    detail: "darrensebastian65@gmail.com",
    icon: "/img/Gmail.webp",
  },
  {
    name: "Instagram",
    detail: "Name: darren_mms",
    icon: "/img/instagram.webp",
  },
  {
    name: "Genshin Impact",
    detail: "UID: 865490602",
    icon: "/img/Genshin.webp",
  },
  {
    name: "Mobile Legends",
    detail: "ID: 652037030 (8606)",
    icon: "/img/MLBB.webp",
  },
  {
    name: "HoYoLAB",
    detail: "Id: 255850006",
    icon: "/img/HoyoLAB.webp",
  },
];

export default function Contact() {
  return (
    <section className="contact-page">
      <div className="contact-grid">
        {contacts.map((contact) => (
          <div className="contact-card" key={contact.name}>
            <Image src={contact.icon} alt={contact.name} width={48} height={48} className="contact-icon"/>

            <div className="contact-info">
              <h2>{contact.name}</h2>
              <p>{contact.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
