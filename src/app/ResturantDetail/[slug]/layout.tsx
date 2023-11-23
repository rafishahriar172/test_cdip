import Header from "../components/Header"
import Navbar from "../components/Navbar"

export default function RestaurantLayout({
    children,
    params
  }: {
    children: React.ReactNode;
    params:{slug:string}

  }) {
    return(
        <main className="bg-gray-100 min-h-screen w-screen">
        <main className="max-w-screen-2xl m-auto bg-white">

          <Header title={params.slug}/>

            {children}
        </main>
        </main>
    )
}