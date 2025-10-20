import React from 'react'

export default function Gallery() {
  const url = [
    "https://cards.scryfall.io/normal/front/1/f/1ffe5f80-a2ac-41b8-8fce-fd3485643557.jpg?1599710025",
    "https://cards.scryfall.io/normal/front/c/7/c7710eb5-c56a-437b-8847-2a829c404d47.jpg?1599710042",
    "https://cards.scryfall.io/normal/front/2/6/2626d4c9-fcef-4057-a154-7d987a4a4b84.jpg?1599710057",
    "https://cards.scryfall.io/normal/front/2/d/2daa3621-8a2c-4b4b-87ac-f981192a0567.jpg?1675957256",
    "https://cards.scryfall.io/normal/front/a/1/a16fabbe-4557-4067-b882-f2e5dbd8b458.jpg?1626099357",
    "https://cards.scryfall.io/normal/front/b/3/b378c8bf-85ed-4d28-aec9-4925d12bca4a.jpg?1599710077",
    "https://cards.scryfall.io/normal/front/1/6/1670393d-86f0-46fb-b577-f73a1da2a3ed.jpg?1682205808",
    "https://cards.scryfall.io/normal/front/c/0/c081e5cf-81e2-4afb-a912-8267de29e88d.jpg?1562202493",
    "https://cards.scryfall.io/normal/front/2/b/2be8d24e-1370-4e85-90f2-66b6d6e9c4a4.jpg?1562202498",
    "https://cards.scryfall.io/normal/front/4/6/46e6f50b-4b18-4aab-a7b0-869f25bc4c40.jpg?1599710135"
  ]
  return (
  <>
  <section style = {{
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    marginTop: "20px"
  }}>
    {url.map((img, posicion)=>(
      <img key={posicion} src={img} alt={`Imagen nro: ${posicion + 1}`} style={{width: "200px", height:"280px"}}/>
    ))}
  </section>
  </>
  )
}
