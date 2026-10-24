"use client";

import { useState } from "react";
import Link from "next/link";

const hobbyData: Record<string, string[]> = {
  anime: [
    "One piece",
    "Mushoku tensei",
    "Overlord",
    "Black Clover",
    "Evangelion",
    "Kimi no na wa",
    "Koe no katachi",
    "Blue lock",
    "Nanatsu no taizai S1&2",
    "Fire force s1",
    "Atack on titan",
    "Shadow in eminance",
    "Hell paradise",
    "Jujutsu kaisen",
    "Masamunekun no revenge",
    "Tokyo revenger",
    "Toaru kagaku no railgun",
    "Toaru majutsu no index I&II",
    "Toaru kagaku no accelerator",
    "Kiseijuu (parasyte)",
    "Bakemonogatari",
    "Elfen lied",
    "Horimiya s1",
    "Hataraku maou sama s1&2",
    "Rent a girl friend",
    "Zoom 100",
    "Assasination classroom",
    "Classroom of elite",
    "Ballroom",
    "Konosuba",
    "Re:Zero",
    "Boku no hero academia s1,2,3,4,5,6,7,8",
    "God of high school",
    "The misfit of Demon king academy s1",
    "Danmachi s1,2,3",
    "Dragon ball",
    "Jojo",
    "Bocchi the rock",
    "Vivy : Fluorite eye's song",
    "Death note",
    "One punch man",
    "Mob psycho 100",
    "Danganropa",
    "Naruto",
    "Fate heaven feel",
    "Fate stay night",
    "Fate zero",
    "Vinland saga",
    "Chainsaw man",
    "Dororo",
    "Inuyashiki",
    "Kaguya sama",
    "Darling in the franxx",
    "Stein gate",
    "Render summer time",
    "The angel next door spoil me rotten",
    "Code geass",
    "Kimetsu no yaiba",
    "Mashle",
    "Tonikaku kawai s1",
    "Oshi no ko",
    "Spy x family",
    "Tate no yusha",
    "The fruit of evolution",
    "Dr stone s1&2",
    "Tensei shitarra slime datta ken",
    "Boku dake ga inai machi",
    "Cyberpunk egderunner",
    "Hunter x hunter",
    "Sword art online",
    "Akame ga kill",
    "Noragami",
    "Weathering with you",
    "Oosama rangking s1",
    "Puella Magi Madoka Magica",
    "Fruit basket",
    "Your lie in april",
    "Clannad",
    "Isekai ojisan",
    "Romantic killer",
    "No game life",
    "Shangatsu no lion",
    "Oregairu",
    "Charlotte",
    "Chuunibyou",
    "Guren lagan",
    "Sheshun buta yarou",
    "Death parade",
    "Suzume",
    "Date a live", 
    "Sakurasou",
    "Danshi koukosei",
    "Trigun stampade",
    "RagnaCrimson",
    "Engage kiss",
    "Seiken gakuen ni makentsukai",
    "Hametsu nooukoku",
    "Kimi no koto ga daisuki",
    "Undead unluck",
    "Highschool of the dead",
    "Highschool Dxd S1 ",
    "Pluto",
    "Mahou Shoujo Ni Akogareta",
    "Sousou No Frieren",
    "Hajime no ippo",
    "Solo Leveling",
    "Ninja kamui",
    "Bucchigiri",
    "Tsuki ga michibiku isekai douchuu" ,
    "Shangiri La frontier",
    "Roshidere",
    "Shiki",
    "Kill la kil",
    "Beastar",
    "Call of the night",
    "Saekano",
    "Kaiju no-8",
    "Bleach" ,
    "Shika noko",
    "Inukai Dog",
    "Chikyu no undou; the movement of earth orb" ,
    "Sakamoto days",
    "Lol",
    "The fable",
    "Look back",
    "Angel denshi",
    "Otonari no tenshi",
    "Dandandan",
    "Violet evergarden",
    "Suzumiya haruhi",
    "Perfect blue",
    "Hajime no gal",
    "Kusuria no hito goro",
    "Uma musume",
    "Takopi",
    "Mirai nikki",
    "86",
    "Mha: vilgante",
    "To be hero X",
    "Hyakuemmu",
    "Takkopi No genzai",
    "Mirai Nikki",
    "Uma Musume s1-s4",
    "Tomodachi Game",
    "Kore wa zombie desu ka?",
    "Gachiakuta",
    "Kuroko no basket",
    "Sonny Boy",
    "Guilty Crown",
    "Youjo Senki",
    "Another",
    "Shiki",
    "Tower of god",
    "Kaori Hana Wa Rin To Saku",
  ],
  gaming: [
    "Genshin Impact",
    "Summoner War",
    "Mobile Legends",
    "Minecraft",
    "Valorant",
    "Counter Strike 2",
    "Stardew Valley",
    "Terraria",
    "Last Day On Earth Survival",
    "Resident Evil VI",
    "Roblox",
    "Risk Of Rain II",
    "BTD 6",
    "OSU",
    "Project Zomboid",
    "Killing Floor 2",
    "Albion Online",
    "Borderlands 2",
    "Deep Rock Galatic",
    "Garry's Mod",
    "L4D2",
    "Hades",
    "Doki Doki Literature Club",
    "POE",
    "R.E.P.O",
    "Portal 2",
  ],
  music: [
    "Golden Hour",
    "Stressed Out",
    "Heathens",
    "There's Nothing Holding Me Back",
    "Treat You Better",
    "If I Can,t Have You",
    "Senorita",
    "Sailor Song",
    "Take Me To Church",
    "Drunk Text",
    "Yellow",
    "Runaway",
    "DayLight",
    "Faded",
    "Thunder",
    "Bad Liar",
    "Paradise",
    "Yellow",
    "Driver lisience",
    "Something Just Like This",
    "Rolling The Deep",
    "Easy On Me",
    "Someone Like You",
    "As It Was",
    "The Real Slim Shady",
    "Without Me - Eminem",
    "Without Me - Hashley",
    "venom",
    "7 Year",
    "A Thousan Year Old",
    "Sugar",
    "Animal",
    "Roar",
    "Firework",
    "FlashLight",
    "Price Tag",
    "Somewhere Only We Know",
    "Night Changes",
    "What Makes You Beautiful",
    "History",
    "Drag Me Down",
    "One Thing",
    "18",
    "Story Of My Life",
    "Best Song Ever",
    "Live While We're Young",
    "Perfect",
    "Im The One",
    "Stay",
    "Im Sorry",
    "Payphone",
    "Grenade",
    "When I Was Your Man",
    "Die With A Smile",
    "Judas",
    "Tuka Donca",
    "Talking To The Moon",
    "Good Morning Morio Cho!",
    "Bloody Steam",
    "The Cruel Angle Thesis",
    "Idol",
    "Tabun",
    "Kaibutsu",
    "Haru",
    "Oz",
    "We Are",
    "Don't Wanna Know",
    "Orange 7",
    "Nanairo Symphony",
    "Hikaru Naru",
    "Gurenge",
    "Zankyo Sanka",
    "This Game",
    "Highest",
    "Racing Into The Night",
    "Blue Bird",
  ],
};

const titles: Record<string, string> = {
  anime: "My Anime List",
  gaming: "My Games List",
  music: "My Music List",
};

export default function HobbyDetail({category,}: {category?: string;}) {
  const selected = category?.toLowerCase();
  const items = selected ? hobbyData[selected] : undefined;
  const [search, setSearch] = useState("");

  const filteredItems = (items || [])
    .map((item, index) => ({ item, number: index + 1 }))
    .filter(({ item }) =>
      item.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <section className="hobby-layout">
      <aside className="hobby-sidebar">
        <h2>My Hobby</h2>
        <Link href="/hobby/anime" className={`hobby-button ${selected === "anime" ? "active" : ""}`}>Anime</Link>
        <Link href="/hobby/gaming" className={`hobby-button ${selected === "gaming" ? "active" : ""}`}>Gaming</Link>
        <Link href="/hobby/music" className={`hobby-button ${selected === "music" ? "active" : ""}`}>Music</Link>
      </aside>

      <div className="hobby-content">
        {!selected ? (
          <div className="hobby-empty">
            <h1>Kira Yoshikage</h1>
            <p>Watashi no na wa Kira Yoshikage. Renrei sanjyuu sansai. Jitaku wa Morioh-cho hokuto no bu no bessojidai ni ari, kekkon wa shiite-inai, Shigoto wa Kame-yu chen-ten no kai sha-in de, maiinichi osokuto mo yoru hachii-ji made ni wa kitakusuru. Tabaco-o wa sumanai, sake wa tashinamu-tedo, yoru juu-ichi ji ni wa toko nitsukii, kanarazu hajii-jikan wa suii-min o toru yo-o ni shiiteiru. Neru mae ni at-ta-kae miruuku o nomi ni-juu pun hodo no suutorechi de karada o homu-shite kara toko nitsuku-to hodon do asa made jukusui-sa. Akanbo no yo ni hiro ya suutoresu o noku sazu nii asa me o samaserunda. Kenko-o shintan de mo ijyo nashito iwaretaiyo..</p>
          </div>
        ) : !items ? (
          <div className="hobby-empty">
            <h1>Kategori tidak ditemukan</h1>
            <p>Rawr, Megumi is a po</p>
          </div>
        ) : (
          <>
            <h1>{titles[selected]}</h1>

            <input type="text" className="hobby-search" placeholder={`Cari ${selected}...`} value={search} onChange={(e) => setSearch(e.target.value)}/>
            <div className="hobby-table-container">
              <table className="hobby-table">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Name</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredItems.map(({ item, number }) => (
                    <tr key={`${item}-${number}`}>
                      <td>{number}</td>
                      <td>{item}</td>
                    </tr>
                  ))}

                  {filteredItems.length === 0 && (
                    <tr>
                      <td colSpan={2} className="no-results">
                        Daftar tidak ditemukan.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
