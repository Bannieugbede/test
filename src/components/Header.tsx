import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="flex justify-between text-white items-center gap-4">
      <h1 className="text-xl md:text-2xl font-bold">Ticket</h1>
      <nav className=" hidden md:flex">
        <ul className="flex items-center gap-4">
          <li className=" hover:border-b border-primary transition-colors duration-500">
            <a href="#">Home</a>
          </li>
          <li className=" hover:border-b border-primary transition-colors duration-500">
            <a href="#">Upcoming Events</a>
          </li>
          <li className=" hover:border-b border-primary transition-colors duration-500">
            <a href="#">Pricing</a>
          </li>
          <li className=" hover:border-b border-primary transition-colors duration-500">
            <a href="#">How it works</a>
          </li>
        </ul>
      </nav>
      <Button size={"lg"}>Contact us</Button>
    </header>
  );
}
