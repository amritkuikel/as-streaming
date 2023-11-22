import HorizontalList from "./components/HorizontalList";

export default function Popular() {
  return (
    <div className="mt-5 md:mt-10 md:px-40 px-10 flex flex-col items-start gap-5">

      <div className="flex justify-center items-center gap-5">
        <h2 className="font-semibold text-2xl">Whats Popular</h2>
      </div>

      <div className="w-full overflow-hidden">
        <HorizontalList />
      </div>

    </div>
  )
}