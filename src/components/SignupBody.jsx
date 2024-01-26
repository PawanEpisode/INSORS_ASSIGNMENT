import React, { useState } from "react";
import ContainerHeader from "./ContainerHeader";
import CustomInput from "./CustomInput";
import CustomPassword from "./CustomPassword";
import { Link, useNavigate } from "react-router-dom";
import rightarrow from '../assets/right-arrow.png';
import CustomSelect from "./CustomSelect/CustomSelect";
import { getDateOptions, getMonthOptions, getSalutationOptions, getYearOptions } from "../utils/helper";

const SignupBody = () => {
  const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        email: "",
        password: "",
        phone: '',
        emailCheckbox: false,
        offerCheckbox: false,
    })

    const [selectFormValues, setSelectFormValues] = useState({
      salutation: '',
      date: '',
      month: '',
      year: '',
      
    })
  
    const handleSelectChange = (value, handlertype) => {
      console.log('Selected:', value,handlertype);
      const tempValues = {...selectFormValues};
        switch (handlertype) {
          case 'salutation':
                tempValues['salutation'] = value;
                setSelectFormValues(tempValues);
                break;
          case 'date':
                tempValues['date'] = value;
                setSelectFormValues(tempValues);
                break;
            case 'month':
                tempValues['month'] = value;
                setSelectFormValues(tempValues);
                break;
            case 'year':
                tempValues['year'] = value;
                setSelectFormValues(tempValues);
                break;
            default:
              setSelectFormValues(tempValues);
                break;
        }
    };

    const handleFormValues = (event, handlertype) => {
        const tempValues = {...formValues};
        switch (handlertype) {
          case 'firstName':
                tempValues['firstName'] = event.target.value;
                setFormValues(tempValues);
                break;
          case 'lastName':
                tempValues['lastName'] = event.target.value;
                setFormValues(tempValues);
                break;
            case 'email':
                tempValues['email'] = event.target.value;
                setFormValues(tempValues);
                break;
            case 'password':
                tempValues['password'] = event.target.value;
                setFormValues(tempValues);
                break;
            case 'phone':
              tempValues['phone'] = event.target.value;
              setFormValues(tempValues);
              break;
            case 'emailCheckbox':
              tempValues['emailCheckbox'] = event.target.checked;
              setFormValues(tempValues);
              break;
            case 'offerCheckbox':
              tempValues['offerCheckbox'] = event.target.checked;
              setFormValues(tempValues);
              break;
            default:
                setFormValues(tempValues);
                break;
        }
    }

    const handleLogin = () => {
        // validataion 

        // const validated = handleValidation()
        console.log('handleLogin', formValues);
        navigate('/browse');
    }
  return (
    <>
      <ContainerHeader text={"My Hugo Boss"} fontsize={"small"} />
      <div className="w-full">
        <div className="w-full lg:px-80 sm:px-32">
          <div className="w-full bg-white mt-16">
            <h2 className="text-3xl font-extrabold uppercase my-8">
              Create Account
            </h2>
            <div className="w-full">
              <form className="w-full" onSubmit={(e) => e.preventDefault()}>
                <fieldset className="w-full">
                  <div className="my-6">
                    <p className="text-lg font-medium my-3.5 text-black">
                      Register now and start enjoying the benefits of a customer
                      account right away.
                    </p>
                    <p className="text-lg font-medium my-3.5 text-black">
                      Please complete all fields marked with an *.
                    </p>
                  </div>
                  <div className="w-1/2 mt-6">
                    <CustomSelect
                      label={"Salutation"}
                      options={getSalutationOptions()}
                      onChange={(value) =>
                        handleSelectChange(value, "salutation")
                      }
                    />
                  </div>
                  <div className="w-full flex gap-8 justify-center items-center mb-8">
                    <CustomInput
                      pattern="[A-Za-z-' ]+"
                      required={true}
                      title="Enter a valid first name. Only letters, hyphens, apostrophes, and spaces are allowed."
                      name={"firstName"}
                      text={"* First Name"}
                      type={"text"}
                      value={formValues?.firstName}
                      handleChange={(e) => handleFormValues(e, "firstName")}
                    />
                    <CustomInput
                      required={true}
                      pattern="[A-Za-z-' ]+"
                      title="Enter a valid last name. Only letters, hyphens, apostrophes, and spaces are allowed."
                      name={"lastName"}
                      text={"* Last Name"}
                      type={"text"}
                      value={formValues?.lastName}
                      handleChange={(e) => handleFormValues(e, "lastName")}
                    />
                  </div>
                  <div className="w-full flex flex-col gap-3 mb-4">
                    <p className="mx-4 mb-6 font-semibold">
                      DATE OF BIRTH (OPTIONAL)
                    </p>
                    <div className="w-full flex gap-8 justify-center items-center">
                      <CustomSelect
                        label={"Day"}
                        options={getDateOptions()}
                        onChange={(value) => handleSelectChange(value, "date")}
                      />
                      <CustomSelect
                        label={"Month"}
                        options={getMonthOptions()}
                        onChange={(value) => handleSelectChange(value, "month")}
                      />
                      <CustomSelect
                        label={"Year"}
                        options={getYearOptions()}
                        onChange={(value) => handleSelectChange(value, "year")}
                      />
                    </div>
                  </div>

                  <div>
                    <CustomInput
                      pattern="\d{3}[-.\s]?\d{3}[-.\s]?\d{4}"
                      title="Enter a valid phone number. For example: 123-456-7890"
                      name={"phoneNumber"}
                      required={true}
                      text={"Phone number"}
                      type={"text"}
                      value={formValues?.phone}
                      handleChange={(e) => handleFormValues(e, "phone")}
                    />
                    <small>Example: +99 123 4567</small>
                  </div>

                  <CustomInput
                    names={"email"}
                    required={true}
                    text={"* E-mail address"}
                    type={"email"}
                    value={formValues?.email}
                    handleChange={(e) => handleFormValues(e, "email")}
                  />
                  <CustomPassword
                    text={"* Password"}
                    value={formValues?.password}
                    handleChange={(e) => handleFormValues(e, "password")}
                  />
                  <div className="flex justify-start items-center gap-3">
                    <input
                      className="mt-5 h-[20px] w-[20px]"
                      type="checkbox"
                      value={formValues?.emailCheckbox}
                      onChange={(e) => handleFormValues(e, "emailCheckbox")}
                    />
                    <div className="relative top-8 font-semibold flex flex-col gap-3 justify-center items-start">
                      <span className="text-black relative mt-5">E-Mail</span>
                      <span>
                        Never miss our new products and discounts. Be sure you
                        are up to date on the new lifestyle and fashion trends.
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-start items-center gap-3">
                    <input
                      className="mt-5 h-[20px] w-[20px]"
                      type="checkbox"
                      value={formValues?.offerCheckbox}
                      onChange={(e) => handleFormValues(e, "offerCheckbox")}
                    />
                    <div className="relative top-8 font-semibold flex flex-col gap-3 justify-center items-start">
                      <span className="text-black relative mt-5">
                        PERSONALIZED OFFERS
                      </span>
                      <span>
                        Get unique content and recommendations based on your
                        personalized interests and shopping habits.
                      </span>
                    </div>
                  </div>
                  <div className="mt-16 w-full px-12 border-t border-gray-400">
                    <div className="w-full px-4">
                      <div className="w-full mt-6">
                        <span className="flex flex-col justify-center">
                          <p className="text-sm">
                            The{" "}
                            <a
                              title="Terms and Conditions Experience"
                              target="_blank"
                              href="https://www.hugoboss.com/in/en/about-hugo-boss/terms-and-conditions-experience/terms-conditions-experience.html"
                              className='underline text-black font-semibold text-lg'
                            >
                              Terms and Conditions
                            </a>{" "}
                            as well as the associated{" "}
                            <a
                              title="Privacy Statement Experience"
                              target="_blank"
                              href="https://www.hugoboss.com/in/en/about-hugo-boss/privacy-statement-experience/privacy-statement-experience.html"
                              className="underline font-semibold text-lg"
                              >
                              Privacy Policy
                            </a>{" "}
                            are applicable for participation in HUGO BOSS
                            EXPERIENCE.
                          </p>
                          <p>&nbsp;</p>
                          <p>
                            By clicking “create account”, I confirm that I have
                            read and agree to the{" "}
                            <a
                              title="Terms and Conditions Experience"
                              target="_blank"
                              href="https://www.hugoboss.com/in/en/about-hugo-boss/terms-and-conditions-experience/terms-conditions-experience.html"
                              className="underline font-semibold text-lg"
                            >
                              Terms and Conditions
                            </a>{" "}
                            of HUGO BOSS AG for participation in HUGO BOSS
                            EXPERIENCE.&nbsp;
                          </p>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end mt-10">
                    <button
                        className="bg-black flex justify-center items-center gap-2 uppercase text-center text-white py-3 hover:scale-y-125 px-20"
                        onClick={handleLogin}
                      >
                        CREATE ACCOUNT
                        <img className="w-6 h-6" alt="arrow" src={rightarrow} />
                      </button>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupBody;
