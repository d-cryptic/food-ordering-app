import React from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";

const RowContainer = ({ flag, data }) => {
  return (
    <div
      className={`w-full my-12  ${
        flag ? "overflow-x-scroll" : "overflow-x-hidden"
      }`}>
      {data &&
        data.map((item) => (
          <div
            key={item.id}
            className=" w-300 md:w-340 h-auto my-12   
		   backdrop-blur-lg bg-cardOverlay rounded-lg p-2 hover:drop-shadow-lg">
            <div className="w-full flex items-center justify-between">
              <motion.img
                whileHover={{ scale: 1.2 }}
                src="https://firebasestorage.googleapis.com/v0/b/restaurantapp-2e605.appspot.com/o/Images%2F1654537602515-i5.png?alt=media&token=d9679f2a-b456-4d87-bbab-659449107981"
                alt=""
                className="w-40 -mt-8 drop-shadow-2xl"
              />
              <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md">
                <MdShoppingBasket className="text-white" />
              </motion.div>
            </div>

            <div className="w-full flex flex-col gap-4 items-end justify-end">
              <p className="text-textColor font-semibold text-base md:text-lg">
                Chocolate & Vanilla
              </p>
              <p className="mt-1 text-sm text-gray-500">45 Calories</p>
              <div className="flex items-center gap-8">
                <p className="text-lg text-headingColor font-semibold">
                  <span className="text-sm text-red-500">$</span>5.25{" "}
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default RowContainer;
