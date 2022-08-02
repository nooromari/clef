import { loginEndpoint } from "../spotify";

export default function Login() {
  return (
    <div className="">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt="logo-spotify"
        className="logo"
      />
      <a href={loginEndpoint}>
        <div className=" bg-dark-blue px-10 py-3">LOG IN</div>
      </a>
    </div>
  );
}