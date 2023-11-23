export default function Description({descriptions}:{descriptions:string}) {

    return (
      <>
         <div className="mt-4">
          <p className="text-lg font-light">
            {descriptions}
          </p>
        </div>
      </>
    );}