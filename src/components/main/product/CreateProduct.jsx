import axios from "axios";
import React, { useState } from "react";
import Nav from "../Nav";

import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";
function CreateProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState({ name: "", url: "" });
  const [loading, setLoading] = useState(false);

  console.log(image);

  const handleImageChange = (file) => {
    const reader = (readFile) =>
      new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.onload = () => resolve(fileReader.result);
        fileReader.readAsDataURL(readFile);
      });

    reader(file).then((result) => setImage({ name: file?.name, url: result }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const items = {
      image: image.url,
      title,
      color,
      price,
      description,
    };

    setLoading(true);

    await axios

      .post("https://commerce-backend-rho.vercel.app/api/v1/product", items, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        try {
          if (res.status) {
            setLoading(false);
          }
        } catch (error) {
          console.log(error);
        }
      });
  };
  return (
    <Body>
      <Nav />

      <div className="form_body" encType="multipart/form-data">
        <div className="header">
          <h2>Create A Product</h2>
        </div>

        <form action="" onSubmit={onSubmit}>
          <div className="form_item">
            <label htmlFor="">Product Name</label>
            <input
              placeholder="e.g T-shirt"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form_item">
            <label htmlFor="">Description</label>
            <textarea
              placeholder="product description..."
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="form_item">
            <label htmlFor="">Price</label>
            <input
              placeholder="e.g Emeka"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="form_item">
            <label htmlFor="">Color</label>
            <input
              value={color}
              onChange={(e) => setColor(e.target.value)}
              type="color"
              className="color"
            />
          </div>
          <div className="form_item">
            <label htmlFor="">Product Image</label>
            <input
              placeholder="e.g johndoe@gmail.com"
              type="file"
              name="image"
              onChange={(e) => handleImageChange(e.target.files[0])}
              className="file"
            />
          </div>

          <div className="button">
            <button type="submit">
              <p>
                {loading ? <ClipLoader size={20} color="#fff" /> : "Submit"}
              </p>
            </button>
          </div>
        </form>
      </div>
    </Body>
  );
}

export default CreateProduct;

const Body = styled.div`
  width: 100%;
  margin: 0 auto;
  overflow-y: scroll;

  h2 {
    font-weight: 700;
  }

  .header {
    margin: 10px 0;
    font-size: 2rem;
  }
  .form_body {
    width: 600px;
    margin: 0 auto;
    @media screen and (max-width: 600px) {
      width: 330px;
    }
  }
  form {
    margin-top: 2rem;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    gap: 1rem;

    .form_item {
      display: flex;
      flex-direction: column;
      color: #010101;
      position: relative;

      input,
      textarea {
        border: 3px solid #f3f3f3;
        outline: none;
        width: 400px;
        height: 40px;
        border-radius: 10px;
        background: none;
        padding: 0 0.5rem;
        color: #010101;
      }

      .color {
        width: 100px;
        float: left;
        padding: 0 0;
      }

      textarea {
        height: 100px;
        padding-top: 10px;
      }

      .icon {
        position: absolute;
        right: 10px;
        top: 2.2rem;
      }

      .file{
        padding: 1rem 3rem;
      }
      .file::-webkit-file-upload-button {
  visibility: hidden;
}
.file::before {
  content: 'Select some files';
  display: inline-block;
  background: linear-gradient(top, #f9f9f9, #e3e3e3);
  border: 1px solid #999;
  border-radius: 3px;
  padding: 5px 8px;
  outline: none;
  white-space: nowrap;
  -webkit-user-select: none;
  cursor: pointer;
  text-shadow: 1px 1px #fff;
  font-weight: 700;
  font-size: 10pt;
}
.file:hover::before {
  border-color: black;
}
.file:active::before {
  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
}
    }

    .button {
      width: 100%;
      margin-top: 1rem;
      button {
        width: 100%;
        height: 40px;
        border-radius: 0.5rem;
        padding: 0 0.5rem;

        width: 400px;
      }
    }
  }
  .account {
    margin: 10.43px auto;
    width: 100%;
    display: flex;
    justify-content: center;
    a {
      color: #ff7700;
      transition: 0.4s;

      :hover {
        text-decoration: underline;
      }
    }
  }
`;
