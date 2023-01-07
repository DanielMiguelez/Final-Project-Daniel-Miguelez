import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Spin, Card } from 'antd';
import { MailOutlined, EditOutlined, UsergroupDeleteOutlined } from "@ant-design/icons"
import "./Profile.scss";

const Profile = () => {
 
  const { user } = useSelector((state) => state.auth);
  const [selectedImage] = useState(0);
  const images = [
    "https://static.vecteezy.com/system/resources/previews/007/226/475/non_2x/user-account-circle-glyph-color-icon-user-profile-picture-userpic-silhouette-symbol-on-white-background-with-no-outline-negative-space-illustration-vector.jpg",
  ];
  if (!user) {
    return <p>cargando</p>;
  }
  
  return (
    <div className="profilePadre">
      <div className="profilediv">
      {!user ?
        <Spin size="large" /> :
        <div className="site-card-border-less-wrapper ">
          <Card
            title={user.user.name}
            bordered={false}
            style={{
              width: 300,
              border: "1px solid lightGray",
              margin: "40px",
              background: "gray",
              opacity: .7,
              color: "#47311d",
            }}
          >
            <img src={images[selectedImage]} alt="" width={100} height={100} />
            <br />
            <p>Edit picture</p>
            <hr />
            <br />
            <br />
            <p><MailOutlined /> {user.user.email}</p>
            <p>
              <UsergroupDeleteOutlined /> {user.user.age}
            </p>
            
            <p>
              <EditOutlined /> Edit profile
            </p>
          </Card>
        </div>
      }
      </div>
    </div>
  );
};

export default Profile;
