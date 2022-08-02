import { loginEndpoint } from "../spotify";

export default function Login() {
  return (
    <div className="flex flex-col justify-center align-center m-5 gap-10">
      <p className=" text-lg text-center font-bold">
        First, You need to login to your spotify ..{" "}
      </p>
      <div className="flex justify-center align-baseline gap-10">
        <a
          href={loginEndpoint}
          className="rounded bg-dark-blue px-5 py-2 text-white text-center flex flex-col gap-2"
        >
          <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
            alt="logo-spotify"
            className="w-32"
          />
          <p className="text-xl font-bold">Log In</p>
        </a>
      </div>
    </div>
  );
}
