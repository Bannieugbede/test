import { Header } from "@/components/Header";
import { SignupForm } from "@/components/signup-form";

export default function Home() {
  return (
    <div className=" relative min-h-svh font-sans bg-black">
      <img
        src="/placeholder.jpg"
        alt="Image"
        className="absolute inset-0 indent-0 h-full w-full object-cover brightness-[0.2] "
      />
      <div className=" absolute  inset-0 px-4 md:px-8 py-4 max-w-7xl mx-auto z-10 h-full ">
        <Header />
        <main className="flex text-white my-8 md:my-20 gap-4 md:gap-8 items-center">
          <div className="flex-1 max-w-5xl">
            <h1 className="text-3xl md:text-7xl font-bold leading-relaxed">
              Your <span className="text-primary">Front-Row</span> Pass to
              Unforgettable <span className="text-primary">Moments</span>
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque,
              quibusdam totam. Voluptatem doloremque voluptatum non magni, ipsam
              id quis nobis eligendi tenetur consequatur ipsum at amet,
              perferendis iste reiciendis cupiditate.
            </p>
          </div>
          <div className=" max-w-md w-full bg-gray-500 p-4 h-fit rounded-2xl">
            <SignupForm />
          </div>
        </main>
      </div>
    </div>
  );
}
