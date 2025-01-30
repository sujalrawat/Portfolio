import connect from "../config/connect.js";

export default function Connect() {
  return (
    <>
      <h3 className="connect-title">Connect</h3>
      <div className="connect-container">
        {connect.map((c) => (
          <div key={c.id} className="social">
            <a className="social-link" href={c.url}>
              <img className="social-img" src={c.img} alt="logo" />
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
