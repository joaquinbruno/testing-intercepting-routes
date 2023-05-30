import Link from "next/link"

const notFound = () => {
  return (
    <>
        <div className=" mt-[50vh] flex flex-col justify-center text-center ">
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <Link href={"/"} className="bg-slate-950 m-auto text-white">Back to the home!</Link>
        </div>
    </>
  )
}

export default notFound