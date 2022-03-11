import Layout from "../components/Layout";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function IntegracaoGithub() {
  const [user, setUser] = useState("LuciLua");
  const [dataUser, setDataUser] = useState({});

  // function getGithubProfile() {
  //   fetch(`https://api.github.com/users/${user}`)
  //     .then((jonson) => jonson.json())
  //     .then((data) => setDataUser(data));
  // }

  async function getGithubProfile() {
    const resp = await fetch(`https://api.github.com/users/${user}`)
    const data = await resp.json()
    setDataUser(data)
  }

  const style_btn_follow = {
    background: "#fffa",
    fontSize: "13px",
    padding: "2px 10px",
    border: "1px solid #ddd4",
    color: "#191919",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <Layout titulo="Integração GitHub">
      <h1>Pesquisando perfis no github</h1>
      <input
        type="text"
        onChange={(e) => {
          setUser(e.target.value);
        }}
        style={{
          margin: "15px 0",
        }}
        placeholder="username"
      />
      <button
        onClick={getGithubProfile}
        style={{
          margin: "10px 0",
          padding: "10px 20px",
        }}
      >
        Pesquisar User
      </button>
      {/* All Infos */}
      <div
        style={{
          marginTop: "30px",
          backgroundColor: "#aaaaaa10",
          padding: "25px 20px",
        }}
      >
        {/* Avatar + username + Location + Follows */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex" }} id="teste">
            <div
              style={{
                borderRadius: "50%",
                position: "relative",
                overflow: "hidden",
                width: "200px",
                height: "200px",
                objectFit: "contain",
              }}
            >
              <Image
                src={`${
                  dataUser.avatar_url === undefined
                    ? "/undefinedUser.png"
                    : `${dataUser.avatar_url}`
                }`}
                layout="fill"
                alt="img"
              />
            </div>
            {/* Follows + Username + Location */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "15px",
              }}
            >
              <span
                style={{
                  fontSize: "30px",
                  marginLeft: "30px",
                  marginTop: "20px",
                }}
              >
                {dataUser.login} - {dataUser.location}
              </span>
              {/* Follows and Following */}
              <div
                style={{
                  display: "flex",
                  margin: "10px",
                  height: "25px",
                  marginLeft: "30px",
                }}
              >
                <span style={style_btn_follow}>seguidores</span>
                <span style={style_btn_follow}>{dataUser.followers}</span>
                <span style={{ marginLeft: "10px" }}></span>
                <span style={style_btn_follow}>seguindo</span>
                <span style={style_btn_follow}>{dataUser.following}</span>
              </div>
            </div>
          </div>
        </div>
        {/* Infos det*/}
        <div
          style={{
            border: "1px solid #ddd2",
            borderRadius: "10px",
            margin: "20px 10px",
            padding: "20px",
            lineHeight: "1.5",
          }}
        >
          <h2>Bio: </h2>
          <span>{dataUser.bio}</span>
          <h2>Site: </h2>
          <Link href={`${dataUser.blog}`}>
            <a style={{ color: "#fff" }}>{dataUser.blog}</a>
          </Link>
          <h2>Twitter: </h2>
          <span>{dataUser.twitter_username}</span>
          <h2>Repositorios: </h2>
          <span>
            {dataUser.public_repos} -
            <Link
              href={`https://github.com/${dataUser.login}?tab=repositories`}
            >
              <a style={{ color: "#FFF" }}> Acessar </a>
            </Link>
          </span>
        </div>
      </div>
    </Layout>
  );
}
