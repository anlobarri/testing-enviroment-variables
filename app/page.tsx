export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-2">
      <h1 className="text-2xl font-bold">Current Environment:</h1>
      <p>{process.env.VERCEL_ENV}</p>


      <h2 className="text-xl font-semibold">Vercel URL:</h2>
      <p>{process.env.VERCEL_PROJECT_PRODUCTION_URL}</p>
      


      <h2 className="text-xl font-semibold">Current Branch:</h2>
      <p>{process.env.VERCEL_BRANCH_URL}</p>
    </div>
  )
}
