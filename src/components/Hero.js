import ZipInput from "../components/ZipInput";

export default function Hero ({ onSubmit }) {
  return (

    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Create a custom playlist of all artists coming to your town this week!
        </h1>
        <p className="mt-4 text-lg leading-8 text-gold">
          Enter your zip code to begin creating your playlist.
        </p>
        <div className="mt-2 flex items-center justify-center gap-x-6">
          <ZipInput onSubmit={onSubmit}/>
        </div>
      </div>
    </div>

  );
};