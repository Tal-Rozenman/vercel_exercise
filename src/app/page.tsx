import Image from "next/image";

export default function Home() {
  return (
    <div className="items-center justify-between">
      <h1 className="text-4xl">Tal</h1>
      <ol>
        <a href="/answers/1"><li>Question 1</li></a>
        <a href="/answers/2"><li>Question 2</li></a>
      </ol>
    </div>
  );
}
