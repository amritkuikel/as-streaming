import HorizontalList from "./components/HorizontalList";

export default function Popular() {
  return (
    <div className="mt-5 md:mt-10  px-5 flex flex-col items-start gap-5 mx-[5vw]" style={{backgroundImage:`url('/assets/bg/bg5.jpg')`}}>

      <div className="flex justify-center items-center gap-5">
        <h2 className="font-semibold text-2xl">Upcoming</h2>
      </div>

      <div className="w-full overflow-hidden">
        <HorizontalList />
      </div>

    </div>
  )
}