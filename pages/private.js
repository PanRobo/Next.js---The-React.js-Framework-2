import React from "react";
import { withIronSession } from "next-iron-session";

const PrivatePage = ({ user }) => (
  <div>
    <h1>Hello {user.email}</h1>
    <p>Secret things live here...</p>
  </div>
);

export const getServerSideProps = withIronSession(
  async ({ req, res }) => {
    const user = req.session.get("user");

    if (!user) {
      res.statusCode = 404;
      res.end();
      return { props: {} };
    }

    return {
      props: { user }
    };
  },
  {
    cookieName: "MYSITECOOKIE",
    cookieOptions: {
      secure: false
    },
    password: "asdfkljhqkfydjtludhtlknedotokrow"
  }
);

export default PrivatePage;