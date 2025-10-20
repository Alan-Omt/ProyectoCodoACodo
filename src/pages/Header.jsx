import Nav from "../components/Nav";

export default function Header() {
  return (
    <>
    <header style={{
      backgroundColor: "#4CAF50",
      padding: "10px",
      textAlign: "center",
      color: "white"
    }}>
      <h1>Tienda Online</h1>
    </header>
    <Nav/>
    </>
  );
}
