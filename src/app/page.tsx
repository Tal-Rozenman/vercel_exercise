import Image from "next/image";

export default function Home() {
  return (
<div className="flex items-center justify-between mt-12">
    <div className="text-xl flex flex-col gap-12">
        <a href="/answers/1">Question 1</a>
        <a href="/answers/2">Question 2</a>
        <a href="/answers/3">Question 3</a>
        <a href="/answers/4">Question 4</a>
        <a href="/answers/5">Question 5</a>
    </div>
    <div className="text-xl flex flex-col gap-12">
        <a href="/answers/6">Question 6</a>
        <a href="/answers/7">Question 7</a>
        <a href="/answers/8">Question 8</a>
        <a href="/answers/9">Question 9</a>
        <a href="/answers/10">Question 10</a>
    </div>
</div>
  );
}
