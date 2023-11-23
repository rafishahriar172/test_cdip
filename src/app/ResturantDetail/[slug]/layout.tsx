import Header from "../components/Header"
import Navbar from "../components/Navbar"

export default function RestaurantLayout({
    children,
    params
  }: {
    children: React.ReactNode;
    params:{slug:string}

  }) {
    console.log("restaurant_",params);
    return(
        <main className="bg-gray-100 min-h-screen w-screen">
        <main className="max-w-screen-2xl m-auto bg-white">
          {/* NAVBAR */}
          {/* <Navbar/> */}
          {/* NAVBAR */} {/* HEADER */}
          <Header title={params.slug}/>
          {/* HEADER */} {/* DESCRIPTION PORTION */}
            {children}
        </main>
        </main>
    )
}