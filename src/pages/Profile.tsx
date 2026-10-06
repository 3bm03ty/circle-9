import useFetch from "../hooks/useFetch";

export default function Profile() {
  const posts = useFetch();

  console.log(posts);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Profile</h1>
    </div>
  );
}
