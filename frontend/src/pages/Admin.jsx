import React, { useState } from "react";
import axios from "axios";

function Admin() {
  const [product, setProduct] = useState({});

  const changeInfos = (event) => {
    const changeDatas = { ...product };
    changeDatas[event.target.name] = event.target.value;
    setProduct({
      ...product,
      ...changeDatas,
    });
  };

  const createProduct = () => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/createproduct`, {
        title: product.title,
        price: product.price,
        img: product.img,
        alt: product.alt,
        description: product.description,
        category_id: product.category_id,
      })
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err))
      .finally((window.location.href = "/"));
  };

  return (
    <div className="bg-gray-100 flex flex-col justify-center text-center p-6">
      <h1 className="font-logo bg-orange py-1 text-2xl font-bold">
        BACK OFFICE HANG MEAS
      </h1>
      <form>
        <div className="p-4">
          <div className="flex flex-col justify-center text-center space-y-2 p-2">
            <label
              htmlFor="product"
              className="flex flex-col justify-center text-base"
            >
              <span className="font-semibold">Nom du plat</span>
              <input
                type="text"
                id="title"
                value={product.title}
                name="title"
                onChange={changeInfos}
                className="flex w-[100%] mx-auto h-[2.8rem] mt-1 text-center text-marron-claire"
              />
            </label>
            <label htmlFor="price" className="flex flex-col justify-center">
              <span className="font-semibold">Prix</span>
              <input
                type="text"
                id="price"
                value={product.price}
                name="price"
                onChange={changeInfos}
                className="flex w-[100%] mx-auto h-[2.8rem] mt-1 text-center text-marron-claire"
              />
            </label>
            <label htmlFor="image" className="flex flex-col justify-center">
              <span className="font-semibold">URL de l'image</span>
              <input
                type="text"
                id="img"
                value={product.img}
                name="img"
                onChange={changeInfos}
                className="flex w-[100%] mx-auto h-[2.8rem] mt-1 text-center text-marron-claire"
              />
            </label>
            <label htmlFor="alt" className="flex flex-col justify-center">
              <span className="font-semibold">Alt</span>
              <input
                type="text"
                id="alt"
                value={product.alt}
                name="alt"
                onChange={changeInfos}
                className="flex w-[100%] mx-auto h-[2.8rem] mt-1 text-center text-marron-claire"
              />
            </label>
            <label
              htmlFor="description"
              className="flex flex-col justify-center"
            >
              <span className="font-semibold">Description</span>
              <input
                type="text"
                id="description"
                value={product.description}
                name="description"
                onChange={changeInfos}
                className="flex w-[100%] mx-auto h-[2.8rem] mt-1 text-center text-marron-claire"
              />
            </label>
            <label
              htmlFor="category_id"
              className="flex flex-col justify-center"
            >
              <span className="font-semibold">Catégorie</span>
              <input
                type="text"
                id="category_id"
                value={product.category_id}
                name="category_id"
                onChange={changeInfos}
                className="flex w-[100%] mx-auto h-[2.8rem] mt-1 text-center text-marron-claire"
              />
            </label>
          </div>
        </div>
        <button type="button" onClick={() => createProduct()} className="">
          Enregistrer
        </button>
      </form>
    </div>
  );
}

export default Admin;
