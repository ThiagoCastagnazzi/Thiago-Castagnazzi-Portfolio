export default function BackgroundCircles() {
  return (
    <div className="relative flex justify-center items-center mt-5">
      <div className="absolute border [#333] rounded-full h-[300px] w-[300px] mt-52 animate-ping" />
      <div className="absolute border [#333] rounded-full h-[450px] w-[450px] mt-52 animate-ping" />
    </div>
  );
}
