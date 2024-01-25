import React from "react";
import star from "../assets/star.png";
import cart from "../assets/cart.png";
import purchase from "../assets/purchase.png";
import heart from "../assets/heart.png";

const SignupContainer = () => {
  return (
    <div className="bg-black w-2/4 text-white">
      <div className="mt-6">
        <div className="py-5">
          <div className="px-16 pb-20">
            <h2 className="text-2xl font-bold mt-5 mb-11">Create an Account</h2>
            <p className="mb-4">
              Create an account to enjoy all the benefits of our registered
              customers.
            </p>
            <ul className="list-none p-0 m-0 gap-4">
              <li className="flex gap-2 items-center py-1">
                <img className="w-6 h-6" src={heart} alt="favourite" />
                <span>Save your favourites across devices</span>
              </li>
              <li className="flex gap-2 items-center py-1">
                <img className="w-6 h-6" src={cart} alt="favourite" />
                <span>Save time at checkout for future orders</span>
              </li>
              <li className="flex gap-2 items-center py-1">
                <img className="w-6 h-6" src={purchase} alt="favourite" />
                <span>
                  Manage your purchases and returns in your order history
                </span>
              </li>
              <li className="flex gap-2 items-center py-1">
                <img className="w-6 h-6" src={star} alt="favourite" />
                <span>
                  Become a{" "}
                  <a
                    className="underline"
                    href="https://www.hugoboss.com/in/en/boss-experience/"
                    target="_blank"
                    title="Account benefits"
                  >
                    HUGO BOSS EXPERIENCE
                  </a>{" "}
                  member to profit from special offers
                </span>
              </li>
            </ul>
          </div>
          <form className="w-full px-16">
            <fieldset className="w-full mb-5">
              <button className="w-full bg-white uppercase font-semibold text-lg text-center text-black py-3 
              hover:scale-y-125 px-20">
                Register Now
              </button>
            </fieldset>
            <div class="w-full">
              <div class="float-right">
                <a
                  id="activateExpAccount"
                  href="/in/en/activation"
                  title="I registered in a store and want to activate my account"
                  class="underline text-white"
                >
                  I registered in a store and want to activate my account
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupContainer;
