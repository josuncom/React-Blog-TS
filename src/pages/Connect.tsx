import "../components/Connect.css";

export default function Connect() {
  return (
    <>
      <div className="ConnectContainer">
        <div className="ConnectBox">
          <div className="Name1">조 은</div>
          <div className="Name2">Eun Cho</div>

          <div className="ConnectContent">
            <div className="Content1">Web Developer</div>
            <div className="Content2">
              If you need to talk to me,
              <br />
              please email to
            </div>
            <div className="Email">euny_sky11@naver.com</div>
            <div className="Other">
              <a
                className="git"
                href="https://github.com/josuncom"
                target="_blank"
              >
                G I T H U B
              </a>
              <span> | </span>
              <a
                className="velog"
                href="https://velog.io/@josuncom"
                target="_blank"
              >
                V E L O G
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
