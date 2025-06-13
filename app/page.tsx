export default function HomePage() {
  return (
    // <div className="flex flex-col items-center justify-center h-screen gap-2">
    //   <h1 className="text-2xl font-bold">Current Environment:</h1>
    //   <p>{process.env.VERCEL_ENV}</p>


    //   <h2 className="text-xl font-semibold">Vercel URL:</h2>
    //   <p>{process.env.VERCEL_PROJECT_PRODUCTION_URL}</p>
      


    //   <h2 className="text-xl font-semibold">Current Branch:</h2>
    //   <p>{process.env.VERCEL_BRANCH_URL}</p>
    // </div>
    <div className="flex flex-col items-center justify-center h-screen gap-2">
      {
        process.env.VERCEL_ENV === "production" ? (
          <p>Estas en Producción. Esta es tu URL: {process.env.VERCEL_PROJECT_PRODUCTION_URL}</p>
        ) : (
          <p>Estas en Preview. Esta es tu URL: {process.env.VERCEL_BRANCH_URL}</p>
        )
      }
    </div>
  )
}
