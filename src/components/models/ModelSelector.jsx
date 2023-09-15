import React from "react";
import CarModel from "./CarModel";

const ModelSelector = () => {
  const carData = [
    {
      title: "Audi A1 S-Line",
      url: "https://i.pinimg.com/originals/96/88/8b/96888bc59aa2dc19fc9d60e4e1f3c1dc.png",
      model: "Audi",
      mark: "A1",
      year: 2012,
      doors: 4 / 5,
      ac: "Yes",
      transmission: "Manual",
      fuel: "Gasoline",
      perDay: "$45",
    },
    {
      title: "VW Golf 6",
      url: "https://www.dreamrentacar.bg/images/golf/c-fakepath-wvgolf1.jpg?w=614&h=395",
      model: "Golf 6",
      mark: "Volkswagen",
      year: 2008,
      doors: 4 / 5,
      ac: "Yes",
      transmission: "Manual",
      fuel: "Diesel",
      perDay: "$37",
    },
    {
      title: "Toyota Camry",
      url: "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/CamryModelImage.jpg",
      model: "Camry",
      mark: "Toyota",
      year: 2008,
      doors: 4 / 5,
      ac: "Yes",
      transmission: "Automatic",
      fuel: "Hybrid",
      perDay: "$30",
    },
    {
      title: "Mercedes-Benz GLK",
      url: "data:image/jpeg;base64,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/sn4yvOlTbuHxqUnpgitSJU8LFGsT5hlFu5mnfr0aYf3mM+v0WYFvaznwa0D89YbEMjKymzKQynsINwZ2eB23hh6Ws5c1HCj0QHVARSuUPf2TfUnXU6E8bNHRBszsrf5h/dNrC9Fmy0IJou9tbPUcjzAIB84ER0VYoH0+Iq5mxOJdSTY2FOmuWmvzPll7JZwM18LgqdMBaaKqjgFUCbMBERAREQEREBERATBiMMjizAGZ4gQWJ3Vwr8aYkZW6PsG3u2nYRA4N+jLCngWEwN0W4bk7Sw4gVweiuh/WNPh6K6X9Y0siIFaP0U0j/SGalXoiU8K9vu3lrRApiv0JsxuuLVfGmT/AKhPA6Eqv9uXyon/AHy6ogVHhehdb/lsa7r2JTC+V2Zp1ezOjrA0QOozkc2P7p2MQI3D7DwyezSQeU3UoKvBVHgBMsQPgE+xEBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERNari0VspPWte1jw11vw90/CBsxNBNp0iLhtAQCbG2vbpoPpY3tael2hTNrNe/KxvwuRY63tygbsTwjgi44GIHuIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgJjqKIiAyjsh0HYPhEQPicIiIH/2Q==",
      model: "Benz GLK",
      mark: "Mercedes",
      year: 2008,
      doors: 4 / 5,
      ac: "Yes",
      transmission: "Manual",
      fuel: "Hybrid",
      perDay: "$50",
    },
    {
      title: "Toyoto Fortuner",
      url: "https://www.pngmart.com/files/22/Toyota-Fortuner-PNG-Isolated-Photo.png",
      model: "Fortuner",
      mark: "Toyota",
      year: 2020,
      doors: 4 / 5,
      ac: "Yes",
      transmission: "Manual",
      fuel: "Hybrid",
      perDay: "$60",
    },
    {
      title: "Ford Endeavour",
      url: "https://images.carandbike.com/car-images/colors/ford/endeavour/ford-endeavour-diamond-white-sport.png?v=1614233105",
      model: "Endeavour",
      mark: "Ford",
      year: 2020,
      doors: 4 / 5,
      ac: "Yes",
      transmission: "Automatic",
      fuel: "Hybrid",
      perDay: "$45",
    },
  ];

  return (
    <div>
      <CarModel carData={carData} />
    </div>
  );
};

export default ModelSelector;
