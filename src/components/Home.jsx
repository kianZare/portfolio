function Home() {
  return (
    <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 h-40 w-40 bg-red-500">
      <Card />
    </div>
  );
}

export default Home;

function Card() {
  return (
    <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 h-24 w-52 bg-blue-500 text-4xl p-8 rounded-full"></div>
  );
}
