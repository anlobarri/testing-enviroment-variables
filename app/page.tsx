export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-2">
      <h1>Current Environment:</h1>
      <p>{process.env.VERCEL_ENV}</p>


      <h2>Vercel URL:</h2>
      <p>{process.env.VERCEL_URL}</p>
      


      <h2>Current Branch:</h2>
      <p>{process.env.VERCEL_BRANCH_URL}</p>
    </div>
  )
}
